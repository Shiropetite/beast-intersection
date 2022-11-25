import { CameraUI } from ".";

export class TimeUI {

  private static instance: TimeUI;

  private time: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static get(): TimeUI {
    if (!TimeUI.instance) {
      TimeUI.instance = new TimeUI();
    }

    return TimeUI.instance;
  }
  //#endregion

  //#region Methods
  public create(): void {
    // create time HTML
    const timeHTML = document.createElement("div");
    timeHTML.id = "time"
    timeHTML.classList.add('time');
    CameraUI.get().add(timeHTML);

    // store HTML
    this.time = document.getElementById('time');
  }

  public show(): void { this.time.style.display = 'block'; }

  public hide(): void { this.time.style.display = 'none'; }

  public resume(): void {
    if (this.time.classList.contains('pause')) {
      this.time.classList.remove('pause');
    }
  }

  public pause(): void { this.time.classList.add('pause'); }

  public set(time: string): void { this.time.innerText = time; }
  //#endregion
}