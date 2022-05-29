import { Entity } from './entity';
import { box, hero, mapHTML, sleep, inventory, dialog } from './index';

export class Fish extends Entity {
  private readonly MAX_LIFE: number;
  private life: number;
  private isCatching: boolean = false;

  constructor(life: number, top: number, left: number, hitTop: number, hitLeft: number) {
    super('fish', top, left, box - 6, box - 6, hitTop, hitLeft, box, box);
    this.MAX_LIFE = life;
    this.life = life;
  }

  async interact(): Promise<boolean> {
    if(this.isCatching) {
      this.life -= 10;
      this.updateLife();

      if(this.life <= 0) {
        this.stopCatch();
        inventory.addObject('poisson');
        return false;
      }
    }
    else {
      await this.beginCatch();
    }
    return true;
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
    dialog.update(`Vous avez attapé un poisson random !!! :)`);

    await sleep(2000);

    dialog.hide();
    hero.setCanInteract(true);
    hero.setCanMove(true);
  }

  create(): void {
    super.create();

    const element1 = document.createElement('div');
    element1.id = 'life-receptacle';
    element1.style.top = `${this.getTop() - 30}px`;
    element1.style.left = `${this.getLeft()}px`;
    element1.style.display = 'none'
    mapHTML.appendChild(element1);

    const element2 = document.createElement('div');
    element2.id = 'life';
    element2.style.top = `${this.getTop() - 30}px`;
    element2.style.left = `${this.getLeft()}px`;
    element2.style.display = 'none'
    mapHTML.appendChild(element2);
  }

  updateLife(): void {
    const element = document.getElementById('life');
    if(this.life < 100) {
      element.style.backgroundColor = 'yellow';
      element.style.width = `${128 * this.life / this.MAX_LIFE}px`
    }
    if(this.life === 0) {
      element.style.backgroundColor = 'red';
    }
  }

  showLife() {
    document.getElementById('life-receptacle').style.display = 'block'
    document.getElementById('life').style.display = 'block'
  }

  remove() {
    super.remove();
    mapHTML.removeChild(document.getElementById('life-receptacle'))
    mapHTML.removeChild(document.getElementById('life'))
  }
}