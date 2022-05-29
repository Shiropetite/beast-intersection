import { Entity } from './entity';
import { box, hero, mapHTML, sleep, inventory, dialog } from './index';

let fishCounter = 0;

export enum FishSpecies {
  BAR_COMMUN="bar commun",
  SAUMON="saumon"
}

export class Fish extends Entity {
  private readonly MAX_LIFE: number;
  private isCatching: boolean = false;
  private name: FishSpecies;
  private life: number;
  private number: number;

  private lifeInterval: NodeJS.Timer;
  private furryInterval: NodeJS.Timer;
  private isFurry: boolean = false;

  constructor(name: FishSpecies, life: number, top: number, left: number, hitTop: number, hitLeft: number) {
    super(`fish-${fishCounter + 1}`, top, left, box - 6, box - 6, hitTop, hitLeft, box, box);
    this.number = fishCounter++;
    this.MAX_LIFE = life;
    this.life = life;
    this.name = name;

    this.create();
    this.update();
  }

  async interact(): Promise<boolean> {
    if(this.isCatching) {
      if(this.isFurry) {
        this.life -= 1;
      }
      else {
        this.life -= 5;
      }
      this.updateLife();

      if(this.life <= 0) {
        this.stopCatch();
        return true;
      }
    }
    else {
      await this.beginCatch();
    }
    return false;
  }

  async beginCatch(): Promise<void> {
    hero.setCanInteract(false);
    hero.setCanMove(false);
    this.isCatching = true;

    dialog.update(`Le poisson a mordu à l'hameçon !`);
    dialog.show();
    
    await sleep(1000);

    dialog.hide();
    this.showLife();
    hero.setCanInteract(true);

    this.lifeInterval = setInterval(() => { 
      if(this.life < this.MAX_LIFE) {
        this.life += 1; this.updateLife()
      }
    }, 250)

    this.addFurryMode()
  }

  async stopCatch(): Promise<void> {
    clearInterval(this.lifeInterval);
    clearInterval(this.furryInterval);

    hero.setCanInteract(false);
    this.remove();

    dialog.update(`Vous avez attapé un ${this.name} !!! :)`);
    dialog.show();

    await sleep(2000);

    dialog.hide();

    inventory.addObject(this.name);

    hero.setCanInteract(true);
    hero.setCanMove(true);
  }

  addFurryMode(): void {
    this.furryInterval = setInterval(() => {
      this.isFurry = true;
      document.getElementById(this.getId()).style.backgroundColor = 'red';
      setTimeout(() => { 
        this.isFurry = false;
        document.getElementById(this.getId()).style.backgroundColor = 'blue';
      }, 2500)
    }, 5000)
  }

  create(): void {
    super.create();
    const fish = document.getElementById(this.getId());
    fish.classList.add('fish')

    const lifeContainer = document.createElement('div');
    lifeContainer.id = `life-container-${this.number}`;
    lifeContainer.classList.add('life-container')
    lifeContainer.style.top = `${this.getTop() - 30}px`;
    lifeContainer.style.left = `${this.getLeft()}px`;
    lifeContainer.style.display = 'none'
    mapHTML.appendChild(lifeContainer);

    const life = document.createElement('div');
    life.id = `life-${this.number}`;
    life.classList.add('life')
    life.style.top = `${this.getTop() - 30}px`;
    life.style.left = `${this.getLeft()}px`;
    life.style.display = 'none'
    mapHTML.appendChild(life);
  }

  updateLife(): void {
    const element = document.getElementById(`life-${this.number}`);
    element.style.backgroundColor = 'green';

    if(this.life < 66 / 100 * this.MAX_LIFE) {
      element.style.backgroundColor = 'yellow';
    }
    if(this.life < 20 / 100 * this.MAX_LIFE) {
      element.style.backgroundColor = 'red';
    }
    element.style.width = `${128 * this.life / this.MAX_LIFE}px`
  }

  showLife() {
    document.getElementById(`life-container-${this.number}`).style.display = 'block'
    document.getElementById(`life-${this.number}`).style.display = 'block'
  }

  remove() {
    super.remove();
    mapHTML.removeChild(document.getElementById(`life-container-${this.number}`))
    mapHTML.removeChild(document.getElementById(`life-${this.number}`))
  }
}