import { box, player } from '..';
import { Talking, Dialog } from '../actions/Talking';
import { PersonState } from './PlayerEntity';
import { SolidEntity } from './SolidEntity';

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
  constructor(name: string, routine: Routine, top: number, left: number) {
    super('npc', 'npc', box - 6, box - 6, top, left, (box - 6) * 3, (box - 6) * 3, top - box - 6, left - box - 6);
    this.name = name;
    this.routine = routine;

    this.updateHtmlElement();
  }
  //#endregion

  //#region Method
  move(targetTop: number, targetLeft: number): void {
    
  }

  // when player talk to npc
  act(): void {
    // routine contains a dialog for current time of day
    if (!!this.routine['06:00']?.dialog) {
      
      // dialog has not started
      if (this.currentState !== PersonState.ACTING) {
        this.setState(PersonState.ACTING);
        player.setState(PersonState.ACTING);

        Talking.startDialog(this.routine['06:00'].dialog, this.name);
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
  }
  //#endregion

  //#region Getters & Setters
  getState(): PersonState {
    return this.currentState;
  }

  setState(state: PersonState): void {
    this.currentState = state;
  }
  //#endregion
}
