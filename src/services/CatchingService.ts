import { CatchingUI } from '../ui';
import { DirectionKeys, PersonState, TriggerResourceEntity } from '../entities';
import { CatchingToolItem, BugItem } from './../items';
import { TimeService } from '../services';
import { player } from '..';
import { InputSignalListener } from '../signals/InputSignal';

export enum CatchingState {
  ONGOING,
  WIN,
  LOSE
}

export class CatchingService implements InputSignalListener {
  private static instance: CatchingService;

  private bugItem: BugItem;
  private directionFails: number;
  private directionInterval: NodeJS.Timer;

  //#region Singleton
  private constructor() { }

  public static getInstance(): CatchingService {
    if (!CatchingService.instance) {
      CatchingService.instance = new CatchingService();
    }

    return CatchingService.instance;
  }
  //#endregion

  // Key listener
  onKeyPressed(keyPressed: string): void {
    console.log(keyPressed);
  }

  public start(bugEntity: TriggerResourceEntity, catchingNet: CatchingToolItem): void {
    this.directionFails = 0;
    this.bugItem = bugEntity.getItem() as BugItem;

    CatchingUI.create(bugEntity.getSpriteTop(), bugEntity.getSpriteLeft());

    player.setState(PersonState.ACTING);

    const directionList: any[] = Object.entries(DirectionKeys).map(([_, value]) => value);

    const randomDirection = directionList[Math.floor(Math.random() * directionList.length)];
    CatchingUI.updateDirection(randomDirection);

    // switch direction interval
    this.directionInterval = setInterval(() => {
      const randomDirection = directionList[Math.floor(Math.random() * directionList.length)];
      CatchingUI.updateDirection(randomDirection);
    }, this.bugItem.getDirectionDuration() /*+ catchingNet.getDirectionDurationBonus()*/);
  }

  public end(): void {
    clearInterval(this.directionInterval);

    CatchingUI.destroy();

    TimeService.getInstance().start();

    player.setState(PersonState.IDLE);
  }

  public fail(): void {
    this.bugItem.setHealthPoints(this.bugItem.getMaxHealthPoints());
  }

  public catch(): CatchingState {
    // minigame won
    if (this.bugItem.getHealthPoints() <= 0) {
      this.end();
      return CatchingState.WIN;
    }

    // minigame lost
    if (this.directionFails >= 3) {
      this.end();
      return CatchingState.LOSE;
    }

    return CatchingState.ONGOING;
  }

}