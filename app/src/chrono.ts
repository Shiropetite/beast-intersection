import { routine } from ".";

export class Chrono {
  private readonly htmlElement: HTMLElement;
  private interval: NodeJS.Timer;
  private hour: number;
  private minute: number;

  public constructor() {
    this.hour = 5;
    this.minute = 50;

    this.create();
    this.htmlElement = document.getElementById("chrono");
    
    this.update();
    this.start();
  }

  create() {
    const element = document.createElement('div');
    element.id = "chrono";
    element.classList.add('chrono');
    document.body.appendChild(element);
  }

  update() { 
    this.htmlElement.innerText = this.toString();
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

      this.update();
      routine(this.toString());
      
    }, 2000)
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
}