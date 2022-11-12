import { Map } from "../Map";

export class FishingUI {
  private static fishBarContainer: HTMLElement;
  private static fishBar: HTMLElement;
  private static fishingRodBarContainer: HTMLElement;
  private static fishingRodBar: HTMLElement;

  public static create(fishTop: number, fishLeft: number): void {
    // create fishHP container HTML
    const fishBarContainerHTML = document.createElement('div');
    fishBarContainerHTML.id = `fish-bar-container`;
    fishBarContainerHTML.classList.add('fish-bar-container');
    fishBarContainerHTML.style.top = `${ fishTop - 30 }px`;
    fishBarContainerHTML.style.left = `${ fishLeft }px`;
    Map.getInstance().mapHtml.appendChild(fishBarContainerHTML);

    // create fishHP HTML
    const fishBarHTML = document.createElement('div');
    fishBarHTML.id = `fish-bar`;
    fishBarHTML.classList.add('fish-bar');
    fishBarHTML.style.top = `${ fishTop - 30 }px`;
    fishBarHTML.style.left = `${ fishLeft }px`;
    Map.getInstance().mapHtml.appendChild(fishBarHTML);

    // create fishingRodHP HTML
    const fishingRodBarContainerHTML = document.createElement('div');
    fishingRodBarContainerHTML.id = `fishing-rod-bar-container`;
    fishingRodBarContainerHTML.classList.add('fishing-rod-bar-container');
    fishingRodBarContainerHTML.style.top = `${ fishTop - 40 }px`;
    fishingRodBarContainerHTML.style.left = `${ fishLeft }px`;
    Map.getInstance().mapHtml.appendChild(fishingRodBarContainerHTML);

    // create fishingRodHP HTML
    const fishingRodBarHTML = document.createElement('div');
    fishingRodBarHTML.id = `fishing-rod-bar`;
    fishingRodBarHTML.classList.add('fishing-rod-bar');
    fishingRodBarHTML.style.top = `${ fishTop - 40 }px`;
    fishingRodBarHTML.style.left = `${ fishLeft }px`;
    Map.getInstance().mapHtml.appendChild(fishingRodBarHTML);

    // store HTML
    FishingUI.fishBarContainer = document.getElementById('fish-bar-container');
    FishingUI.fishBar = document.getElementById('fish-bar');
    FishingUI.fishingRodBarContainer = document.getElementById('fishing-rod-bar-container');
    FishingUI.fishingRodBar = document.getElementById('fishing-rod-bar')
  }

  public static destroy(): void {
    Map.getInstance().mapHtml.removeChild(document.getElementById(`fish-bar-container`));
    Map.getInstance().mapHtml.removeChild(document.getElementById(`fish-bar`));
    Map.getInstance().mapHtml.removeChild(document.getElementById(`fishing-rod-bar-container`));
    Map.getInstance().mapHtml.removeChild(document.getElementById(`fishing-rod-bar`));
  }

  public static updateFishHP(hp: number, maxHP: number): void {
    const element = document.getElementById(`fish-bar`);
    
    if (hp < 20 / 100 * maxHP) {
      element.style.backgroundColor = 'red';
    }
    else if (hp < 66 / 100 * maxHP) {
      element.style.backgroundColor = 'yellow';
    }
    else {
      element.style.backgroundColor = 'green';
    }

    element.style.width = `${ 128 * hp / maxHP }px`;
  }

  public static updateFishingRodHP(resistance: number, maxResistance: number): void {
    const element = document.getElementById(`fishing-rod-bar`);
    const elementContainer = document.getElementById(`fishing-rod-bar-container`);

    if (resistance > 60 / 100 * maxResistance) {
      if(!element.classList.contains('blink')) {
        element.classList.add('blink');
        elementContainer.classList.add('blink');
      }
    }
    else if(element.classList.contains('blink')) {
      element.classList.remove('blink');
      elementContainer.classList.remove('blink');
    }

    element.style.width = `${ 128 * resistance / maxResistance }px`;
  }

  public static startFrenzy(fishSprite: HTMLElement) {
    fishSprite.classList.add('frenzy');
  }

  public static stopFrenzy(fishSprite: HTMLElement) {
    fishSprite.classList.remove('frenzy');
  }

}
