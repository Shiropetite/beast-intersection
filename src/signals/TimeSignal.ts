import { SignalSender } from "./SignalSender";

interface TimeConfig {
  hours: number,
  minutes: number
}

export class TimeSignalSender extends SignalSender<TimeSignalListener, TimeConfig> {

  private static instance: TimeSignalSender;

  //#region Singleton
  private constructor() { super(); }

  public static getInstance(): TimeSignalSender {
    if (!TimeSignalSender.instance) {
      TimeSignalSender.instance = new TimeSignalSender();
    }

    return TimeSignalSender.instance;
  }
  //#endregion

  public raise({ hours, minutes }: TimeConfig): void {
    super.getListerners().forEach((listener) => { listener.onTick(hours, minutes); })
  }

}

export interface TimeSignalListener {
  onTick(hour: number, minute: number): void;
}