import { MapUI } from '.';
import { MapSprite } from '../map/';

export class CatchingUI {
  
  private static instance: CatchingUI;

  private directionContainer: HTMLElement | null = null;
  private lifeContainer: HTMLElement[] = [];

  //#region Singleton
  private constructor() {}

  public static get(): CatchingUI {
    if (!CatchingUI.instance) {
      CatchingUI.instance = new CatchingUI();
    }

    return CatchingUI.instance;
  }
  //#endregion
  
  public create(bugSprite: MapSprite): void {
    const directionContainer = document.createElement('div');
    directionContainer.id = `catch-container`;
    directionContainer.classList.add('catch-container');
    directionContainer.style.top = `${ bugSprite.getTop() - 80 }px`;
    directionContainer.style.left = `${ bugSprite.getLeft() }px`;
    MapUI.get().add(directionContainer);

    const life0HTML = document.createElement('div');
    life0HTML.id = 'catch-life-0';
    life0HTML.classList.add('catch-life-0');
    life0HTML.style.top = `${ bugSprite.getTop() - 180 }px`;
    life0HTML.style.left = `${ bugSprite.getLeft() }px`;
    
    const life1HTML = document.createElement('div');
    life1HTML.id = 'catch-life-1';
    life1HTML.classList.add('catch-life-1');
    life1HTML.style.top = `${ bugSprite.getTop() - 180 }px`;
    life1HTML.style.left = `${ bugSprite.getLeft() }px`;

    const life2HTML = document.createElement('div');
    life2HTML.id = 'catch-life-2';
    life2HTML.classList.add('catch-life-2');
    life2HTML.style.top = `${ bugSprite.getTop() - 180 }px`;
    life2HTML.style.left = `${ bugSprite.getLeft() }px`;

    const lifeContainerHTML = document.createElement('div');
    lifeContainerHTML.id = 'catch-life-container';
    lifeContainerHTML.classList.add('catch-life-container');

    MapUI.get().add(lifeContainerHTML);

    this.directionContainer = document.getElementById('catch-container');

    const lifeContainerDiv = document.getElementById('catch-life-container');
    lifeContainerDiv.appendChild(life0HTML);
    lifeContainerDiv.appendChild(life1HTML);
    lifeContainerDiv.appendChild(life2HTML);

    this.lifeContainer.push(document.getElementById('catch-life-0'));
    this.lifeContainer.push(document.getElementById('catch-life-1'));
    this.lifeContainer.push(document.getElementById('catch-life-2'));
  }

  public destroy(): void { MapUI.get().remove(document.getElementById('catch-container')); }

  public updateDirection(newDirection: string): void { this.directionContainer.innerHTML = newDirection; }

  public resetLives(): void  {
    this.lifeContainer.forEach((life) => {
      life.classList.remove('dead');
    });
  }

  public updateLives(nbFail: number): void { this.lifeContainer[nbFail].classList.add('dead'); }

}