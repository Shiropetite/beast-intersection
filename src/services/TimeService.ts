import { TimeUI } from '../ui';
import { TimeSignalSender } from './../signals/TimeSignal';

export class TimeService {
  private static instance: TimeService;

  private interval: NodeJS.Timer;
  private hours: number;
  private minutes: number;
  private timeTicking: boolean;

  //#region Singleton
  private constructor() { }

  public static getInstance(): TimeService {
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

    TimeUI.create();

    this.start();
  }

  public start(): void {
    TimeUI.resume();
    this.timeTicking = true;

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
    this.timeTicking = false;
    TimeUI.pause();
  }

  //TODO: time signal
  public tick(): void {
    // notify entities affected by time
    TimeSignalSender.getInstance().raise({ hours: this.hours, minutes: this.minutes });
    
    // update displayed time
    TimeUI.setTime();
  }

  public isTimeTicking(): boolean {
    return this.timeTicking; 
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