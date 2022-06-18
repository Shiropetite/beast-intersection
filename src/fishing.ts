import { Entity } from './entity';
import { box, player, mapHTML, sleep, inventory, dialog } from './index';
import { PlayerState } from './entities/PlayerEntity';

let fishCounter = 0;

export enum FishSpecies {
  BAR_COMMUN="bar commun",
  SAUMON="saumon"
}

let isCatching: boolean = false; // Est ce que le joueur attrape le poisson
let lifeInterval: NodeJS.Timer; // intervale dans lequel le poisson se régenère
let angryInterval: NodeJS.Timer; // intervale dans lequel le poisson est en colère
let isAngry: boolean = false; // Est ce que le poisson est en colère

export class Fish extends Entity {
  private readonly MAX_LIFE: number; // Vie totale du poisson
  private name: FishSpecies; // Éspece de poisson
  private life: number; // Vie actuelle du poisson
  private regeneration: number; // Nombre de pv que le poisson régénère par "seconde"
  private angryTime: number; // Temps en milliseconde durant lequel le poisson est en colère
  private angryFrequency: number; // Temps en milliseconde entre chaque frénésie
  private tensionMultiplier: number; // Multiplicateur de tension infligé à la canne à peche

  constructor(name: FishSpecies, life: number, top: number, left: number, hitTop: number, hitLeft: number) {
    super(`fish-${fishCounter++}`, 'fish', box - 6, box - 6, top, left, hitTop, hitLeft, box, box);
    this.MAX_LIFE = life;
    this.life = life;
    this.name = name;

    this.createHTML();
    super.updateHTML();
  }

  async interact(): Promise<boolean> {
    if(isCatching) {
      if(isAngry) {
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
    const lifeContainer = document.createElement('div');
    lifeContainer.id = `life-container`;
    lifeContainer.classList.add('life-container')
    lifeContainer.style.top = `${this.getTop() - 30}px`;
    lifeContainer.style.left = `${this.getLeft()}px`;
    lifeContainer.style.display = 'none';
    mapHTML.appendChild(lifeContainer);

    const life = document.createElement('div');
    life.id = `life`;
    life.classList.add('life');
    life.style.top = `${this.getTop() - 30}px`;
    life.style.left = `${this.getLeft()}px`;
    life.style.display = 'none';
    mapHTML.appendChild(life);

    player.setState(PlayerState.ACTING)
    isCatching = true;

    dialog.update(`Le poisson a mordu à l'hameçon !`);
    dialog.show();
    
    await sleep(1000);

    dialog.hide();
    this.showLife();

    lifeInterval = setInterval(() => { 
      if(this.life < this.MAX_LIFE) {
        this.life += 1; this.updateLife()
      }
    }, 250)

    this.addAngryMode()
  }

  async stopCatch(): Promise<void> {
    clearInterval(lifeInterval);
    clearInterval(angryInterval);

    
    this.removeHTML();

    dialog.update(`Vous avez attapé un ${this.name} !!! :)`);
    dialog.show();

    await sleep(2000);

    dialog.hide();

    player.setState(PlayerState.IDLE)
    inventory.addObject(this.name);

    isCatching = false;
  }

  addAngryMode(): void {
    angryInterval = setInterval(() => {
      isAngry = true;
      document.getElementById(this.getId()).style.backgroundColor = 'red';
      setTimeout(() => { 
        isAngry = false;
        document.getElementById(this.getId()).style.backgroundColor = 'blue';
      }, 2500)
    }, 5000)
  }  

  // Créer tout les éléments HTML concernant le poisson
  createHTML(): void {
    super.createHTML();
    const fish = document.getElementById(this.getId());
    fish.classList.add('fish')
  }

  // Met a jour l'HTML de la vie du poisson
  updateLife(): void {
    const element = document.getElementById(`life`);

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
    document.getElementById(`life-container`).style.display = 'block'
    document.getElementById(`life`).style.display = 'block'
  }

  // Supprime tout les éléments HTML concernant le poisson
  removeHTML(): void {
    super.removeHTML();
    mapHTML.removeChild(document.getElementById(`life-container`))
    mapHTML.removeChild(document.getElementById(`life`))
  }
}