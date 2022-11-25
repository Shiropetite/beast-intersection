import { MapUI } from ".";
import { MapSprite } from "../map";
import { FishEntity } from "../entities";
import { FishingToolItem } from '../items';

export class FishingUI {

  private static instance: FishingUI;

  private fishBarContainer: HTMLElement | null = null;
  private fishBar: HTMLElement | null = null;
  private fishingRodBarContainer: HTMLElement | null = null;
  private fishingRodBar: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static get(): FishingUI {
    if (!FishingUI.instance) {
      FishingUI.instance = new FishingUI();
    }

    return FishingUI.instance;
  }
  //#endregion

  public create(fishSprite: MapSprite): void {
    // create fishHP container HTML
    const fishBarContainerHTML = document.createElement('div');
    fishBarContainerHTML.id = `fish-bar-container`;
    fishBarContainerHTML.classList.add('fish-bar-container');
    fishBarContainerHTML.style.top = `${ fishSprite.getTop() - 30 }px`;
    fishBarContainerHTML.style.left = `${ fishSprite.getLeft() }px`;
    MapUI.get().add(fishBarContainerHTML);

    // create fishHP HTML
    const fishBarHTML = document.createElement('div');
    fishBarHTML.id = `fish-bar`;
    fishBarHTML.classList.add('fish-bar');
    fishBarHTML.style.top = `${ fishSprite.getTop() - 30 }px`;
    fishBarHTML.style.left = `${ fishSprite.getLeft() }px`;
    MapUI.get().add(fishBarHTML);

    // create fishingRodHP HTML
    const fishingRodBarContainerHTML = document.createElement('div');
    fishingRodBarContainerHTML.id = `fishing-rod-bar-container`;
    fishingRodBarContainerHTML.classList.add('fishing-rod-bar-container');
    fishingRodBarContainerHTML.style.top = `${ fishSprite.getTop() - 40 }px`;
    fishingRodBarContainerHTML.style.left = `${ fishSprite.getLeft() }px`;
    MapUI.get().add(fishingRodBarContainerHTML);

    // create fishingRodHP HTML
    const fishingRodBarHTML = document.createElement('div');
    fishingRodBarHTML.id = `fishing-rod-bar`;
    fishingRodBarHTML.classList.add('fishing-rod-bar');
    fishingRodBarHTML.style.top = `${ fishSprite.getTop() - 40 }px`;
    fishingRodBarHTML.style.left = `${ fishSprite.getLeft() }px`;
    MapUI.get().add(fishingRodBarHTML);

    // store HTML
    this.fishBarContainer = document.getElementById('fish-bar-container');
    this.fishBar = document.getElementById('fish-bar');
    this.fishingRodBarContainer = document.getElementById('fishing-rod-bar-container');
    this.fishingRodBar = document.getElementById('fishing-rod-bar');
  }

  public destroy(): void {
    MapUI.get().remove(this.fishBarContainer);
    MapUI.get().remove(this.fishBar);
    MapUI.get().remove(this.fishingRodBarContainer);
    MapUI.get().remove(this.fishingRodBar);
  }

  public updateFishHP(fish: FishEntity): void {
    if (fish.getHealthPoints() < 20 / 100 * fish.getMaxHealthPoints()) { this.fishBar.style.backgroundColor = 'red'; }
    else if (fish.getHealthPoints() < 66 / 100 * fish.getMaxHealthPoints()) { this.fishBar.style.backgroundColor = 'yellow'; }
    else { this.fishBar.style.backgroundColor = 'green'; }

    this.fishBar.style.width = `${ 128 * fish.getHealthPoints() / fish.getMaxHealthPoints() }px`;
  }

  public updateFishingRodHP(fishingRod: FishingToolItem): void { this.fishingRodBar.style.width = `${ 128 * fishingRod.getPressure() / fishingRod.getMaxPressure() }px`; }

  public startFrenzy(fishSprite: MapSprite) { fishSprite.addClass('frenzy'); }

  public stopFrenzy(fishSprite: MapSprite) { fishSprite.removeClass('frenzy'); }

}