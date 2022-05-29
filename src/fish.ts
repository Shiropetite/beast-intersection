import { Entity } from './entity';
import { box, hero, mapHTML, sleep, inventory, dialog } from './index';

let fishCounter = 0;

export enum FishSpecies {
  BAR_COMMUN="bar commun",
  SAUMON="saumon"
}

export class Fish extends Entity {
  private readonly MAX_LIFE: number; // Vie total du poisson
  private isCatching: boolean = false; // Est ce que le joueur attrape le poisson
  private number: number; // numéro du poisson
  private lifeInterval: NodeJS.Timer; // intervale dans lequel le poisson se régenère
  private angryInterval: NodeJS.Timer; // intervale dans lequel le poisson est en colère
  private isAngry: boolean = false; // Est ce que le poisson est en colère
  
  private name: FishSpecies; // Espece de poisson
  private life: number; // Vie du poison
  private regeneration: number; // Nombre de pv que le poisson régénère
  private angryTime: number; // Temps en miliseconde dans lequel le poisson est en colère

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
      if(this.isAngry) {
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

    this.addAngryMode()
  }

  async stopCatch(): Promise<void> {
    clearInterval(this.lifeInterval);
    clearInterval(this.angryInterval);

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

  addAngryMode(): void {
    this.angryInterval = setInterval(() => {
      this.isAngry = true;
      document.getElementById(this.getId()).style.backgroundColor = 'red';
      setTimeout(() => { 
        this.isAngry = false;
        document.getElementById(this.getId()).style.backgroundColor = 'blue';
      }, 2500)
    }, 5000)
  }

  // Créer tout les éléments HTML concernant le poisson
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

  // Met a jour l'HTML de la vie du poisson
  updateLife(): void {
    const element = document.getElementById(`life-${this.number}`);

    if(this.life < 66 / 100 * this.MAX_LIFE) {
      element.style.backgroundColor = 'yellow';
    }
    else if(this.life < 20 / 100 * this.MAX_LIFE) {
      element.style.backgroundColor = 'red';
    }
    else {
      element.style.backgroundColor = 'green';
    }

    element.style.width = `${128 * this.life / this.MAX_LIFE}px`;
  }

  // Affiche la vie du poisson 
  showLife() {
    document.getElementById(`life-container-${this.number}`).style.display = 'block'
    document.getElementById(`life-${this.number}`).style.display = 'block'
  }

  // Supprime tout les éléments HTML concernant le poisson
  remove(): void {
    super.remove();
    mapHTML.removeChild(document.getElementById(`life-container-${this.number}`))
    mapHTML.removeChild(document.getElementById(`life-${this.number}`))
  }
}