import { GatherableEntity } from './../entities/GatherableEntity';
import { NpcEntity, PlayerEntity, FishSpawnerEntity, BugSpawnerEntity, PickableEntity } from "../entities";
import { PlayerMoveSignalListener } from "../signals/PlayerMoveSignal";
import { sleep } from "../utils";
import { MapTeleporter } from "./MapTeleporter";

export type MapCellContent = PlayerEntity | NpcEntity | FishSpawnerEntity | BugSpawnerEntity | PickableEntity | GatherableEntity;

export class MapCell implements PlayerMoveSignalListener {

  public static readonly MAP_CELL_SIZE = 128;
  
  private readonly sprite: string;
  private readonly isWall: boolean;
  private contents: MapCellContent[];
  private teleporter: MapTeleporter | null;
  
  private up: MapCell | null;
  private down: MapCell | null;
  private left: MapCell | null;
  private right: MapCell | null;

  private y: number;
  private x: number;

  constructor(y: number, x: number, sprite: string, free: boolean = true) {
    this.y = y * MapCell.MAP_CELL_SIZE;
    this.x = x * MapCell.MAP_CELL_SIZE;
    this.sprite = sprite;
    this.isWall = free;

    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
    this.contents = [];
    this.teleporter = null;
  }

  public async onMove(): Promise<void> {
    if (PlayerEntity.get().getCurrentCell() === this && this.teleporter) {
      await sleep(200);
      this.teleporter.teleport();
    }
  }

  /**
   * Add content in Cell and create it on Map
   * @param content 
   */
  public createContent(content: MapCellContent): void {
    this.contents.push(content);
    content.setCurrentCell(this);
    content.getSprite().create(this.y, this.x);
  }

  /**
   * Move a content one cell up 
   * @param content 
   * @returns 
   */
  public moveContentUp(content: MapCellContent): MapCell {
    if (this.up && this.up.isFree()) {
      this.contents = this.contents.filter(c => c !== content);
      this.up.contents.push(content);
      return this.up;
    }

    return null;
  }

  /**
   * Move a content one cell down 
   * @param content 
   * @returns 
   */
  public moveContentDown(content: MapCellContent): MapCell {
    if (this.down && this.down.isFree()) {
      this.contents = this.contents.filter(c => c !== content);
      this.down.contents.push(content);
      return this.down;
    }

    return null;
  }

   /**
   * Move a content one cell left 
   * @param content 
   * @returns 
   */
  public moveContentLeft(content: MapCellContent): MapCell {
    if (this.left && this.left.isFree()) {
      this.contents = this.contents.filter(c => c !== content);
      this.left.contents.push(content);
      return this.left;
    }

    return null;
  }

   /**
   * Move a content one cell right 
   * @param content 
   * @returns 
   */
  public moveContentRight(content: MapCellContent): MapCell {
    if (this.right && this.right.isFree()) {
      this.contents = this.contents.filter(c => c !== content);
      this.right.contents.push(content);
      return this.right;
    }

    return null;
  }

  //#region Getters & Setters
  public getSprite(): string { return this.sprite; }

  public isFree(): boolean { 
    return !this.isWall && !this.contents.find(c => c.constructor.name !== PickableEntity.name);
   }

  public setTeleporter(teleporter: MapTeleporter): void { this.teleporter = teleporter; }
  
  public getUp(): MapCell | null { return this.up; }

  public setUp(up: MapCell | null): void { this.up = up; }
  
  public getDown(): MapCell | null { return this.down; }

  public setDown(down: MapCell | null): void { this.down = down; }
  
  public getLeft(): MapCell | null { return this.left; }

  public setLeft(left: MapCell | null): void { this.left = left; }

  public getRight(): MapCell | null { return this.right; }
  
  public setRight(right: MapCell | null): void { this.right = right; }

  public getContents(): MapCellContent[] { return this.contents; }

  public getY(): number { return this.y; }

  public getX(): number { return this.x; }

  public getCellY(): number { return this.y / MapCell.MAP_CELL_SIZE; }

  public getCellX(): number { return this.x / MapCell.MAP_CELL_SIZE; }
  //#endregion

}