import { FishingUI } from './../ui/FishingUI';
import { TriggerResourceEntity } from '../entities/resources/TriggerResourceEntity';
import { FishItem } from './../items/FishItem';

export class Fishing {
  private static fishItem: FishItem;
  private static isFrenzy: boolean;
  private static regenInterval: NodeJS.Timer;
  private static frenzyInterval: NodeJS.Timer;

  public static start(fishEntity: TriggerResourceEntity): void {
    this.isFrenzy = false;
    this.fishItem = fishEntity.getDrop() as FishItem;
    FishingUI.create(fishEntity.getSpriteTop(), fishEntity.getSpriteLeft());
  
    // create regen interval
    Fishing.regenInterval = setInterval(() => { 
      if(this.fishItem.getHealthPoints() < this.fishItem.getMaxHealthPoints()) {
        this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() + this.fishItem.getRegenPoints());
        
        FishingUI.updateLife(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
      }
    }, this.fishItem.getRegenSpeed())

    // create frenzy interval
    Fishing.frenzyInterval = setInterval(() => {
      this.isFrenzy = true;
      FishingUI.startFrenzy(fishEntity.getSprite())
      setTimeout(() => { 
        this.isFrenzy = false;
        FishingUI.stopFrenzy(fishEntity.getSprite())
      }, this.fishItem.getFrenzyDuration())
    }, this.fishItem.getFrenzyFrequency() + this.fishItem.getFrenzyDuration())
  }

  public static end(): void {
    clearInterval(Fishing.regenInterval);
    clearInterval(Fishing.frenzyInterval);

    FishingUI.destroy();
  }

  public static fish(): boolean {
    if (this.fishItem.getHealthPoints() <= 0) {
      this.end();
      return true;
    }
    
    if (this.isFrenzy) {
      this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() - 5 * this.fishItem.getFrenzyMultiplier());
    }
    else {
      this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() - 5);
    }
    FishingUI.updateLife(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
    return false;
  }

}
