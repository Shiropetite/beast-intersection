import * as _ from 'lodash';
import './style.css';

// Game
import { Hero } from './hero';
import { PNJ } from './pnj';
import { Chrono } from './chrono';
import { Dialog } from './dialog';
import { Inventory } from './inventory';
import { Resource, ResourceType } from './resource';
import { Fish, FishSpecies } from './fishing';
import { Entity } from './entity';

// routine
const nookRoutine = require('./characters/nook/first-routine.json');

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export enum Direction {
  UP='z',
  LEFT='q',
  RIGHT='d',
  DOWN='s'
}

export enum Key {
  // actions
  PAUSE='p',
  INTERACT='e',
  INVENTORY='i',
  // direction
  UP='z',
  LEFT='q',
  RIGHT='d',
  DOWN='s'
}

export const box = 64 * 2;

export let cameraHTML: HTMLElement = null;
export let mapHTML: HTMLElement = null;
let chrono: Chrono = null;
export let dialog: Dialog = null;
export let inventory: Inventory = null;

export let hero: Hero = null;
let nook: PNJ = null;
const pnjs: PNJ[] = [];
let entities: Entity[] = []
export const colisions: any[] = [
  // mur de gauche
  {
    top: 0,
    left: 0,
    width: box - 6,
    height: box * 10
  },
  // mur du haut
  {
    top: 0,
    left: box,
    width: box * 14 - 6,
    height: box 
  } ,
  // mur de droite
  {
    top: 0,
    left: box * 15,
    width: box,
    height: box * 10
  },
  // mur du bas
  {
    top: box * 9,
    left: box,
    width: box * 14 - 6,
    height: box 
  },
  // riviere
  {
    top: 0,
    left: box * 9,
    width: box * 2,
    height: box * 10
  },
];

let dialogOpen: any = null

export const interact = async () => {
  let isAction = false;
  pnjs.forEach((pnj) => {
    const collide = isColliding(hero.getTop(), hero.getLeft(), hero.getWidth(), hero.getHeight(),
                                pnj.getTop() - (box), pnj.getLeft() - (box), pnj.getWidth() + (box * 2), pnj.getHeight() + (box * 2));
    if(collide && !!pnj.getAction().dialog) {
      pnj.interact(dialog);
      dialogOpen = pnj
      chrono.stop();
      isAction = true
    }
  })

  if(isAction) return;

  let toRemove = -1;
  for(let i = 0; i < entities.length; i++) {
    const collide = entities[i].colide(hero.getTop(), hero.getLeft(), hero.getWidth(), hero.getHeight())
    
    if(collide) {
      const remove = await entities[i].interact();
      if(remove) toRemove = i;
    }
  }

  if(toRemove >= 0) {
    entities = entities.filter((_, i) => i !== toRemove)
  }
}

export const routine = (time: string) => {
  pnjs.forEach((pnj) => {
    pnj.doRoutine(time);
  })
}

export const isColliding = (top1: number, left1: number, width1: number, height1: number, top2: number, left2: number, width2: number, height2: number) => 
  (left1 + width1) > left2 && left1 < (left2 + width2)
    && (top1 + height1) > top2 && top1 < (top2 + height2);

const initHTML = () => {
  const camera = document.createElement('div');
  camera.id = 'camera';
  camera.classList.add('camera');

  const map = document.createElement('div');
  map.id = 'map';
  map.classList.add('map');

  camera.appendChild(map);
  document.body.appendChild(camera); 
}

const onLoad = () => {
  initHTML();
  
  cameraHTML = document.getElementById('camera');
  mapHTML = document.getElementById('map');
  chrono = new Chrono(6,0);
  dialog = new Dialog();
  inventory = new Inventory();

  hero = new Hero(box * 2, box * 4);
  nook = new PNJ('Tom Nook', box * 3, box * 2, nookRoutine);
  pnjs.push(nook);
  
  colisions.push(hero);
  colisions.push(nook);


  entities.push(new Resource(ResourceType.PIERRE, (box * 7), (box * 4)));
  entities.push(new Resource(ResourceType.BRANCHE, (box * 2), (box * 7)));
  entities.push(new Fish(FishSpecies.BAR_COMMUN, 100, (box * 4), (box * 9), 0, -box));
  entities.push(new Fish(FishSpecies.SAUMON, 300, (box * 7), (box * 9), 0, -box));
} 

export let wait: boolean = false;
const keyListener = async (event: any) => {
  if(wait) return;
  wait = true;
  setTimeout(() => { wait = false }, 150)
  if(hero.getCanInteract() && event.key === Key.PAUSE) {
    if(chrono.isRunning()) {
      chrono.stop();
    }
    else {
      chrono.start();
    }
    return;
  }
  if(hero.getCanInteract() && event.key === Key.INTERACT) {
    if(!dialog.isVisible() && chrono.isRunning()) {
      await interact();
    }
    else if(dialogOpen !== null){
      dialogOpen.interact(dialog)
      
      if(!dialog.isVisible()) {
        dialogOpen = null;
        chrono.start()
      }
    }
    else if (dialog.isVisible()){
      dialog.hide();
    }
    return;
  }
  if(chrono.isRunning() && event.key === Key.INVENTORY) {
    inventory.isVisible() ? inventory.hide() : inventory.show();
    return;
  }
  if(chrono.isRunning() && inventory.isVisible() && Object.values(Direction).includes(event.key)) {
    inventory.moveCursor(event.key);
    return;
  }
  if(hero.getCanMove() && chrono.isRunning() && !dialog.isVisible() && Object.values(Direction).includes(event.key)) {
    hero.move(event.key);
    return;
  }
  if(!chrono.isRunning() && dialog.haveChoice() && ['z', 's'].includes(event.key)) {
    dialog.updateChoice(event.key);
    return;
  }
}

window.addEventListener('load', onLoad);
window.addEventListener('keypress', keyListener);