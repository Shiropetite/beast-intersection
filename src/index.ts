import * as _ from 'lodash';
import './@shared/styles/index.css';

import { sleep } from './utils';
import { SpriteComponent, TriggerComponent, ColliderComponent } from './components';
import { PlayerEntity, NpcEntity } from './entities';
import { Item, FishItem, BugItem } from './items';
import { PlayerService, NpcService, TimeService, TalkingService, InventoryService, FishingService, CatchingService } from './services';
import { InputSignalSender } from './signals';
import { TalkingUI } from './ui';
import { Map } from './Map'
import { testMap } from './@shared/assets/maps/test-map';
import { testMap2 } from './@shared/assets/maps/test-map2';

export let camera: HTMLElement = null;

export const monkyRoutine = require('./@shared/routines/monky/first-routine.json');

const onload = async () => {
  // create camera HTML
  const cameraHTML = document.createElement('div');
  cameraHTML.id = 'camera';
  cameraHTML.classList.add('camera');
  
  document.body.appendChild(cameraHTML);

  // store camera HTML
  camera = document.getElementById('camera');

  // Map
  // main island top wall
  // const wall1 = new ColliderComponent(box * 14 - 6, box, 0, box);
  // // main island bottom wall
  // const wall2 = new ColliderComponent(box * 14 - 6, box, box * 9, box);
  // // main island left wall
  // const wall3 = new ColliderComponent(box, box * 10, 0, 0);
  // // main island right wall
  // const wall4 = new ColliderComponent(box, box * 10, 0, box * 15);
  // // river
  // const river = new ColliderComponent(box * 2, box * 10, 0, box * 9);

  // // Player
  // const player = new PlayerEntity(
  //   new SpriteComponent('player', 'player', (box * 2), (box * 4), box, box),
  //   new ColliderComponent((box * 2), (box * 4), box, box),
  // );

  // // Monky
  // const monky = new NpcEntity(
  //   new SpriteComponent('npc', 'npc', (box * 3), (box * 2), box, box),
  //   new TriggerComponent((box * 2), (box * 1), box * 3, box * 3),
  //   new ColliderComponent((box * 3), (box * 2), box, box),
  //   'monky',
  //   monkyRoutine
  // );

  // triggers.push(new TriggerResourceEntity('stone', (box * 7), (box * 4), new Item("pierre")));
  // triggers.push(new FishResourceEntity('fish', (box * 4), (box * 9), new FishItem("carpe", 300, 3, 500, 2000, 3000, 0.5, 1)));
  // triggers.push(new FishResourceEntity('fish', (box * 0), (box * 4), new FishItem("bar commun", 200, 1, 500, 2000, 3000, 0.5, 1)));
  // triggers.push(new BugResourceEntity('bug', (box * 5), (box * 3), new BugItem("cocinelle", 200, 3000)));
  
  // let tree = new ColliderResourceEntity('tree', (box * 2), (box * 7), [{ item: new Item("love u"), rate: 0.01 }, { item: new Item("feuille"), rate: 0.2 }, { item: new Item("branche"), rate: 1 }])
  // triggers.push(tree);
  // colliders.push(tree);

  // Services
  TimeService.getInstance().init(6,0);
  InventoryService.getInstance().init(40, []);

  // UI
  TalkingUI.create();
  // ActionUI.create();

  // Add signal listeners
  InputSignalSender.getInstance().registerListener(PlayerService.getInstance());
  InputSignalSender.getInstance().registerListener(TalkingService.getInstance());
  InputSignalSender.getInstance().registerListener(InventoryService.getInstance());
  InputSignalSender.getInstance().registerListener(FishingService.getInstance());
  InputSignalSender.getInstance().registerListener(CatchingService.getInstance());

  // Test
  Map.getInstance();

  // keypress event
  window.addEventListener('keypress', InputSignalSender.getInstance().raise);
} 

window.addEventListener('load', onload);