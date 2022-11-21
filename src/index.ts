import { GatherableService } from './services/GatherableService';
import * as _ from 'lodash';
import './@shared/styles/index.css';

import { MapSprite } from './map';
import { FishEntity, FishSpawnerEntity, GatherableEntity, NpcEntity, PickableEntity } from './entities';
import { MapService, TimeService, PlayerService, NpcService, TalkingService, FishSpawnerService, FishingService, PickableService } from './services';
import { Item, FishItem } from './items';
import { CameraUI, TalkingUI } from './ui';
import { InputSignalSender, PlayerMoveSignalSender, TimeSignalSender } from './signals';

import { testMap } from './@shared/assets/maps/test-map';
import { monkyRoutine } from './@shared/assets/routines/monky/first-routine';

const onload = async () => {
  // Init map
  CameraUI.get().create();
  MapService.get().createMap(testMap);
  MapService.get().initPlayerMapCell(1, 4);

  // Register signals listeners
  InputSignalSender.get().register(PlayerService.get());
  InputSignalSender.get().register(NpcService.get());
  InputSignalSender.get().register(TalkingService.get());
  InputSignalSender.get().register(FishSpawnerService.get());
  InputSignalSender.get().register(FishingService.get());
  InputSignalSender.get().register(PickableService.get());
  InputSignalSender.get().register(GatherableService.get());

  PlayerMoveSignalSender.get().register(MapService.get());

  TimeSignalSender.get().register(NpcService.get());

  // Init services
  TimeService.get().init(6,30);

  NpcService.get().register(
    new NpcEntity(new MapSprite('npc'), 'Monky', monkyRoutine)
  );
  NpcService.get().init();

  FishSpawnerService.get().register(
    new FishSpawnerEntity(new MapSprite('fish'), new FishItem('carpe'), new FishEntity(300, 3, 500, 200, 3000, 0.5), 2, 9)
  );

  PickableService.get().register(
    new PickableEntity(new MapSprite('rock'), new Item("granite"), 7, 1)
  );

  GatherableService.get().register(
    new GatherableEntity(new MapSprite('tree'), [ new Item('branche'), new Item('feuille') ], 3, 5)
  );

  TimeService.get().start();

  // Init UI
  TalkingUI.create();

  window.addEventListener('keypress', InputSignalSender.get().raise);
} 

window.addEventListener('load', onload);