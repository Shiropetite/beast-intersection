import { box, player } from '..';
import { Talking, Dialog } from '../actions/Talking';
import { PlayerState } from './PlayerEntity';
import { SolidEntity } from './SolidEntity';

enum NpcState {
  IDLE,
  MOVING,
  ACTING
}

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
  private currentState: NpcState = NpcState.IDLE;
  private routine: Routine;
  private name: string;

  constructor(name: string, routine: Routine, top: number, left: number) {
    super('npc', 'npc', box - 6, box - 6, top, left);
    this.name = name;
    this.routine = routine;
  }

  move(): void {

  }

  // Each time player talk
  talk(time: string): void {
    // routine contains a dialog for current time of day
    if (!!this.routine[time]?.dialog) {
      
      // dialog has not started
      if (this.currentState !== NpcState.ACTING) {
        this.setState(NpcState.ACTING);
        player.setState(PlayerState.ACTING);

        Talking.startDialog(this.routine[time].dialog, this.name);
      }
      // dialog has started
      else {
        const dialogEnd: boolean = Talking.displaySentence();

        if (dialogEnd) {
          this.setState(NpcState.IDLE);
          player.setState(PlayerState.IDLE);
        }
      }
    }
  }

  //#region Getters & Setters
  getState(): NpcState {
    return this.currentState;
  }

  setState(state: NpcState): void {
    this.currentState = state;
  }
  //#endregion
}
