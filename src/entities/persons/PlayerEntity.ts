import { player, triggers, map } from '../..';
import { Direction, PersonEntity, PersonState } from '.';
import { TalkingService, InventoryService } from '../../services';
import { box, sleep } from '../../utils';
import { ToolItem, FishingToolItem } from './../../items';
import { ActionUI } from './../../ui/ActionUI';
import { Action } from '../TriggerEntity';

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

export class PlayerEntity extends PersonEntity {
  private keyIsPressed: boolean;
  private previousKeyPressed: string;
  private toolEquiped: ToolItem | null;

  public constructor(name: string, spriteTop: number, spriteLeft: number) {
    super(name, spriteTop, spriteLeft, false);
    this.keyIsPressed = false;
    this.toolEquiped = new FishingToolItem('canne à peche en bois', 10, 100, 10);
  }

  //#region Methods
  public async listenInput(event: any): Promise<void> {
    // cannot input
    if (player.getState() === PersonState.LOCKED) { return; }

    // limit spam same input
    if (this.keyIsPressed && event.key === this.previousKeyPressed) return;
    this.keyIsPressed = true;

    switch(event.key) {
      case ActionKeys.ACT:
        if ([PersonState.IDLE, PersonState.ACTING, PersonState.TALKING].includes(player.getState())) { player.act(); }
        break;
      case ActionKeys.INVENTORY:
        if (player.getState() === PersonState.MENUING) { InventoryService.closeInventory(); }
        else if (player.getState() === PersonState.IDLE) { InventoryService.openInventory(); }
        break;
      case DirectionKeys.UP:
      case DirectionKeys.DOWN:
        if (player.getState() === PersonState.TALKING) { TalkingService.selectAnswer(event.key === DirectionKeys.DOWN); }
      case DirectionKeys.LEFT:
      case DirectionKeys.RIGHT:
        if (player.getState() === PersonState.IDLE) { player.move(event.key); }
        break;
      default: break;
    }

    // input buffer time
    await sleep(150);

    this.previousKeyPressed = event.key;
    this.keyIsPressed = false;
  }

  private move(key: DirectionKeys): void {
    this.setState(PersonState.MOVING);

    // store current collider hitbox position
    const currentColliderTop = super.getColliderTop();
    const currentColliderLeft = super.getColliderLeft();
    let direction = null
    
    // move collider hitbox towards input direction
    switch (key) {
      case DirectionKeys.UP:
        direction = Direction.UP;
        super.setColliderTop(currentColliderTop - box);
        break;
      case DirectionKeys.DOWN:
        direction = Direction.DOWN;
        super.setColliderTop(currentColliderTop + box);
        break;
      case DirectionKeys.LEFT:
        direction = Direction.LEFT;
        super.setColliderLeft(currentColliderLeft - box);
        break;
      case DirectionKeys.RIGHT:
        direction = Direction.RIGHT;
        super.setColliderLeft(currentColliderLeft + box);
        break;
    }

    this.setDirection(direction);

    // collider hitbox is not colliding
    if (!super.isColliding()) {
      const stepTop = this.getColliderTop() - currentColliderTop;
      const stepLeft = this.getColliderLeft() - currentColliderLeft;

      // move sprite
      this.setSpriteTop(this.getSpriteTop() + stepTop);
      this.setSpriteLeft(this.getSpriteLeft() + stepLeft);

      // move trigger hitbox
      this.setTriggerTop(this.getTriggerTop() + stepTop);
      this.setTriggerLeft(this.getTriggerLeft() + stepLeft);
      
      // move map opposite way of player

      map.style.transform = `translate3d(${ -this.getSpriteLeft() + box * 4 }px, ${ -this.getSpriteTop() + box * 2 }px, 0)`

      let haveBeenTriggered = false
      for (const trigger of triggers) {
        const triggered: boolean = this.isTriggeredBy(trigger);
        if(triggered && !haveBeenTriggered) {
          ActionUI.updateAction(trigger.getAction());
          haveBeenTriggered = true;
        } 
      }
      if(!haveBeenTriggered) {
        ActionUI.updateAction(Action.NONE);
      }
    }
    // collider hitbox collide
    else { 
      // abort movement
      this.setColliderTop(currentColliderTop);
      this.setColliderLeft(currentColliderLeft);
    }
    
    super.update();
    
    this.setState(PersonState.IDLE);
  }

  public act(): void {
    for (const trigger of triggers) {
      const triggered: boolean = this.isTriggeredBy(trigger);

      if (triggered) {
        trigger.act();
        return;
      }
    }
  }
  //#endregion

  public getToolEquiped(): ToolItem {
    return this.toolEquiped;
  }

}
