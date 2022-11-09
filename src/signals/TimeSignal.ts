import { SignalSender } from "./SignalSender";

interface TimeConfig {
  hours: string,
  minutes: string
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
  onTick(hour: string, minute: string): void;
}