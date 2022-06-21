import { box} from '..';
import { SolidEntity } from './SolidEntity';
import { ResourceObject } from '../objects/ResourceObject';
import { Tool } from '../objects/Tool';

export type Key = ActionKeys | DirectionKeys;

export enum ActionKeys {
  PAUSE='p',
  ACT='e',
  INVENTORY='i',
}

export enum DirectionKeys {
  UP='z',
  LEFT='q',
  RIGHT='d',
  DOWN='s'
}

export enum PlayerState {
  IDLE,
  MOVING,
  ACTING
}

export class PlayerEntity extends SolidEntity {
  private currentState: PlayerState;
  private inventory: ResourceObject[];
  private tools: Tool[];
  private toolInHand?: Tool | ResourceObject;

  //#region Constructor
  constructor(top: number, left: number) {
    super('player', 'player', box - 6, box - 6, top, left);
    this.currentState = PlayerState.IDLE;
    this.inventory = [];
    this.tools = [];

    super.updateHtmlElement();
  }
  //#endregion

  //#region Method
  
  // when player press 'E' 
  act(): void {
    
  }
  
  talk(): void { 
    
  }

  fish(): void {

  }

  // when player press 'Z,Q,S,D'
  move(key: DirectionKeys): void {
    this.currentState = PlayerState.MOVING;

    // store current solid position
    const top = super.getSolidTop();
    const left = super.getSolidLeft();
    
    // move solid hitbox towards input direction
    switch(key) {
      case DirectionKeys.UP:
        super.setSolidTop(top - box);
        break;
      case DirectionKeys.LEFT:
        super.setSolidLeft(left - box);
        break;
      case DirectionKeys.RIGHT:
        super.setSolidLeft(left + box);
        break;
      case DirectionKeys.DOWN:
        super.setSolidTop(top + box);
        break;
    }

    // Check if solid hitbox is not colliding
    if (!super.nextMoveCollide()) {
      const stepTop = this.getSolidTop() - top;
      const stepLeft = this.getSolidLeft() - left;

      // move sprite
      this.setTop(this.getTop() + stepTop);
      this.setLeft(this.getLeft() + stepLeft);
      // move trigger hitbox
      this.setTriggerTop(this.getTriggerTop() + stepTop);
      this.setTriggerLeft(this.getTriggerLeft() + stepLeft);
      
      // move map opposite way of player
      const map = document.getElementById('map');
      map.style.transform = `translate3d(${-this.getLeft() + box * 4}px, ${-this.getTop() + box * 2 }px, 0)`
    }
    else { // if solid hitbox collide
      // abort movement
      this.setSolidTop(top);
      this.setSolidLeft(left);
    }
    
    super.updateHtmlElement();
    this.currentState = PlayerState.IDLE;
  }
  //#endregion

  //#region Getters & Setters
  getState(): PlayerState {
    return this.currentState;
  }

  setState(state: PlayerState): void {
    this.currentState = state;
  }
  //#endregion
}
