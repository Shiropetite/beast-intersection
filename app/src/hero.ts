import { Direction } from '.';
import { Character } from './character';

export class Hero extends Character {

  constructor() {
    super('hero');
  }

  move(key: Direction) {
    const step = 40;
    const top = super.getTop();
    const left = super.getLeft();
    
    switch(key) {
      case Direction.UP:
        super.setTop(top - step);
        break;
      case Direction.LEFT:
        super.setLeft(left - step);
        break;
      case Direction.RIGHT:
        super.setLeft(left + step);
        break;
      case Direction.DOWN:
        super.setTop(top + step);
        break;
    }

    super.update();
  }
}

