import { map } from "..";

export class FishingUI {
  private static lifebarContainer: HTMLElement;
  private static lifebar: HTMLElement;
  private static fishingrodContainer: HTMLElement;
  private static fishingrod: HTMLElement;

  public static create(fishTop: number, fishLeft: number): void {
    // create lifebar container HTML
    const lifebarContainerHTML = document.createElement('div');
    lifebarContainerHTML.id = `lifebar-container`;
    lifebarContainerHTML.classList.add('lifebar-container');
    lifebarContainerHTML.style.top = `${ fishTop - 30 }px`;
    lifebarContainerHTML.style.left = `${ fishLeft }px`;
    map.appendChild(lifebarContainerHTML);

    // create lifebar HTML
    const lifebar = document.createElement('div');
    lifebar.id = `lifebar`;
    lifebar.classList.add('lifebar');
    lifebar.style.top = `${ fishTop - 30 }px`;
    lifebar.style.left = `${ fishLeft }px`;
    map.appendChild(lifebar);

    // create fishingrod HTML
    const fishingRodContainerHTML = document.createElement('div');
    fishingRodContainerHTML.id = `fishingrod-container`;
    fishingRodContainerHTML.classList.add('fishingrod-container');
    fishingRodContainerHTML.style.top = `${ fishTop - 40 }px`;
    fishingRodContainerHTML.style.left = `${ fishLeft }px`;
    map.appendChild(fishingRodContainerHTML);

    // create fishingrod HTML
    const fishingRodHTML = document.createElement('div');
    fishingRodHTML.id = `fishingrod`;
    fishingRodHTML.classList.add('fishingrod');
    fishingRodHTML.style.top = `${ fishTop - 40 }px`;
    fishingRodHTML.style.left = `${ fishLeft }px`;
    map.appendChild(fishingRodHTML);

    // store HTML
    FishingUI.lifebarContainer = document.getElementById('lifebar-container');
    FishingUI.lifebar = document.getElementById('lifebar');
    FishingUI.fishingrodContainer = document.getElementById('fishingrod-container');
    FishingUI.fishingrod = document.getElementById('fishingrod')
  }

  public static destroy(): void {
    map.removeChild(document.getElementById(`lifebar-container`));
    map.removeChild(document.getElementById(`lifebar`));
    map.removeChild(document.getElementById(`fishingrod-container`));
    map.removeChild(document.getElementById(`fishingrod`));
  }

  public static updateLife(life: number, maxLife: number): void {
    const element = document.getElementById(`lifebar`);
    
    if (life < 20 / 100 * maxLife) {
      element.style.backgroundColor = 'red';
    }
    else if (life < 66 / 100 * maxLife) {
      element.style.backgroundColor = 'yellow';
    }
    else {
      element.style.backgroundColor = 'green';
    }

    element.style.width = `${ 128 * life / maxLife }px`;
  }

  public static updatFishingRod(resistance: number, maxResistance: number): void {
    const element = document.getElementById(`fishingrod`);
    element.style.width = `${ 128 * resistance / maxResistance }px`;
  }

  public static startFrenzy(fishSprite: HTMLElement) {
    fishSprite.style.backgroundColor = 'red';
  }

  public static stopFrenzy(fishSprite: HTMLElement) {
    fishSprite.style.backgroundColor = 'blue';
  }

}
