import { SignalSender } from ".";
import { KeypressSignalListener, KeypressSignalConfig } from "../types";

export class KeypressSignalSender extends SignalSender<KeypressSignalListener, KeypressSignalConfig> {

  //#region Singleton
  private static instance: KeypressSignalSender;

  private constructor() {
    super();
  }

  public static get(): KeypressSignalSender {
    if (!this.instance) {
      this.instance = new KeypressSignalSender();
    }
    return this.instance;
  }
  //#endregion

  public raise({ key }: KeypressSignalConfig): void {
    let signalReceived = false;
    KeypressSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyPressed(key); } 
    });
  }
}
