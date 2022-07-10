import { box } from '../../utils';
import { ColliderEntity } from '../ColliderEntity';

export enum PersonState {
  IDLE,
  MOVING,
  TALKING,
  ACTING,
  MENUING
}

export abstract class PersonEntity extends ColliderEntity {
  private readonly name: string;
  private state: PersonState = PersonState.IDLE;

  public constructor(name: string, spriteTop: number, spriteLeft: number, npc: boolean) {
    super(npc ? 'npc' : 'player', npc? 'npc' : 'player', box - 6, box - 6, spriteTop, spriteLeft);

    if (npc) {
      this.setTriggerWidth((box - 6) * 3);
      this.setTriggerHeight((box - 6) * 3);
      this.setTriggerTop(spriteTop - box - 6);
      this.setTriggerLeft(spriteLeft - box - 6);
    }

    this.name = name;
    
    this.setState(PersonState.IDLE);

    this.update();
  }

  //#region Getters & Setters
  public getName(): string {
    return this.name;
  }

  public getState(): PersonState {
    return this.state;
  }

  public setState(state: PersonState): void {
    if (this.state !== state) {
      this.state = state;
    }
  }
  //#endregion
}
