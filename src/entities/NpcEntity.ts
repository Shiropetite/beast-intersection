import { box, player } from '..';
import { Talking, Dialog } from '../actions/Talking';
import { PersonState } from './PlayerEntity';
import { SolidEntity } from './SolidEntity';
import { TimeManager } from './../management/TimeManager';

interface Routine {
  [time: string]: {
    text?: string,
    position?: {
      top: number,
      left: number
    },
    dialog?: Dialog[]
  }
}

export class NpcEntity extends SolidEntity {
  private currentState: PersonState = PersonState.IDLE;
  private routine: Routine;
  private name: string;

  //#region Constructor
  public constructor(name: string, routine: Routine, top: number, left: number) {
    super('npc', 'npc', box - 6, box - 6, top, left, (box - 6) * 3, (box - 6) * 3, top - box - 6, left - box - 6);
    this.name = name;
    this.routine = routine;

    this.updateHtmlElement();
  }
  //#endregion

  //#region Method
  public onSignalRaisedTime(): void {
    const time = TimeManager.getCurrentTime();

    if (Object.keys(this.routine).includes(time)) {
      console.log(this.name + ": " + this.routine[time].text)

      if (this.routine[time].position) {
        this.move(this.routine[time].position.top, this.routine[time].position.left)
      }
    }
  }

  private move(targetTop: number, targetLeft: number): void {
    // time interval between each step
    const moveInterval = setInterval(() => {
      // cannot move unless idle
      if (this.getState() !== PersonState.IDLE) return;

      // store current solid position
      const top = super.getSolidTop();
      const left = super.getSolidLeft();

      // npc is at destination
      if (this.getSolidTop() === targetTop * box && this.getSolidLeft() === targetLeft * box) {
        clearInterval(moveInterval)
      }

      // npc is below destination
      if (this.getSolidTop() < (targetTop * box)) {
        super.setSolidTop(super.getSolidTop() + box);
        super.updateHtmlElement();
      }
      else 
      // npc is above destination
      if (this.getSolidTop() > (targetTop * box)) {
        super.setSolidTop(super.getSolidTop() - box);
        super.updateHtmlElement();
      } 
      else 
      // npc is right of destination
      if (this.getSolidLeft() < (targetLeft * box)) {
        super.setSolidLeft(super.getSolidLeft() + box);
        super.updateHtmlElement();
      }
      else 
      // npc is left of destination
      if (this.getSolidLeft() > (targetLeft * box)) {
        super.setSolidLeft(super.getSolidLeft() - box);
        super.updateHtmlElement();
      }

      if (this.nextMoveCollide()) {
        // abort movement
        this.setSolidTop(top);
        this.setSolidLeft(left);
      }
      else {
        const stepTop = this.getSolidTop() - top;
        const stepLeft = this.getSolidLeft() - left;

        // move sprite
        this.setTop(this.getTop() + stepTop);
        this.setLeft(this.getLeft() + stepLeft);
        // move trigger hitbox
        this.setTriggerTop(this.getTriggerTop() + stepTop);
        this.setTriggerLeft(this.getTriggerLeft() + stepLeft);

        super.updateHtmlElement();
      }
    }, 500) // repeat
  }

  // when player talk to npc
  public act(): void {
    let time = TimeManager.getCurrentTime();
    
    // routine does not contain a dialog for current time of day
    while (this.routine[time]?.dialog === undefined) {
      time = TimeManager.getPreviousTime(time);
    }
    
    // dialog has not started
    if (this.currentState !== PersonState.ACTING) {
      this.setState(PersonState.ACTING);
      player.setState(PersonState.ACTING);

      Talking.startDialog(this.routine[time].dialog, this.name);
    }
    // dialog has started
    else {
      const dialogNext: boolean = Talking.displaySentence();

      if (!dialogNext) {
        this.setState(PersonState.IDLE);
        player.setState(PersonState.IDLE);
      }
    }
    
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
