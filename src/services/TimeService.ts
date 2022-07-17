import { triggers } from '..';
import { TimeUI } from '../ui/TimeUI';

export class TimeService {
  private static interval: NodeJS.Timer;
  private static hours: number;
  private static minutes: number;
  private static timeTicking: boolean;

  //#region Methods
  public static init(hours: number, minutes: number): void {
    TimeService.hours = hours;
    TimeService.minutes = minutes;

    TimeUI.create();

    TimeService.start();
  }

  public static start(): void {
    TimeUI.resume();
    this.timeTicking = true;

    TimeService.interval = setInterval(() => {
      if (TimeService.minutes === 50) {
        if (TimeService.hours === 23) {
          TimeService.hours = 0;
        }
        else {
          TimeService.hours++;
        }
        
        TimeService.minutes = 0;
      }
      else {
        TimeService.minutes += 10;
      }

      TimeService.tick();
    }, 5000); // time tick every 5s
  }

  public static stop(): void {
    clearInterval(TimeService.interval);

    this.timeTicking = false;
    TimeUI.pause();
  }

  public static tick(): void {
    // notify entities affected by time
    for (const entity of triggers) {
      entity.onTimeTick();
    }

    // update displayed time
    TimeUI.setTime();
  }

  public static isTimeTicking(): boolean {
    return this.timeTicking; 
  }

  public static getCurrentTime(): string {
    const hours = `${ TimeService.hours < 10 ? '0' : ''}${ TimeService.hours }`;
    const minutes = `${ TimeService.minutes < 10 ? '0' : ''}${ TimeService.minutes }`;
    return `${ hours }:${ minutes }`;
  }

  public static getPreviousTime(currentTime: string): string {
    let hours = Number.parseInt(currentTime.split(":")[0]);
    let minutes = Number.parseInt(currentTime.split(":")[1]);
    
    if (minutes === 0) {
      if (hours === 0) {
        hours = 23;
      }
      else {
        hours--;
      }
      minutes = 50;
    }
    else {
      minutes -= 10;
    }
    
    return `${ hours < 10 ? '0' : '' }${ hours }:${ minutes < 10 ? '0' : '' }${ minutes }`;
  }
  //#endregion

}
