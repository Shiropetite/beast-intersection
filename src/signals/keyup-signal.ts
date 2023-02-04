import { SignalSender } from ".";
import { KeyupSignalListener, KeyupSignalConfig } from "../types";

export class KeyupSignalSender extends SignalSender<KeyupSignalListener, KeyupSignalConfig> {

  //#region Singleton
  private static instance: KeyupSignalSender;

  private constructor() {
    super();
  }

  public static get(): KeyupSignalSender {
    if (!this.instance) {
      this.instance = new KeyupSignalSender();
    }
    return this.instance;
  }
  //#endregion

  public raise({ key }: KeyupSignalConfig): void {
    let signalReceived = false;
    KeyupSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyup(key); } 
    });
  }
}
