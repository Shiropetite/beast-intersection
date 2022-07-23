import { FishingUI } from './../ui';
import { PersonState, TriggerResourceEntity } from '../entities';
import { FishItem, FishingToolItem } from './../items';
import { TimeService } from '../services';
import { player } from '..';

export enum FishingState {
  ONGOING,
  WIN,
  LOSE
}

export class FishingService {
  private static fishItem: FishItem;
  private static isFrenzy: boolean;
  private static regenInterval: NodeJS.Timer;
  private static frenzyInterval: NodeJS.Timer;

  public static start(fishEntity: TriggerResourceEntity, fishingRod: FishingToolItem) : void {
    this.isFrenzy = false;
    this.fishItem = fishEntity.getItem() as FishItem;
    FishingUI.create(fishEntity.getSpriteTop(), fishEntity.getSpriteLeft());

    player.setState(PersonState.ACTING);
  
    // interval for fish hp and fishing rod hp regen
    FishingService.regenInterval = setInterval(() => { 
      if (this.fishItem.getHealthPoints() < this.fishItem.getMaxHealthPoints()) {
        this.fishItem.setHealthPoints(this.fishItem.getHealthPoints() + this.fishItem.getRegenPoints());
        
        if (fishingRod.getDurability() > 0) {
          fishingRod.setDurability(fishingRod.getDurability() - fishingRod.getResistance());
        }
        
        FishingUI.updateFishHP(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
        FishingUI.updateFishingRodHP(fishingRod.getDurability(), fishingRod.getMaxDurability());
      }
    }, this.fishItem.getRegenSpeed());

    // interval for fish frenzy
    FishingService.frenzyInterval = setInterval(() => {
      this.isFrenzy = true;
      FishingUI.startFrenzy(fishEntity.getSprite());
      setTimeout(() => { 
        this.isFrenzy = false;
        FishingUI.stopFrenzy(fishEntity.getSprite());
      }, this.fishItem.getFrenzyDuration());
    }, this.fishItem.getFrenzyFrequency() + this.fishItem.getFrenzyDuration());

    TimeService.stop();
  }

  public static end(): void {
    clearInterval(FishingService.regenInterval);
    clearInterval(FishingService.frenzyInterval);

    FishingUI.destroy();

    TimeService.start();

    player.setState(PersonState.IDLE);
  }

  public static fail(fishingRod: FishingToolItem): void {
    fishingRod.setDurability(0);
    this.fishItem.setHealthPoints(this.fishItem.getMaxHealthPoints());
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

    // minigame won
    if (this.fishItem.getHealthPoints() <= 0) {
      this.end();
      return FishingState.WIN;
    }

    // minigame lost
    if (fishingRod.getDurability() >= fishingRod.getMaxDurability()) {
      this.fail(fishingRod);
      this.end();
      return FishingState.LOSE;
    }

    FishingUI.updateFishHP(this.fishItem.getHealthPoints(), this.fishItem.getMaxHealthPoints());
    FishingUI.updateFishingRodHP(fishingRod.getDurability(), fishingRod.getMaxDurability());

    return FishingState.ONGOING;
  }

}
