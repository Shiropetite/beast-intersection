import { SignalSender } from "./SignalSender";

export class TimeSignalSender extends SignalSender<TimeSignalListener, string> {

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

  public raise(formattedTime: string): void {
    super.getListerners().forEach((listener) => { listener.onTick(formattedTime); })
  }

}

export interface TimeSignalListener {
  onTick(formattedTime: string): void;
}