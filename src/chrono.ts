import { cameraHTML, routine } from ".";

export class Chrono {
  private interval: NodeJS.Timer;
  private hour: number;
  private minute: number;

  //#region Constructor
  public constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;

    this.createHTML();
    this.updateHTML();
    this.start();
  }
  //#endregion

  //#region Methods
  createHTML() {
    const element = document.createElement('div');
    element.id = "chrono";
    element.classList.add('chrono');
    cameraHTML.appendChild(element);
  }

  updateHTML() { 
    const element = document.getElementById('chrono');
    element.innerText = this.toString();
  }

  start() {
    this.interval = setInterval(() => {
      if(this.minute === 50) {
        if(this.hour === 23) {
          this.hour = 0;
        }
        else {
          this.hour++;
        }
        this.minute = 0;
      }
      else {
        this.minute += 10;
      }

      this.updateHTML();

      routine(this.toString());
    }, 2000);
  }

  stop() { 
    clearInterval(this.interval); 
    this.interval = null;
  }

  isRunning() { return this.interval !== null }

  toString() {
    const hour = `${this.hour < 10 ? '0' : ''}${this.hour}`;
    const minute = `${this.minute < 10 ? '0' : ''}${this.minute}`;
    return `${hour}:${minute}`;
  }
  //#endregion
}