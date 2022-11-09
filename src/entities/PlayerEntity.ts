import { ToolItem, FishingToolItem } from './../items';
import { ColliderEntity, SpriteEntity } from '.';

export class PlayerEntity {
  
  private static instance: PlayerEntity;

  private readonly sprite: SpriteEntity;
  private readonly collider: ColliderEntity;
  
  private toolEquiped: ToolItem | null;

  public constructor(sprite: SpriteEntity, collider: ColliderEntity) {
    this.sprite = sprite;
    this.collider = collider;
    this.toolEquiped = new FishingToolItem('canne à peche en bois', 10, 100, 10);

    PlayerEntity.instance = this;
  }

  public static getInstance(): PlayerEntity { return PlayerEntity.instance; }

  public getToolEquiped(): ToolItem { return this.toolEquiped; }

  public setToolEquiped(tool: ToolItem | null): void { this.toolEquiped = tool; }

}