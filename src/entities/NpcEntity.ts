import { SpriteEntity, TriggerEntity, ColliderEntity  } from '.';
import { DialogElement } from '../services';
import { SpriteDirections } from '../utils';

export interface NpcRoutine {
  [time: string]: {
    text?: string,
    position?: {
      top: number,
      left: number
    },
    dialog?: DialogElement[]
  }
}

export enum NpcStates {
  IDLE,
  MOVING,
  TALKING,
}

export class NpcEntity {
  
  private readonly sprite: SpriteEntity;
  private readonly trigger: TriggerEntity;
  private readonly collider: ColliderEntity;

  private readonly name: string;
  
  private state: NpcStates;
  private spriteDirection: SpriteDirections;
  private routine: NpcRoutine;

  public constructor(sprite: SpriteEntity, trigger: TriggerEntity, collider: ColliderEntity, name: string, routine: NpcRoutine) {
    this.sprite = sprite;
    this.trigger = trigger;
    this.collider = collider;
    
    this.name = name;

    this.state = NpcStates.IDLE;
    this.spriteDirection = SpriteDirections.DOWN;
    this.routine = routine;
  }

  public getSprite(): SpriteEntity { return this.sprite; }

  public getCollider(): ColliderEntity { return this.collider; }

  public getName(): string { return this.name; }

  public getState(): NpcStates { return this.state; }

  public setState(state: NpcStates): void { if (this.state !== state) { this.state = state; }}

  public setSpriteDirection(spriteDirection: SpriteDirections): void { this.spriteDirection = spriteDirection; }

  public getRoutine(): NpcRoutine { return this.routine; }

}