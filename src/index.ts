import * as _ from 'lodash';
import './style.css';

// Game
import { PlayerEntity } from './entities/PlayerEntity';
import { Fish, FishSpecies } from './fishing';
import { Entity } from './entity';
import { NpcEntity } from './entities/NpcEntity';
import { DialogElement } from './ui/DialogElement';
import { TimeController } from './controllers/TimeController';
import { TimeElement } from './ui/TimeElement';
import { TriggerEntity } from './entities/TriggerEntity';
import { ResourceEntityBehaviour, TriggerResourceEntity } from './entities/TriggerResourceEntity';
import { SolidResourceEntity } from './entities/SolidResourceEntity';
import { InventoryElement } from './ui/InventoryElement';
import { Item } from './items/Item';
import { FishItem } from './items/FishItem';

// routine
const nookRoutine = require('./@routines/nook/first-routine.json');

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

export let player: PlayerEntity = null;
let nook: NpcEntity = null;
export const triggerEntities: TriggerEntity[] = [];
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

  DialogElement.createHtmlElement();
 
  
  TimeController.init(7,0);
  TimeElement.createHTMLElement();

  player = new PlayerEntity(box * 2, box * 4);

  InventoryElement.createHTMLElement();

  nook = new NpcEntity('Nook', nookRoutine, box * 3, box * 2);
  let arbre = new SolidResourceEntity('arbre', (box * 2), (box * 7), [{ item: new Item("feuille"), rate: 0.2 }, { item: new Item("branche"), rate: 1 }])
  triggerEntities.push(nook);
  triggerEntities.push(new TriggerResourceEntity('pierre', (box * 7), (box * 4), new Item("pierre")))
  triggerEntities.push(new TriggerResourceEntity('fish', (box * 4), (box * 9), new FishItem("bar commun", 100, 100, 1, 500, 2, 1), ResourceEntityBehaviour.FISHING))
  triggerEntities.push(arbre)
  
  collisions.push(player);
  collisions.push(nook);
  collisions.push(arbre);

  // entities.push(new Fish(FishSpecies.BAR_COMMUN, 100, (box * 4), (box * 9), 0, -box));
  // entities.push(new Fish(FishSpecies.SAUMON, 300, (box * 7), (box * 9), 0, -box));

  window.addEventListener('keypress', player.listenInput);
} 

window.addEventListener('load', onLoad);
