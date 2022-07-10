import { player, triggers, map } from '../..';
import { PersonEntity, PersonState } from './PersonEntity';
import { InventoryUI } from './../../ui/InventoryUI';
import { Talking } from '../../actions/Talking';
import { box, sleep } from '../../utils';

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
  private keyPressed: boolean;
  private previousKeyPressed: string;

  public constructor(name: string, spriteTop: number, spriteLeft: number) {
    super(name, spriteTop, spriteLeft, false);
    this.keyPressed = false;
  }

  //#region Methods
  public async listenInput(event: any): Promise<void> {
    if (this.keyPressed && event.key === this.previousKeyPressed) return;
    this.keyPressed = true;

    switch(event.key) {
      case ActionKeys.ACT:
        if ([PersonState.IDLE, PersonState.ACTING, PersonState.TALKING].includes(player.getState())) { player.act(); }
        break;
      case ActionKeys.INVENTORY:
        if (player.getState() === PersonState.MENUING) { InventoryUI.hide(); }
        else if (player.getState() === PersonState.IDLE) { InventoryUI.show(); }
        break;
      case DirectionKeys.UP:
      case DirectionKeys.DOWN:
        if (player.getState() === PersonState.TALKING) { Talking.selectAnswer(event.key === DirectionKeys.DOWN); }
      case DirectionKeys.LEFT:
      case DirectionKeys.RIGHT:
        if (player.getState() === PersonState.IDLE) { player.move(event.key); }
        break;
      default: break;
    }
    
    await sleep(150);

    this.previousKeyPressed = event.key;
    this.keyPressed = false;
  }

  private move(key: DirectionKeys): void {
    this.setState(PersonState.MOVING);

    // store current collider hitbox position
    const currentColliderTop = super.getColliderTop();
    const currentColliderLeft = super.getColliderLeft();
    
    // move collider hitbox towards input direction
    switch (key) {
      case DirectionKeys.UP:
        super.setColliderTop(currentColliderTop - box);
        break;
      case DirectionKeys.DOWN:
        super.setColliderTop(currentColliderTop + box);
        break;
      case DirectionKeys.LEFT:
        super.setColliderLeft(currentColliderLeft - box);
        break;
      case DirectionKeys.RIGHT:
        super.setColliderLeft(currentColliderLeft + box);
        break;
    }

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
      }
    }
  }
  //#endregion

}
