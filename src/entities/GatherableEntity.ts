import { Item } from "../items";
import { MapCell, MapSprite } from "../map";
import { MapService } from "../services";

export class GatherableEntity {
    
    private readonly sprite: MapSprite;
    private readonly items: Item[];
  
    private currentCell: MapCell;
  
    public constructor(sprite: MapSprite, items: Item[], y: number, x: number) {
      this.sprite = sprite;
      this.items = items;
  
      //FIXME: set currentCell here instead
      MapService.get().initEntityMapCell(this, y, x)
    }
  
    public getSprite(): MapSprite { return this.sprite; }
  
    public getItems(): Item[] { return this.items; }
  
    public getCurrentCell(): MapCell { return this.currentCell; }
  
    public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }
}