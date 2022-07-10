import { box, triggerEntities, player } from '..';
import { SolidEntity } from './SolidEntity';
import { Tool } from '../items/Tool';
import { Talking } from '../actions/Talking';
import { InventoryElement } from './../ui/InventoryElement';
import { Item } from './../items/Item';

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

export enum PersonState {
  IDLE,
  MOVING,
  ACTING,
  MENUING
}

export class PlayerEntity extends SolidEntity {
  private currentState: PersonState;
  private tools: Tool[];
  private toolInHand?: Tool | Item;

  //#region Constructor
  public constructor(top: number, left: number) {
    super('player', 'player', box - 6, box - 6, top, left);
    this.currentState = PersonState.IDLE;
    this.tools = [];

    super.updateHtmlElement();
  }
  //#endregion

  //#region Method
  public listenInput(event: any): void {
    switch(event.key) {
      case ActionKeys.ACT:
        player.act();
        break;
      case ActionKeys.INVENTORY:
        if (InventoryElement.isVisible()) InventoryElement.hide();
        else if (player.currentState === PersonState.IDLE) InventoryElement.show();
        break;
      case DirectionKeys.UP:
      case DirectionKeys.DOWN:
        if (player.currentState === PersonState.ACTING) Talking.selectChoice(event.key === DirectionKeys.UP);
      case DirectionKeys.LEFT:
      case DirectionKeys.RIGHT:
        if (![PersonState.ACTING, PersonState.MENUING].includes(player.currentState)) player.move(event.key);
        break;
      default: break;
    }
  }

  public act(): void {
    for (const entity of triggerEntities) {
      const isTriggering: boolean = this.isTrigger(entity);

      if (isTriggering) {
        entity.act();
      }
    }
  }

  // when player press 'Z,Q,S,D'
  private move(key: DirectionKeys): void {
    this.currentState = PersonState.MOVING;

    // store current solid position
    const top = super.getSolidTop();
    const left = super.getSolidLeft();
    
    // move solid hitbox towards input direction
    switch (key) {
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
    this.currentState = PersonState.IDLE;
  }
  //#endregion

  //#region Getters & Setters
  public getState(): PersonState {
    return this.currentState;
  }

  public setState(state: PersonState): void {
    this.currentState = state;
  }
  //#endregion
}
