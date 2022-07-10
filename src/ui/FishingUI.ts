import { mapHTML } from "..";

export class FishingUI {

  public static createHTML(fishTop: number, fishLeft: number): void {
    const lifeContainer = document.createElement('div');
    lifeContainer.id = `life-container`;
    lifeContainer.classList.add('life-container')
    lifeContainer.style.top = `${fishTop - 30}px`;
    lifeContainer.style.left = `${fishLeft}px`;
    mapHTML.appendChild(lifeContainer);

    const life = document.createElement('div');
    life.id = `life`;
    life.classList.add('life');
    life.style.top = `${fishTop - 30}px`;
    life.style.left = `${fishLeft}px`;
    mapHTML.appendChild(life);
  }

  public static updateLife(life: number, MAX_LIFE: number): void {
    const element = document.getElementById(`life`);
    
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

  public static removeHTML(): void {
    mapHTML.removeChild(document.getElementById(`life-container`))
    mapHTML.removeChild(document.getElementById(`life`))
  }

}