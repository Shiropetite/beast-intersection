import { player } from '../..';
import { Direction, PersonEntity, PersonState } from './PersonEntity';
import { DialogElement, Talking } from './../../actions/Talking';
import { TimeService } from './../../services/TimeService';
import { box, lookAt } from '../../utils';

interface Routine {
  [time: string]: {
    text?: string,
    position?: {
      top: number,
      left: number
    },
    dialog?: DialogElement[]
  }
}

export class NpcEntity extends PersonEntity {
  private readonly routine: Routine;

  public constructor(name: string, spriteTop: number, spriteLeft: number, routine: Routine) {
    super(name, spriteTop, spriteLeft, true);
    this.routine = routine;
  }

  //#region Methods
  public onTimeTick(): void {
    const time = TimeService.getCurrentTime();

    if (Object.keys(this.routine).includes(time)) {
      console.log(this.getName() + ": " + this.routine[time].text)

      if (this.routine[time].position) {
        this.move(this.routine[time].position.top, this.routine[time].position.left)
      }
    }
  }

  private move(targetTop: number, targetLeft: number): void {
    // time interval between each step
    const moveInterval = setInterval(() => {
      // cannot move unless idle
      if (this.getState() !== PersonState.IDLE) { return; }

      // store current collider hitbox position
      const currentColliderTop = super.getColliderTop();
      const currentColliderLeft = super.getColliderLeft();

      // npc is at target position
      if (this.getColliderTop() === targetTop * box && this.getColliderLeft() === targetLeft * box) {
        clearInterval(moveInterval)
      }

      // npc is above target position
      if (this.getColliderTop() < (targetTop * box)) {
        super.setDirection(Direction.DOWN);
        super.setColliderTop(super.getColliderTop() + box);
        super.update();
      }
      else 
      // npc is below target position
      if (this.getColliderTop() > (targetTop * box)) {
        super.setDirection(Direction.UP);
        super.setColliderTop(super.getColliderTop() - box);
        super.update();
      } 
      else 
      // npc is left of target position
      if (this.getColliderLeft() < (targetLeft * box)) {
        super.setDirection(Direction.RIGHT);
        super.setColliderLeft(super.getColliderLeft() + box);
        super.update();
      }
      else 
      // npc is right of target position
      if (this.getColliderLeft() > (targetLeft * box)) {
        super.setDirection(Direction.LEFT);
        super.setColliderLeft(super.getColliderLeft() - box);
        super.update();
      }

      // collider hitbox is not colliding
      if (!this.isColliding()) {
        const stepTop = this.getColliderTop() - currentColliderTop;
        const stepLeft = this.getColliderLeft() - currentColliderLeft;

        // move sprite
        this.setSpriteTop(this.getSpriteTop() + stepTop);
        this.setSpriteLeft(this.getSpriteLeft() + stepLeft);

        // move trigger hitbox
        this.setTriggerTop(this.getTriggerTop() + stepTop);
        this.setTriggerLeft(this.getTriggerLeft() + stepLeft);

        super.update();
      }
      // collider hitbox collide
      else {
        // abort movement
        this.setColliderTop(currentColliderTop);
        this.setColliderLeft(currentColliderLeft);
      }
    }, 500) // move every 0.5s
  }

  // when player talk to npc
  public act(): void {
    let time = TimeService.getCurrentTime();
    
    // routine does not contain a dialog for current time of day
    while (this.routine[time]?.dialog === undefined) {
      time = TimeService.getPreviousTime(time);
    }
    
    // talk has not started
    if (this.getState() !== PersonState.TALKING) {
      this.setState(PersonState.TALKING);
      player.setState(PersonState.TALKING);

      lookAt(this, player);

      Talking.start(this.routine[time].dialog, this.getName());
    }
    // talk has started
    else {
      const dialogNext: boolean = Talking.talk();

      if (!dialogNext) {
        this.setState(PersonState.IDLE);
        player.setState(PersonState.IDLE);
      }
    }
  }
  //#endregion

}
