import { ColliderEntity, SpriteEntity } from '.';
import { SpriteDirections } from '../utils';
import { ToolItem, FishingToolItem } from './../items';

export enum PlayerStates {
  IDLE,
  MOVING,
  TALKING,
  FISHING,
  CATCHING,
}

export class PlayerEntity {
  
  private static instance: PlayerEntity;

  private readonly sprite: SpriteEntity;
  private readonly collider: ColliderEntity;

  private state: PlayerStates;
  private spriteDirection: SpriteDirections;
  private toolEquiped: ToolItem | null;

  public constructor(sprite: SpriteEntity, collider: ColliderEntity) {
    this.sprite = sprite;
    this.collider = collider;

    this.state = PlayerStates.IDLE;
    this.spriteDirection = SpriteDirections.DOWN;
    this.toolEquiped = new FishingToolItem('canne à peche en bois', 10, 100, 10);

    PlayerEntity.instance = this;
  }

  public static getInstance(): PlayerEntity { return PlayerEntity.instance; }

  public getSprite(): SpriteEntity { return this.sprite; }

  public getCollider(): ColliderEntity { return this.collider; }

  public getState(): PlayerStates { return this.state; }

  public setState(state: PlayerStates): void { if (this.state !== state) { this.state = state; }}

  public setSpriteDirection(spriteDirection: SpriteDirections): void { this.spriteDirection = spriteDirection; }

  public getToolEquiped(): ToolItem { return this.toolEquiped; }

  public setToolEquiped(tool: ToolItem | null): void { this.toolEquiped = tool; }

}