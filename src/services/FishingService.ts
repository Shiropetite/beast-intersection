import { FishingUI } from './../ui/FishingUI';
import { TriggerResourceEntity } from '../entities/resources/TriggerResourceEntity';
import { FishItem } from './../items/FishItem';
import { FishingToolItem } from './../items/FishingToolItem';
import { TimeService } from '../services/TimeService';

export enum FishingState {
  FISHING,
  PICK_UP,
  FAILED
}

export class FishingService {
  private static fishItem: FishItem;
  private static isFrenzy: boolean;
  private static regenInterval: NodeJS.Timer;
  private static frenzyInterval: NodeJS.Timer;

  public static start(fishEntity: TriggerResourceEntity, fishingRod: FishingToolItem) : void {
    this.isFrenzy = false;
    this.fishItem = fishEntity.getDrop() as FishItem;
    FishingUI.create(fishEntity.getSpriteTop(), fishEntity.getSpriteLeft());
  
    // create regen interval
    FishingService.regenInterval = setInterval(() => { 
      if (this.fishItem.getHealthPoints() < this.fishItem.getMaxHealthPoints()) {
        this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() + this.fishItem.getRegenPoints());
        if (fishingRod.getDurability() > 0) {
          fishingRod.setDurability(fishingRod.getDurability() - fishingRod.getResistance())
        }
        
        FishingUI.updateLife(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
        FishingUI.updateFishingRod(fishingRod.getDurability(), fishingRod.getMaxDurability())
      }
    }, this.fishItem.getRegenSpeed())

    // create frenzy interval
    FishingService.frenzyInterval = setInterval(() => {
      this.isFrenzy = true;
      FishingUI.startFrenzy(fishEntity.getSprite())
      setTimeout(() => { 
        this.isFrenzy = false;
        FishingUI.stopFrenzy(fishEntity.getSprite())
      }, this.fishItem.getFrenzyDuration())
    }, this.fishItem.getFrenzyFrequency() + this.fishItem.getFrenzyDuration());

    TimeService.stop();
  }

  public static end(): void {
    clearInterval(FishingService.regenInterval);
    clearInterval(FishingService.frenzyInterval);

    FishingUI.destroy();

    TimeService.start();
  }

  public static fail(fishingRod: FishingToolItem): void {
    clearInterval(FishingService.regenInterval);
    clearInterval(FishingService.frenzyInterval);

    fishingRod.setDurability(0);
    this.fishItem.setHealthPoints(this.fishItem.getMaxHealthPoints())
    
    FishingUI.destroy();

    TimeService.start();
  }

  public static fish(fishingRod: FishingToolItem): FishingState {
    if (this.isFrenzy) {
      this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() - fishingRod.getPower() * this.fishItem.getFrenzyMultiplier());
      fishingRod.setDurability(fishingRod.getDurability() + fishingRod.getResistance() / this.fishItem.getFrenzyMultiplier());
    }
    else {
      this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() - fishingRod.getPower());
      fishingRod.setDurability(fishingRod.getDurability() + fishingRod.getResistance());
    }

    if (this.fishItem.getHealthPoints() <= 0) {
      this.end();
      return FishingState.PICK_UP;
    }

    if (fishingRod.getDurability() >= fishingRod.getMaxDurability()) {
      this.fail(fishingRod);
      return FishingState.FAILED;
    }

    FishingUI.updateLife(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
    FishingUI.updateFishingRod(fishingRod.getDurability(), fishingRod.getMaxDurability());
    return FishingState.FISHING;
  }

}
