import * as _ from 'lodash';
import './@shared/styles/index.css';

import { testMap } from './@shared/assets/maps/test-map';
import { PlayerService, MapService } from './services';
import { InputSignalSender } from './signals';
import { CameraUI } from './ui';
import { PlayerMoveSignalSender } from './signals/PlayerMoveSignal';

const onload = async () => {
  CameraUI.getInstance().create();
  MapService.getInstance().buildMap(testMap);
  MapService.getInstance().initPlayerMapCell(2, 4);

  // Add keypress listerner for each service
  InputSignalSender.getInstance().registerListener(PlayerService.getInstance());

  // Add move player listener
  PlayerMoveSignalSender.getInstance().registerListener(MapService.getInstance());

  window.addEventListener('keypress', InputSignalSender.getInstance().raise);
} 

window.addEventListener('load', onload);