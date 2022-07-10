import { map } from "..";

export class FishingUI {
  private static lifebarContainer: HTMLElement;
  private static lifebar: HTMLElement;

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

    // store HTML
    FishingUI.lifebarContainer = document.getElementById('lifebar-container');
    FishingUI.lifebar = document.getElementById('lifebar');
  }

  public static show(): void {
    // not yet implemented
  }

  public static hide(): void {
    map.removeChild(document.getElementById(`lifebar-container`));
    map.removeChild(document.getElementById(`lifebar`));
  }

  public static updateLife(life: number, MAX_LIFE: number): void {
    const element = document.getElementById(`lifebar`);
    
    if (life < 66 / 100 * MAX_LIFE) {
      element.style.backgroundColor = 'yellow';
    }
    else if (life < 20 / 100 * MAX_LIFE) {
      element.style.backgroundColor = 'red';
    }
    else {
      element.style.backgroundColor = 'green';
    }

    element.style.width = `${ 128 * life / MAX_LIFE }px`;
  }

}
