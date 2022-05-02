import * as _ from 'lodash';
import './style.css';

// Game
import { Hero } from './hero';
import { PNJ } from './pnj';
import { Chrono } from './chrono';
import { Dialog } from './dialog';

// routine
const nookRoutine = require('./characters/nook/first-routine.json');

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
  // direction
  UP='z',
  LEFT='q',
  RIGHT='d',
  DOWN='s'
}

let chrono: Chrono = null;
let dialog: Dialog = null;

let hero: Hero = null;
let nook: PNJ = null;
const pnjs: PNJ[] = [];

export const routine = (time: string) => {
  pnjs.forEach((pnj) => {
    pnj.doRoutine(time);
  })
}

const onLoad = () => {
  chrono = new Chrono();
  dialog = new Dialog();

  hero = new Hero();
  nook = new PNJ('Tom Nook', 126, 336, nookRoutine);
  pnjs.push(nook);
} 

const keyListener = (event: any) => {
  if(event.key === Key.PAUSE) {
    if(chrono.isRunning()) {
      chrono.stop();
    }
    else {
      chrono.start();
    }
  }
  if(event.key === Key.INTERACT) {
    dialog.interact(nook)
  }
  if(chrono.isRunning() && !dialog.isVisible() && Object.values(Direction).includes(event.key)) {
    hero.move(event.key);
  }
  if(chrono.isRunning() && dialog.haveChoice() && ['z', 's'].includes(event.key)) {
    dialog.updateChoice(event.key);
  }
}

window.addEventListener('load', onLoad);
window.addEventListener('keypress', keyListener);