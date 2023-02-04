import { SignalSender } from ".";
import { KeypressSignalListener, KeypressSignalConfig } from "../types";

export class KeypressSignalSender extends SignalSender<KeypressSignalListener, KeypressSignalConfig> {
  private static instance: KeypressSignalSender;

  //#region Singleton
  public static get(): KeypressSignalSender {
    if (!KeypressSignalSender.instance) {
      KeypressSignalSender.instance = new KeypressSignalSender();
    }
    return KeypressSignalSender.instance;
  }
  //#endregion

  public raise({ key }: KeypressSignalConfig): void {
    let signalReceived = false;
    KeypressSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyPressed(key); } 
    });
  }
}
