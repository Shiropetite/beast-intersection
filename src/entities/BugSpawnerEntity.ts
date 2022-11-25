import { BugEntity } from '.';
import { MapSprite, MapCell } from '../map';
import { MapService } from '../services';
import { BugItem } from './../items';

export class BugSpawnerEntity {

    private readonly sprite: MapSprite;
    private readonly item: BugItem;
    private readonly bug: BugEntity;

    private currentCell: MapCell;
    private empty: boolean;

    public constructor(sprite: MapSprite, item: BugItem, bug: BugEntity, y: number, x: number) {
        this.sprite = sprite;
        this.item = item;
        this.bug = bug;

        //FIXME: set currentCell here instead
        MapService.get().initEntityMapCell(this, y, x);
        this.empty = false;
    }

    public getSprite(): MapSprite { return this.sprite; }

    public getItem(): BugItem { return this.item; }

    public getBug(): BugEntity { return this.bug; }

    public getCurrentCell(): MapCell { return this.currentCell; }
  
    public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

    public isEmpty(): boolean { return this.empty; }

    public setEmpty(): void { this.empty = !this.empty; }

}