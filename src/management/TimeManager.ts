import { SignalManager } from './SignalManager';

export class TimeManager {
  private static interval: NodeJS.Timer;
  private static hour: number;
  private static minute: number;

  //#region Methods
  public static init(hour: number, minute: number): void {
    TimeManager.hour = hour;
    TimeManager.minute = minute;

    TimeManager.start();
  }

  public static start(): void {
    TimeManager.interval = setInterval(() => {
      if (TimeManager.minute === 50) {
        if (TimeManager.hour === 23) TimeManager.hour = 0;
        else TimeManager.hour++;
        
        TimeManager.minute = 0;
      }
      else TimeManager.minute += 10;

      // send a signal
      SignalManager.raiseSignalTime();
    }, 5000); // repeat
  }

  public static stop(): void {
    clearInterval(TimeManager.interval);
    TimeManager.interval = null;
  }

  public static isActive(): boolean { return TimeManager.interval !== null; }

  public static getCurrentTime(): string {
    const hour = `${TimeManager.hour < 10 ? '0' : ''}${TimeManager.hour}`;
    const minute = `${TimeManager.minute < 10 ? '0' : ''}${TimeManager.minute}`;
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
    
    return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
  }

  //#endregion
  
}