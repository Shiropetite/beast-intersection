import { RockItem } from "../items";
import { MapCell, MapSprite } from "../map";
import { MapService } from "../services";

export class PickableEntity {

  private readonly sprite: MapSprite;
  //TODO: change to PickableItem when needed
  private readonly item: RockItem;

  private currentCell: MapCell;

  public constructor(sprite: MapSprite, item: RockItem, y: number, x: number) {
    this.sprite = sprite;
    this.item = item;

    //FIXME: set currentCell here instead
    MapService.getInstance().initEntityMapCell(this, y, x)
  }

  public getSprite(): MapSprite { return this.sprite; }

  public getItem(): RockItem { return this.item; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

}