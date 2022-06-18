import { box } from '..';
import { SolidEntity } from './SolidEntity';

enum NpcState {
  IDLE,
  MOVING,
  ACTING
}

export class NpcEntity extends SolidEntity {
  private currentState: NpcState = NpcState.IDLE;
  private routine: any;
  private name: string;

  constructor(name: string, routine: any, top: number, left: number) {
    super('npc', 'npc', box - 6, box - 6, top, left);
    this.name = name;
    this.routine = routine;
  }

  move() {

  }
}
