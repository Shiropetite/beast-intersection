import { FishingUI } from './../ui/FishingUI';
import { TriggerResourceEntity } from '../entities/resources/TriggerResourceEntity';
import { FishItem } from './../items/FishItem';

export class Fishing {
  private static fishItem: FishItem;

  public static start(fishEntity: TriggerResourceEntity): void {
    this.fishItem = fishEntity.getDrop() as FishItem;
    FishingUI.create(fishEntity.getSpriteTop(), fishEntity.getSpriteLeft());
  }

  public static end(): void {
    FishingUI.hide();
  }

  public static fish(): boolean {
    if (this.fishItem.getHealthPoints() <= 0) {
      this.end();
      return true;
    }
    
    this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() - 5);
    FishingUI.updateLife(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
    return false;
  }

}
