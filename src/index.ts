import * as _ from 'lodash';
import './@shared/styles/index.css';

import { MapSprite } from './map';
import { BugEntity, BugSpawnerEntity, FishEntity, FishSpawnerEntity, GatherableEntity, NpcEntity, PickableEntity } from './entities';
import { MapService, TimeService, PlayerService, NpcService, TalkingService, InventoryService, FishSpawnerService, FishingService, BugSpawnerService, CatchingService, PickableService, GatherableService } from './services';
import { Item, FishItem, BugItem } from './items';
import { CameraUI, TalkingUI, InventoryUI } from './ui';
import { InputSignalSender, PlayerMoveSignalSender, TimeSignalSender } from './signals';

import { testMap } from './@shared/assets/maps/test-map3';
import { monkyRoutine } from './@shared/assets/routines/monky/first-routine';

const onload = async () => {
  // Init map
  CameraUI.get().create();
  MapService.get().createMap(testMap);
  MapService.get().initPlayerMapCell(6, 8);

  // Register signals listeners
  InputSignalSender.get().register(PlayerService.get());
  InputSignalSender.get().register(NpcService.get());
  InputSignalSender.get().register(TalkingService.get());
  InputSignalSender.get().register(InventoryService.get());
  InputSignalSender.get().register(FishSpawnerService.get());
  InputSignalSender.get().register(FishingService.get());
  InputSignalSender.get().register(BugSpawnerService.get());
  InputSignalSender.get().register(CatchingService.get());
  InputSignalSender.get().register(PickableService.get());
  InputSignalSender.get().register(GatherableService.get());

  TimeSignalSender.get().register(NpcService.get());
  
  PlayerMoveSignalSender.get().register(MapService.get());

  // Init services
  TimeService.get().init(6,30);

  NpcService.get().register(
    new NpcEntity(new MapSprite('npc'), 'Monky', monkyRoutine)
  );
  NpcService.get().init();

  InventoryService.get().init(40, []);

  FishSpawnerService.get().register(
    new FishSpawnerEntity(new MapSprite('fish'), new FishItem('carpe'), new FishEntity(200, 5, 500, 200, 3000, 0.5), 2, 9)
  );

  BugSpawnerService.get().register(
    new BugSpawnerEntity(new MapSprite('bug'), new BugItem('papillon'), new BugEntity(200, 3000), 5, 3)
  );

  PickableService.get().register(
    new PickableEntity(new MapSprite('rock'), new Item("granite"), 7, 1)
  );

  GatherableService.get().register(
    new GatherableEntity(new MapSprite('tree'), [ new Item('branche'), new Item('feuille') ], 3, 5)
  );

  TimeService.get().start();

  // Init UI
  TalkingUI.get().create();

  window.addEventListener('keypress', InputSignalSender.get().raise);
} 

window.addEventListener('load', onload);