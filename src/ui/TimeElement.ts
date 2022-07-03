import { cameraHTML } from "..";
import { TimeManager } from './../management/TimeManager';

export class TimeElement {
  private static timeHTML: HTMLElement;

  //#region Methods
  public static createHTMLElement(): void {
    const timeElement = document.createElement("div");
    timeElement.id = "time"
    timeElement.classList.add('time');
    cameraHTML.appendChild(timeElement);

    TimeElement.timeHTML = document.getElementById('time');
    TimeElement.update();
  }

  public static update(): void {
    TimeElement.timeHTML.innerText = TimeManager.getCurrentTime();
  }
  //#endregion
}