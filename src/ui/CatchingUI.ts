// import { MapUI } from '.';

// export class CatchingUI {
  
//   private static instance: CatchingUI;
//   private static directionContainer: HTMLElement;
//   private static lifeContainer: HTMLElement[];

//   //#region Singleton
//   private constructor() {}

//   public static get(): CatchingUI {
//     if (!CatchingUI.instance) {
//       CatchingUI.instance = new CatchingUI();
//     }

//     return CatchingUI.instance;
//   }
//   //#endregion
  
//   public create(bugTop: number, bugLeft: number): void {
//     const directionContainer = document.createElement('div');
//     directionContainer.id = `catch-container`;
//     directionContainer.classList.add('catch-container');
//     directionContainer.style.top = `${ bugTop - 80 }px`;
//     directionContainer.style.left = `${ bugLeft }px`;
//     MapUI.get().add(directionContainer);

//     const life0HTML = document.createElement('div');
//     life0HTML.id = 'catch-life-0';
//     life0HTML.classList.add('catch-life-0');
//     life0HTML.style.top = `${ bugTop - 180 }px`;
//     life0HTML.style.left = `${ bugLeft }px`;
    
//     const life1HTML = document.createElement('div');
//     life1HTML.id = 'catch-life-1';
//     life1HTML.classList.add('catch-life-1');
//     life1HTML.style.top = `${ bugTop - 180 }px`;
//     life1HTML.style.left = `${ bugLeft }px`;

//     const life2HTML = document.createElement('div');
//     life2HTML.id = 'catch-life-2';
//     life2HTML.classList.add('catch-life-2');
//     life2HTML.style.top = `${ bugTop - 180 }px`;
//     life2HTML.style.left = `${ bugLeft }px`;

//     const lifeContainerHTML = document.createElement('div');
//     lifeContainerHTML.classList.add('catch-life-container');

//     MapUI.get().add(lifeContainerHTML);

//     CatchingUI.directionContainer = document.getElementById('catch-container');
//     const lifeContainerDiv = document.getElementById('catch-life-container');
    
//     lifeContainerDiv.appendChild(life0HTML);
//     lifeContainerDiv.appendChild(life1HTML);
//     lifeContainerDiv.appendChild(life2HTML);

//     CatchingUI.lifeContainer.push(document.getElementById('catch-life-0'));
//     CatchingUI.lifeContainer.push(document.getElementById('catch-life-1'));
//     CatchingUI.lifeContainer.push(document.getElementById('catch-life-2'));
//   }

//   public updateDirection(newDirection: string): void {
//     this.directionContainer.innerHTML = newDirection;
//   }

//   public resetLives(): void  {
//     CatchingUI.lifeContainer.forEach((life) => {
//       life.classList.remove('dead');
//     })
//   }

//   public updateLives(nbFail: number): void {
//     CatchingUI.lifeContainer[nbFail].classList.add('dead');
//   }

//   public destroy(): void {
//     MapUI.get().remove(document.getElementById('catch-container'))
//   }
// }