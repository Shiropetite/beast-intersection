import { MapCell, MapSprite } from '../map';
import { MapConfig, Sentence } from '../services';

export interface NpcRoutine {
  [time: string]: {
    map?: MapConfig,
    position?: {
      top: number,
      left: number
    },
    dialog?: Sentence[], 
  }
}

export enum NpcStates {
  IDLE,
  MOVING,
  TALKING,
}

export class NpcEntity {
  
  private readonly sprite: MapSprite;
  private readonly name: string;
  
  private currentCell: MapCell;
  private state: NpcStates;
  private routine: NpcRoutine;

  public constructor(sprite: MapSprite, name: string, routine: NpcRoutine) {
    this.sprite = sprite;
    this.name = name;

    this.state = NpcStates.IDLE;
    this.routine = routine;
  }
  
  public getSprite(): MapSprite { return this.sprite; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

  public getName(): string { return this.name; }

  public getState(): NpcStates { return this.state; }

  public setState(state: NpcStates): void { if (this.state !== state) { this.state = state; }}

  public getRoutine(): NpcRoutine { return this.routine; }

}