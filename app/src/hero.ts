import { Direction, colisions } from '.';
import { Character } from './character';

export class Hero extends Character {

  constructor() {
    super('hero');
  }

  colide(top: number, left: number) {
    let isColision = false;
    colisions.forEach((colision) => {
      console.log("top", top, colision.top);
      console.log("left", left, colision.left);

      isColision = (left + 42) > colision.left && left < (colision.left + 42)
                      && (top + 42) > colision.top && top < (colision.top + 42);

      if(colision) return;
    })
    return isColision;
  }

  move(key: Direction) {
    const step = 40;
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

