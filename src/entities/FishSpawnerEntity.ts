import { FishEntity } from '.';
import { MapSprite, MapCell } from '../map';
import { MapService } from '../services';
import { FishItem } from '../items';

export class FishSpawnerEntity {

    private readonly sprite: MapSprite;
    private readonly item: FishItem;
    private readonly fish: FishEntity;

    private currentCell: MapCell;
    private empty: boolean;

    public constructor(sprite: MapSprite, item: FishItem, fish: FishEntity, y: number, x: number) {
        this.sprite = sprite;
        this.item = item;
        this.fish = fish;

        //FIXME: set currentCell here instead
        MapService.get().initEntityMapCell(this, y, x);
        this.empty = false;
    }

    public getSprite(): MapSprite { return this.sprite; }

    public getItem(): FishItem { return this.item; }

    public getFish(): FishEntity { return this.fish; }

    public getCurrentCell(): MapCell { return this.currentCell; }
  
    public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

    public isEmpty(): boolean { return this.empty; }

    public setEmpty(): void { this.empty = !this.empty; }

}