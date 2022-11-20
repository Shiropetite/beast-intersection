import * as _ from 'lodash';
import './@shared/styles/index.css';

import { PlayerService, NpcService, MapService, TalkingService, FishingService } from './services';
import { InputSignalSender, PlayerMoveSignalSender, TimeSignalSender } from './signals';
import { CameraUI } from './ui';
import { TimeService } from './services';
import { FishEntity, FishSpawnerEntity, NpcEntity, PickableEntity } from './entities';
import { MapSprite } from './map';

import { testMap } from './@shared/assets/maps/test-map';
import { monkyRoutine } from './@shared/routines/monky/first-routine';
import { TalkingUI } from './ui/TalkingUI';
import { FishSpawnerService } from './services/FishSpawnerService';
import { FishItem, RockItem } from './items';
import { PickableService } from './services/PickableService';

const onload = async () => {
  CameraUI.getInstance().create();
  MapService.getInstance().buildMap(testMap);
  MapService.getInstance().initPlayerMapCell(1, 4);

  // Add keypress listerner for each service
  InputSignalSender.getInstance().registerListener(PlayerService.getInstance());
  InputSignalSender.getInstance().registerListener(NpcService.getInstance());
  InputSignalSender.getInstance().registerListener(TalkingService.getInstance());
  InputSignalSender.getInstance().registerListener(FishSpawnerService.getInstance());
  InputSignalSender.getInstance().registerListener(FishingService.getInstance());
  InputSignalSender.getInstance().registerListener(PickableService.getInstance());

  // Add move player listener
  PlayerMoveSignalSender.getInstance().registerListener(MapService.getInstance());

  // Add time listerner
  TimeSignalSender.getInstance().registerListener(NpcService.getInstance());

  // Services init
  TimeService.getInstance().init(6,30);
  NpcService.getInstance().addNpc(
    new NpcEntity(new MapSprite('npc'), 'Monky', monkyRoutine)
  );
  FishSpawnerService.getInstance().addSpawner(
    new FishSpawnerEntity(new MapSprite('fish'), new FishItem('carpe'), new FishEntity(300, 3, 500, 200, 3000, 0.5), 2, 9)
  )
  PickableService.getInstance().addPickable(
    new PickableEntity(new MapSprite('rock'), new RockItem("granite"), 7, 1)
  );
  NpcService.getInstance().initCells();

  TimeService.getInstance().start();

  // Create UI
  TalkingUI.create();

  window.addEventListener('keypress', InputSignalSender.getInstance().raise);
} 

window.addEventListener('load', onload);