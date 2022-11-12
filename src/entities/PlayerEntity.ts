import { ColliderComponent, SpriteComponent } from '../components';
import { MapCell } from '../map/MapCell';
import { ToolItem, FishingToolItem } from './../items';

export enum PlayerStates {
  IDLE,
  MOVING,
  TALKING,
  FISHING,
  CATCHING,
  LOCKED,
}

export class PlayerEntity {
  
  private static instance: PlayerEntity;

  private readonly sprite: SpriteComponent;
  private readonly collider: ColliderComponent;

  private currentCell: MapCell;
  private state: PlayerStates;
  private toolEquiped: ToolItem | null;

  public constructor() {
    this.sprite = new SpriteComponent('player');
    this.collider = null;

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

  public getSprite(): SpriteComponent { return this.sprite; }

  public getCollider(): ColliderComponent { return this.collider; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

  public getState(): PlayerStates { return this.state; }

  public setState(state: PlayerStates): void { if (this.state !== state) { this.state = state; }}

  public getToolEquiped(): ToolItem { return this.toolEquiped; }

  public setToolEquiped(tool: ToolItem | null): void { this.toolEquiped = tool; }

}