import { MapCell, MapSprite } from '../map';
import { FishingToolItem, CatchingToolItem } from './../items';

export enum PlayerStates {
  IDLE,
  MOVING,
  TALKING,
  FISHING,
  CATCHING,
  LOCKED,
}

export type ToolType = FishingToolItem | CatchingToolItem;

export class PlayerEntity {
  
  private static instance: PlayerEntity;

  private readonly sprite: MapSprite;

  private currentCell: MapCell;
  private state: PlayerStates;
  private toolEquiped: ToolType;

  public constructor() {
    this.sprite = new MapSprite('player');

    this.state = PlayerStates.IDLE;
    this.toolEquiped = new FishingToolItem('canne à peche en bois', 10, 100, 10);

    PlayerEntity.instance = this;
  }

  public static getInstance(): PlayerEntity { 
    if (!PlayerEntity.instance) {
      PlayerEntity.instance = new PlayerEntity();
    }

    return PlayerEntity.instance; 
  }

  public getSprite(): MapSprite { return this.sprite; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

  public getState(): PlayerStates { return this.state; }

  public setState(state: PlayerStates): void { if (this.state !== state) { this.state = state; }}

  public getToolEquiped(): ToolType { return this.toolEquiped; }

  public setToolEquiped(tool: ToolType | null): void { this.toolEquiped = tool; }

}