import * as _ from 'lodash';
import './style.css';

// Game
import { PlayerEntity, PersonState } from './entities/PlayerEntity';
import { Chrono } from './chrono';
import { Dialog } from './dialog';
import { Inventory } from './inventory';
import { Resource, ResourceType } from './resource';
import { Fish, FishSpecies } from './fishing';
import { Entity } from './entity';
import { NpcEntity } from './entities/NpcEntity';
import { SolidEntity } from './entities/SolidEntity';
import { DialogElement } from './ui/DialogElement';
import { TimeManager } from './management/TimeManager';
import { TimeElement } from './ui/TimeElement';

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
export let dialog: Dialog = null;
export let inventory: Inventory = null;

export let player: PlayerEntity = null;
let nook: NpcEntity = null;
export const solidEntities: SolidEntity[] = [];
let entities: Entity[] = []
export const collisions: any[] = [
  // mur de gauche
  {
    solidTop: 0,
    solidLeft: 0,
    solidWidth: box - 6,
    solidHeight: box * 10
  },
  // mur du haut
  {
    solidTop: 0,
    solidLeft: box,
    solidWidth: box * 14 - 6,
    solidHeight: box 
  } ,
  // mur de droite
  {
    solidTop: 0,
    solidLeft: box * 15,
    solidWidth: box,
    solidHeight: box * 10
  },
  // mur du bas
  {
    solidTop: box * 9,
    solidLeft: box,
    solidWidth: box * 14 - 6,
    solidHeight: box 
  },
  // riviere
  {
    solidTop: 0,
    solidLeft: box * 9,
    solidWidth: box * 2,
    solidHeight: box * 10
  },
];

let dialogOpen: any = null

// export const interact = async () => {
//   let isAction = false;
//   pnjs.forEach((pnj) => {
//     const collide = isColliding(player.getTop(), player.getLeft(), player.getTriggerWidth(), player.getTriggerHeight(),
//                                 pnj.getTop() - (box), pnj.getLeft() - (box), pnj.getWidth() + (box * 2), pnj.getHeight() + (box * 2));
//     if (collide && !!pnj.getAction().dialog) {
//       pnj.interact(dialog);
//       dialogOpen = pnj
//       chrono.stop();
//       isAction = true
//     }
//   })

//   if (isAction) return;

//   let toRemove = -1;
//   for (let i = 0; i < entities.length; i++) {
//     const collide = entities[i].colide(player.getTop(), player.getLeft(), player.getTriggerWidth(), player.getTriggerHeight())
    
//     if (collide) {
//       const remove = await entities[i].interact();
//       if(remove) toRemove = i;
//     }
//   }

//   if (toRemove >= 0) {
//     entities = entities.filter((_, i) => i !== toRemove)
//   }
// }
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
  inventory = new Inventory();

  DialogElement.createHtmlElement();
  
  TimeManager.init(6,0);
  TimeElement.createHTMLElement();

  player = new PlayerEntity(box * 2, box * 4);
  nook = new NpcEntity('Nook', nookRoutine, box * 3, box * 2);
  solidEntities.push(nook);
  
  collisions.push(player);
  collisions.push(nook);

  entities.push(new Resource(ResourceType.PIERRE, (box * 7), (box * 4)));
  entities.push(new Resource(ResourceType.BRANCHE, (box * 2), (box * 7)));
  entities.push(new Fish(FishSpecies.BAR_COMMUN, 100, (box * 4), (box * 9), 0, -box));
  entities.push(new Fish(FishSpecies.SAUMON, 300, (box * 7), (box * 9), 0, -box));

  window.addEventListener('keypress', player.listenInput);
} 

window.addEventListener('load', onLoad);
