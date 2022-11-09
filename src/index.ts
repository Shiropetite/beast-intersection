import * as _ from 'lodash';
import './@shared/styles/index.css';

import { box } from './utils';
import { 
  TriggerEntity, 
  ColliderEntity,
  NpcEntity,
  PlayerEntity,
  TriggerResourceEntity,
  ColliderResourceEntity,
  Action
} from './entities';
import { TimeService, InventoryService, CatchingService, FishingService, TalkingService } from './services';
import { ActionUI, TalkingUI } from './ui';
import { Item, FishItem, BugItem } from './items';
import { FishResourceEntity } from './entities/resources/FishResourceEntity';
import { BugResourceEntity } from './entities/resources/BugResourceEntity';
import { InputSignalSender } from './signals/InputSignal';
import { PlayerService } from './services/PlayerService';

export let camera: HTMLElement = null;
export let map: HTMLElement = null;

export let player: PlayerEntity = null;

export let nook: NpcEntity = null;
export const nookRoutine = require('./@shared/routines/nook/first-routine.json');

export let triggers: TriggerEntity[] = [];

export let colliders: ColliderEntity[] = [];

export const removeFromTrigger = (trigger: TriggerEntity) => {
  triggers = triggers.filter(e => e.getSprite() !== trigger.getSprite()) 
}

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
    new ColliderEntity('wall-1', 'wall', Action.NONE, box * 14 - 6, box, 0, box),
    // main island bottom wall
    new ColliderEntity('wall-2', 'wall', Action.NONE, box * 14 - 6, box, box * 9, box),
    // main island left wall
    new ColliderEntity('wall-3', 'wall', Action.NONE, box, box * 10, 0, 0),
    // main island right wall
    new ColliderEntity('wall-4', 'wall', Action.NONE, box, box * 10, 0, box * 15),
    // river
    new ColliderEntity('wall-5', 'wall', Action.NONE, box * 2, box * 10, 0, box * 9)
  ];

  player = new PlayerEntity('pipette', box * 2, box * 4);
  colliders.push(player);

  // services
  TimeService.getInstance().init(6,0);
  InventoryService.getInstance().init(40, []);

  // UI
  TalkingUI.create();
  ActionUI.create();

  // nook npc
  nook = new NpcEntity('Monky', box * 3, box * 2, nookRoutine);
  triggers.push(nook);
  colliders.push(nook);

  triggers.push(new TriggerResourceEntity('stone', (box * 7), (box * 4), new Item("pierre")));
  triggers.push(new FishResourceEntity('fish', (box * 4), (box * 9), new FishItem("carpe", 300, 3, 500, 2000, 3000, 0.5, 1)));
  triggers.push(new FishResourceEntity('fish', (box * 0), (box * 4), new FishItem("bar commun", 200, 1, 500, 2000, 3000, 0.5, 1)));
  triggers.push(new BugResourceEntity('bug', (box * 5), (box * 3), new BugItem("cocinelle", 200, 3000)));
  
  let tree = new ColliderResourceEntity('tree', (box * 2), (box * 7), [{ item: new Item("love u"), rate: 0.01 }, { item: new Item("feuille"), rate: 0.2 }, { item: new Item("branche"), rate: 1 }])
  triggers.push(tree);
  colliders.push(tree);

  // Start service
  PlayerService.getInstance().setPlayer(player);

  // Add signal listeners
  InputSignalSender.getInstance().registerListener(CatchingService.getInstance());
  InputSignalSender.getInstance().registerListener(FishingService.getInstance());
  InputSignalSender.getInstance().registerListener(InventoryService.getInstance());
  InputSignalSender.getInstance().registerListener(TalkingService.getInstance());
  InputSignalSender.getInstance().registerListener(PlayerService.getInstance());

  window.addEventListener('keypress', InputSignalSender.getInstance().raise);
} 

window.addEventListener('load', onload);
