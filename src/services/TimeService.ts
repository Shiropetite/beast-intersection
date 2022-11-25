import { TimeUI } from '../ui';
import { TimeSignalSender } from './../signals/TimeSignal';

export class TimeService {
  
  private static instance: TimeService;

  private hours: number;
  private minutes: number;
  private interval: NodeJS.Timer;

  //#region Singleton
  private constructor() { }

  public static get(): TimeService {
    if (!TimeService.instance) {
      TimeService.instance = new TimeService();
    }

    return TimeService.instance;
  }
  //#endregion

  //#region Methods
  public init(hours: number, minutes: number): void {
    this.hours = hours;
    this.minutes = minutes;

    TimeUI.get().create();
    TimeUI.get().set(this.getCurrentTime());
  }

  public start(): void {
    TimeUI.get().resume();

    this.interval = setInterval(() => {
      if (this.minutes === 50) {
        if (this.hours === 23) { this.hours = 0; }
        else { this.hours++; }

        this.minutes = 0;
      }
      else { this.minutes += 10; }

      this.tick();
    }, 5000); // time tick every 5s
  }

  public stop(): void {
    clearInterval(this.interval);
    TimeUI.get().pause();
  }

  public tick(): void {
    TimeSignalSender.get().raise(this.getCurrentTime());
    TimeUI.get().set(this.getCurrentTime());
  }

  public getCurrentTime(): string {
    const hours = `${ this.hours < 10 ? '0' : ''}${ this.hours }`;
    const minutes = `${ this.minutes < 10 ? '0' : ''}${ this.minutes }`;
    return `${ hours }:${ minutes }`;
  }

  public getPreviousTime(currentTime: string): string {
    let hours = Number.parseInt(currentTime.split(":")[0]);
    let minutes = Number.parseInt(currentTime.split(":")[1]);
    
    if (minutes === 0) {
      if (hours === 0) { hours = 23; }
      else { hours--; }

      minutes = 50;
    }
    else { minutes -= 10; }
    
    return `${ hours < 10 ? '0' : '' }${ hours }:${ minutes < 10 ? '0' : '' }${ minutes }`;
  }
  //#endregion

}