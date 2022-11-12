import { SpriteComponent, TriggerComponent, ColliderComponent } from '../components';
import { MapCell } from '.';
import { Sentence } from '../services';

export interface NpcRoutine {
  [time: string]: {
    text?: string,
    position?: {
      top: number,
      left: number
    },
    dialog?: Sentence[]
  }
}

export enum NpcStates {
  IDLE,
  MOVING,
  TALKING,
}

export class NpcEntity {
  
  private readonly sprite: SpriteComponent;
  private readonly trigger: TriggerComponent;
  private readonly collider: ColliderComponent;

  private readonly name: string;
  
  private currentCell: MapCell;
  private state: NpcStates;
  private routine: NpcRoutine;

  public constructor(sprite: SpriteComponent, trigger: TriggerComponent, collider: ColliderComponent, name: string, routine: NpcRoutine) {
    this.sprite = sprite;
    this.trigger = trigger;
    this.collider = collider;
    
    this.name = name;

    this.state = NpcStates.IDLE;
    //TODO: add npc starting cell
    this.routine = routine;
  }

  public getSprite(): SpriteComponent { return this.sprite; }

  public getTrigger(): TriggerComponent { return this.trigger; }

  public getCollider(): ColliderComponent { return this.collider; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

  public getName(): string { return this.name; }

  public getState(): NpcStates { return this.state; }

  public setState(state: NpcStates): void { if (this.state !== state) { this.state = state; }}

  public getRoutine(): NpcRoutine { return this.routine; }

}