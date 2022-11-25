import { MapCell, MapSprite } from "../map";
import { MapService } from "../services";
import { Item } from "../items";

export class PickableEntity {

  private readonly sprite: MapSprite;
  private readonly item: Item;

  private currentCell: MapCell;

  public constructor(sprite: MapSprite, item: Item, y: number, x: number) {
    this.sprite = sprite;
    this.item = item;

    //FIXME: set currentCell here instead
    MapService.get().initEntityMapCell(this, y, x)
  }

  public getSprite(): MapSprite { return this.sprite; }

  public getItem(): Item { return this.item; }

  public getCurrentCell(): MapCell { return this.currentCell; }

  public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

}