import { FishingUI } from './../ui/FishingUI';
import { TriggerResourceEntity } from '../entities/TriggerResourceEntity';
import { FishItem } from './../items/FishItem';

export class Fishing {
  private static fish: FishItem;

  public static start(fishEntity: TriggerResourceEntity): void {
    this.fish = fishEntity.getDrop() as FishItem;
    FishingUI.createHTML(fishEntity.getTop(), fishEntity.getLeft());
  }

  public static fishing(): boolean {
    if (this.fish.getHealthPoints() <= 0) {
      this.end();
      return true;
    }
    
    this.fish.setHealthPoints(this.fish.getHealthPoints() - 5);
    FishingUI.updateLife(this.fish.getHealthPoints(), this.fish.getMaxHealthPoints());
    return false;
  }

  public static end(): void {
    FishingUI.removeHTML();
  }

}
