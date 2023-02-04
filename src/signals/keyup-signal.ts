import { SignalSender } from ".";
import { KeyupSignalListener, KeyupSignalConfig } from "../types";

export class KeyupSignalSender extends SignalSender<KeyupSignalListener, KeyupSignalConfig> {
  private static instance: KeyupSignalSender;

  //#region Singleton
  public static get(): KeyupSignalSender {
    if (!KeyupSignalSender.instance) {
      KeyupSignalSender.instance = new KeyupSignalSender();
    }

    return KeyupSignalSender.instance;
  }
  //#endregion

  public raise({ key }: KeyupSignalConfig): void {
    let signalReceived = false;
    KeyupSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyup(key); } 
    });
  }
}
