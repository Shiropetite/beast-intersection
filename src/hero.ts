import { Direction} from '.';
import { Character } from './character';

export class Hero extends Character {
  private canMove: boolean = true

  constructor() {
    super('hero');
  }

  setCanMove(canMove: boolean): void {
    this.canMove = canMove;
  }

  getCanMove(): boolean {
    return this.canMove;
  }

  move(key: Direction) {
    const step = 64 * 2;
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

      const map = document.getElementById('map');
      map.style.transform = `translate3d( ${-left + (64 * 8)}px, ${-top + (64 * 4)}px, 0 )`;
    };
    
    super.update();  

  }
}

