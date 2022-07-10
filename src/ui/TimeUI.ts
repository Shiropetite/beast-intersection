import { camera } from "..";
import { TimeService } from "../services/TimeService";

export class TimeUI {
  private static time: HTMLElement;

  //#region Methods
  public static create(): void {
    // create time HTML
    const timeHTML = document.createElement("div");
    timeHTML.id = "time"
    timeHTML.classList.add('time');
    camera.appendChild(timeHTML);

    // store HTML
    TimeUI.time = document.getElementById('time');

    TimeUI.setTime();
  }

  public static show(): void {
    TimeUI.time.style.display = 'block';
  }

  public static hide(): void {
    TimeUI.time.style.display = 'none';
  }

  public static isVisible(): boolean {
    return TimeUI.time.style.display === 'block';
  }

  public static setTime(): void {
    TimeUI.time.innerText = TimeService.getCurrentTime();
  }
  //#endregion
}