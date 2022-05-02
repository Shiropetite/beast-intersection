import { Direction} from '.';
import { Character } from './character';

export class Hero extends Character {

  constructor() {
    super('hero');
  }

  move(key: Direction) {
    const step = 42;
    let top = super.getTop();
    let left = super.getLeft();
    
    switch(key) {
      case Direction.UP:
        top -= step;
        break;
      case Direction.LEFT:
        left -= step;
        break;
      case Direction.RIGHT:
        left += step;
        break;
      case Direction.DOWN:
        top += step;
        break;
    }

    if(!this.colide(top, left)) {
      this.setTop(top);
      this.setLeft(left);
    };
    
    super.update();
  }
}

