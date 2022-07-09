import { SignalController } from './SignalController';

export class TimeController {
  private static interval: NodeJS.Timer;
  private static hour: number;
  private static minute: number;

  //#region Methods
  public static init(hour: number, minute: number): void {
    TimeController.hour = hour;
    TimeController.minute = minute;

    TimeController.start();
  }

  public static start(): void {
    TimeController.interval = setInterval(() => {
      if (TimeController.minute === 50) {
        if (TimeController.hour === 23) TimeController.hour = 0;
        else TimeController.hour++;
        
        TimeController.minute = 0;
      }
      else TimeController.minute += 10;

      // send a signal
      SignalController.raiseSignalTime();
    }, 5000); // repeat
  }

  public static stop(): void {
    clearInterval(TimeController.interval);
    TimeController.interval = null;
  }

  public static isActive(): boolean { return TimeController.interval !== null; }

  public static getCurrentTime(): string {
    const hour = `${TimeController.hour < 10 ? '0' : ''}${TimeController.hour}`;
    const minute = `${TimeController.minute < 10 ? '0' : ''}${TimeController.minute}`;
    return `${hour}:${minute}`;
  }

  public static getPreviousTime(currentTime: string): string {
    let hour = Number.parseInt(currentTime.split(":")[0]);
    let minute = Number.parseInt(currentTime.split(":")[1]);
    
    if (minute === 0) {
      if (hour === 0) {
        hour = 23;
      }
      else {
        hour--;
      }
      minute = 50;
    }
    else {
      minute -= 10;
    }
    
    return `${ hour < 10 ? '0' : '' }${ hour }:${ minute < 10 ? '0' : '' }${ minute }`;
  }
  //#endregion

}
