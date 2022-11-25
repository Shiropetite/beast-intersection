import { TimeService, TalkingService, InventoryService } from '.';
import { FishSpawnerEntity, PlayerEntity, PlayerStates } from "../entities";
import { FishingToolItem } from '../items';
import { FishingUI } from '../ui';
import { InputSignalListener } from '../signals';
import { ActionKeys } from "../utils";

export class FishingService implements InputSignalListener {
  
  private static instance: FishingService;

  private isRunning: boolean;
  private fishSpawner: FishSpawnerEntity;
  private fishingRod: FishingToolItem;
  private regenInterval: NodeJS.Timer;
  private frenzyInterval: NodeJS.Timer;

  //#region Singleton
  private constructor() { }

  public static get(): FishingService {
    if (!FishingService.instance) {
      FishingService.instance = new FishingService();
    }

    return FishingService.instance;
  }
  //#endregion

  public onKeyPressed(keyPressed: string): boolean {
    if (keyPressed === ActionKeys.ACT && this.isRunning && PlayerEntity.get().getState() === PlayerStates.FISHING) {
      this.fish();
      return true;
    }
    return false;
  }

  public start(fishSpawner: FishSpawnerEntity, fishingRod: FishingToolItem) : void {
    PlayerEntity.get().setState(PlayerStates.FISHING);

    this.isRunning = true;
    this.fishSpawner = fishSpawner;
    this.fishingRod = fishingRod;

    FishingUI.get().create(this.fishSpawner.getSprite());
  
    // interval for fish hp and fishing rod hp regen
    this.regenInterval = setInterval(() => { 
      if (this.fishSpawner.getFish().getHealthPoints() < this.fishSpawner.getFish().getMaxHealthPoints()) {
        this.fishSpawner.getFish().setHealthPoints(
          this.fishSpawner.getFish().getHealthPoints() + 
          this.fishSpawner.getFish().getRegenPoints()
        );
        
        if (this.fishingRod.getPressure() > 0) {
          this.fishingRod.setPressure(this.fishingRod.getPressure() - this.fishingRod.getPressureFactor());
        }
        
        FishingUI.get().updateFishHP(this.fishSpawner.getFish());
        FishingUI.get().updateFishingRodHP(this.fishingRod);
      }
    }, this.fishSpawner.getFish().getRegenSpeed()); /* wtf je comprends meme plus ce code */

    // interval for fish frenzy
    this.frenzyInterval = setInterval(() => {
      this.fishSpawner.getFish().setOnFrenzy();

      FishingUI.get().startFrenzy(this.fishSpawner.getSprite());

      setTimeout(() => { 
        this.fishSpawner.getFish().setOnFrenzy();

        FishingUI.get().stopFrenzy(this.fishSpawner.getSprite());
      }, this.fishSpawner.getFish().getFrenzyDuration());
    }, this.fishSpawner.getFish().getFrenzyFrequency() + this.fishSpawner.getFish().getFrenzyDuration());

    TimeService.get().stop();
  }

  private end(): void {
    clearInterval(this.regenInterval);
    clearInterval(this.frenzyInterval);

    FishingUI.get().destroy();

    this.isRunning = false;

    //FIXME: marche pas si on commence à jouer avec un autre spawner avant que le timeout se termine
    this.fishSpawner.setEmpty();
    this.fishSpawner.getSprite().hide();
    setTimeout(() => {
      this.fishSpawner.setEmpty();
      this.fishSpawner.getSprite().show();
    }, 10000)
  }

  private fish(): void {
    if (this.fishSpawner.getFish().isOnFrenzy()) {
      this.fishSpawner.getFish().takeDamage(
        this.fishingRod.getPower() * 
        this.fishSpawner.getFish().getFrenzyMultiplier()
      );

      this.fishingRod.applyPressure(this.fishingRod.getPressureFactor() / this.fishSpawner.getFish().getFrenzyMultiplier());
    }
    else {
      this.fishSpawner.getFish().takeDamage(this.fishingRod.getPower());
      this.fishingRod.applyPressure();
    }

    this.fishSpawner.getFish().takeDamage(this.fishingRod.getPower());
    this.fishingRod.applyPressure();

    FishingUI.get().updateFishHP(this.fishSpawner.getFish());
    FishingUI.get().updateFishingRodHP(this.fishingRod);

    // minigame won
    if (this.fishSpawner.getFish().getHealthPoints() <= 0) {
      this.win();
      this.end();
    }

    // minigame lost
    if (this.fishingRod.getPressure() >= this.fishingRod.getMaxPressure()) {
      this.lose();
      this.end();
    }
  }

  private win(): void {
    this.fishingRod.setPressure(0);
    this.fishSpawner.getFish().setHealthPoints(this.fishSpawner.getFish().getMaxHealthPoints());
    
    InventoryService.get().add(this.fishSpawner.getItem());

    TalkingService.get().start([{ 
      text: "Vous avez attrapé 1 " + this.fishSpawner.getItem().getName() + " !",
      isLock: true,
    }]);
  }

  private lose(): void {
    this.fishingRod.setPressure(0);
    this.fishSpawner.getFish().setHealthPoints(this.fishSpawner.getFish().getMaxHealthPoints());

    TalkingService.get().start([{ 
      text: "Le poisson s'est enfui...",
      isLock: true,
    }]);
  }

}