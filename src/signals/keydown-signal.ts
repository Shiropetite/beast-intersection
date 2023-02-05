import { SignalSender } from ".";
import { KeydownSignalListener } from "../types";

export class KeydownSignalSender extends SignalSender<KeydownSignalListener, Event> {

  //#region Singleton
  private static instance: KeydownSignalSender;

  private constructor() {
    super();
  }

  public static get(): KeydownSignalSender {
    if (!this.instance) {
      this.instance = new KeydownSignalSender();
    }
    return this.instance;
  }
  //#endregion

  public raise(event: any): void {
    if (event.repeat) { return; }
    let signalReceived = false;
    KeydownSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeydown(event.key); } 
    });
  }
}
