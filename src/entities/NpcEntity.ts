import { SpriteEntity, TriggerEntity, ColliderEntity  } from '.';
import { DialogElement } from '../services';

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

export class NpcEntity {
  private readonly sprite: SpriteEntity;
  private readonly trigger: TriggerEntity;
  private readonly collider: ColliderEntity;

  private readonly name: string;
  private readonly routine: Routine;

  public constructor(sprite: SpriteEntity, trigger: TriggerEntity, collider: ColliderEntity, name: string, routine: Routine) {
    this.sprite = sprite;
    this.trigger = trigger;
    this.collider = collider;
    
    this.name = name;
    this.routine = routine;
  }

  public getName(): string { return this.name; }

}