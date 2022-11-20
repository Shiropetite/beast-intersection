import { MapSprite, MapCell } from '../map';
import { MapService } from '../services';
import { BugItem } from './../items';
import { BugEntity } from '.';

export class BugSpawnerEntity {

    private readonly sprite: MapSprite;
    private readonly item: BugItem;
    private readonly bug: BugEntity;

    private currentCell: MapCell;
    private state: boolean;

    public constructor(sprite: MapSprite, item: BugItem, bug: BugEntity, y: number, x: number) {
        this.sprite = sprite;
        this.item = item;
        this.bug = bug;

        //FIXME: set currentCell here instead
        MapService.getInstance().initEntityMapCell(this, y, x)
        this.state = true;
    }

    public getSprite(): MapSprite { return this.sprite; }

    public getItem(): BugItem { return this.item; }

    public getFish(): BugEntity { return this.bug; }

    public getCurrentCell(): MapCell { return this.currentCell; }
  
    public setCurrentCell(currentCell: MapCell): void { this.currentCell = currentCell; }

    public canFish(): boolean { return this.state; }

}