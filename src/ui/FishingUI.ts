import { MapUI } from ".";
import { MapSprite } from "../map";
import { FishEntity } from "../entities";
import { FishingToolItem } from '../items';

export class FishingUI {

  private static instance: FishingUI;
  private static fishBarContainer: HTMLElement;
  private static fishBar: HTMLElement;
  private static fishingRodBarContainer: HTMLElement;
  private static fishingRodBar: HTMLElement;

  //#region Singleton
  private constructor() {}

  public static get(): FishingUI {
    if (!FishingUI.instance) {
      FishingUI.instance = new FishingUI();
    }

    return FishingUI.instance;
  }
  //#endregion

  public static create(fishSprite: MapSprite): void {
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
    FishingUI.fishBarContainer = document.getElementById('fish-bar-container');
    FishingUI.fishBar = document.getElementById('fish-bar');
    FishingUI.fishingRodBarContainer = document.getElementById('fishing-rod-bar-container');
    FishingUI.fishingRodBar = document.getElementById('fishing-rod-bar')
  }

  public static destroy(): void {
    MapUI.get().remove(document.getElementById(`fish-bar-container`));
    MapUI.get().remove(document.getElementById(`fish-bar`));
    MapUI.get().remove(document.getElementById(`fishing-rod-bar-container`));
    MapUI.get().remove(document.getElementById(`fishing-rod-bar`));
  }

  public static updateFishHP(fish: FishEntity): void {
    const element = document.getElementById(`fish-bar`);

    if (fish.getHealthPoints() < 20 / 100 * fish.getMaxHealthPoints()) {
      element.style.backgroundColor = 'red';
    }
    else if (fish.getHealthPoints() < 66 / 100 * fish.getMaxHealthPoints()) {
      element.style.backgroundColor = 'yellow';
    }
    else {
      element.style.backgroundColor = 'green';
    }

    element.style.width = `${ 128 * fish.getHealthPoints() / fish.getMaxHealthPoints() }px`;
  }

  public static updateFishingRodHP(fishingRod: FishingToolItem): void {
    const element = document.getElementById(`fishing-rod-bar`);

    element.style.width = `${ 128 * fishingRod.getPressure() / fishingRod.getMaxPressure() }px`;
  }

  public static startFrenzy(fishSprite: MapSprite) {
    fishSprite.addClass('frenzy');
  }

  public static stopFrenzy(fishSprite: MapSprite) {
    fishSprite.removeClass('frenzy');
  }

}
