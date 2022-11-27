import { TimeUI } from '../ui';
import { TimeSignalSender } from './../signals/TimeSignal';

export class TimeService {
  
  private static instance: TimeService;
  private hours: number;
  private minutes: number;
  private routine: NodeJS.Timeout;

  private constructor() { }

  public static get(): TimeService {
    if (!TimeService.instance) { TimeService.instance = new TimeService(); }
    return TimeService.instance;
  }

  public init(hours: number, minutes: number): void {
    this.hours = hours;
    this.minutes = minutes;
    TimeUI.get().create();
    TimeUI.get().setTime(this.getCurrentTime());
  }

  public start(): void {
    TimeUI.get().resume();
    this.tick();
  }

  public stop(): void {
    clearTimeout(this.routine);
    TimeUI.get().pause();
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

  /**
   * Actualize the time, signals time-dependent entities
   * and displays the current time
   */
  private tick(): void {
    this.routine = setTimeout(() => {
      // re-arrange hours and minutes on time change
      if (this.minutes === 50) {
        if (this.hours === 23) { this.hours = 0; }
        else { this.hours++; }
        this.minutes = 0;
      }
      else { this.minutes += 10; }
      // signals to entities that time has changed
      TimeSignalSender.get().raise(this.getCurrentTime());
      // displays time
      TimeUI.get().setTime(this.getCurrentTime());
      // time changes
      this.tick();
    }, 5000);
  }

}