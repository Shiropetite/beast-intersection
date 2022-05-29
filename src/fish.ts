import { Entity } from './entity';
import { box, hero, mapHTML, sleep, inventory, dialog } from './index';

export class Fish extends Entity {
  private readonly MAX_LIFE: number;
  private life: number;
  private isCatching: boolean = false;
  private name: string;

  constructor(name: string, life: number, top: number, left: number, hitTop: number, hitLeft: number) {
    super(`fish-${name}`, top, left, box - 6, box - 6, hitTop, hitLeft, box, box);
    this.MAX_LIFE = life;
    this.life = life;
    this.name = name;

    this.create();
    this.update();
  }

  async interact(): Promise<boolean> {
    if(this.isCatching) {
      this.life -= 10;
      this.updateLife();

      if(this.life <= 0) {
        this.stopCatch();
        inventory.addObject(this.name);
        return true;
      }
    }
    else {
      await this.beginCatch();
    }
    return false;
  }

  async beginCatch() {
    hero.setCanInteract(false);
    hero.setCanMove(false);
    this.isCatching = true;
    dialog.show();
    dialog.update(`Le poisson a mordu à l'hameçon !`);

    await sleep(1000);

    dialog.hide();
    this.showLife();
    hero.setCanInteract(true)
  }

  async stopCatch() {
    hero.setCanInteract(false);
    this.remove();

    dialog.show();
    dialog.update(`Vous avez attapé un ${this.name} !!! :)`);

    await sleep(2000);

    dialog.hide();
    hero.setCanInteract(true);
    hero.setCanMove(true);
  }

  create(): void {
    super.create();
    const fish = document.getElementById(this.getId());
    fish.classList.add('fish')

    const element1 = document.createElement('div');
    element1.id = `life-receptacle-${this.name}`;
    element1.classList.add('life-receptacle')
    element1.style.top = `${this.getTop() - 30}px`;
    element1.style.left = `${this.getLeft()}px`;
    element1.style.display = 'none'
    mapHTML.appendChild(element1);

    const element2 = document.createElement('div');
    element2.id = `life-${this.name}`;
    element2.classList.add('life')
    element2.style.top = `${this.getTop() - 30}px`;
    element2.style.left = `${this.getLeft()}px`;
    element2.style.display = 'none'
    mapHTML.appendChild(element2);
  }

  updateLife(): void {
    const element = document.getElementById(`life-${this.name}`);
    if(this.life < 70) {
      element.style.backgroundColor = 'yellow';
    }
    if(this.life < 30) {
      element.style.backgroundColor = 'red';
    }
    element.style.width = `${128 * this.life / this.MAX_LIFE}px`
  }

  showLife() {
    document.getElementById(`life-receptacle-${this.name}`).style.display = 'block'
    document.getElementById(`life-${this.name}`).style.display = 'block'
  }

  remove() {
    super.remove();
    mapHTML.removeChild(document.getElementById(`life-receptacle-${this.name}`))
    mapHTML.removeChild(document.getElementById(`life-${this.name}`))
  }
}