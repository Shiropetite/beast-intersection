import * as _ from 'lodash';
import './style.css';

import { box } from './utils';
import { TriggerEntity } from './entities/TriggerEntity';
import { ColliderEntity } from './entities/ColliderEntity';
import { NpcEntity } from './entities/persons/NpcEntity';
import { PlayerEntity } from './entities/persons/PlayerEntity';
import { ResourceEntityBehaviour, TriggerResourceEntity } from './entities/resources/TriggerResourceEntity';
import { ColliderResourceEntity } from './entities/resources/ColliderResourceEntity';
import { TimeService } from './services/TimeService';
import { TimeUI } from './ui/TimeUI';
import { TalkingUI } from './ui/TalkingUI';
import { InventoryUI } from './ui/InventoryUI';
import { Item } from './items/Item';
import { FishItem } from './items/FishItem';
import { InventoryService } from './services/InventoryService';

export let camera: HTMLElement = null;
export let map: HTMLElement = null;

export let player: PlayerEntity = null;

export let nook: NpcEntity = null;
export const nookRoutine = require('./@shared/routines/nook/first-routine.json');

export const triggers: TriggerEntity[] = [];

export let colliders: ColliderEntity[] = [];

const init = () => {
  // create camera HTML
  const cameraHTML = document.createElement('div');
  cameraHTML.id = 'camera';
  cameraHTML.classList.add('camera');
  
  document.body.appendChild(cameraHTML);

  // store camera HTML
  camera = document.getElementById('camera');

  // create map HTML
  const mapHTML = document.createElement('div');
  mapHTML.id = 'map';
  mapHTML.classList.add('map');
  
  camera.appendChild(mapHTML);

  // store map HTML
  map = document.getElementById('map');
}

const onload = () => {
  init();

  colliders = [
    // main island top wall
    new ColliderEntity('wall-1', 'wall', box * 14 - 6, box, 0, box),
    // main island bottom wall
    new ColliderEntity('wall-2', 'wall', box * 14 - 6, box, box * 9, box),
    // main island left wall
    new ColliderEntity('wall-3', 'wall', box - 6, box * 10, 0, 0),
    // main island right wall
    new ColliderEntity('wall-4', 'wall', box, box * 10, 0, box * 15),
    // river
    new ColliderEntity('wall-5', 'wall', box * 2, box * 10, 0, box * 9)
  ];

  player = new PlayerEntity('pipette', box * 2, box * 4);
  colliders.push(player);

  // services
  TimeService.init(7,0);
  InventoryService.init(40, []);

  // UI
  TimeUI.create();
  TalkingUI.create();
  InventoryUI.create();

  nook = new NpcEntity('Nook', box * 3, box * 2, nookRoutine);
  triggers.push(nook);
  colliders.push(nook);

  triggers.push(new TriggerResourceEntity('stone', (box * 7), (box * 4), new Item("pierre")));
  triggers.push(new TriggerResourceEntity('fish', (box * 4), (box * 9), new FishItem("bar commun", 100, 100, 1, 500, 2, 1), ResourceEntityBehaviour.FISHING));
  
  let tree = new ColliderResourceEntity('tree', (box * 2), (box * 7), [{ item: new Item("feuille"), rate: 0.2 }, { item: new Item("branche"), rate: 1 }])
  triggers.push(tree);
  colliders.push(tree);

  window.addEventListener('keypress', player.listenInput);
} 

window.addEventListener('load', onload);
