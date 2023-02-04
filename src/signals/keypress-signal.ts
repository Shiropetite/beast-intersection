import { SignalSender } from ".";

interface KeypressConfig {
  key: string
}

export class KeypressSignalSender extends SignalSender<KeypressSignalListener, KeypressConfig> {
  private static instance: KeypressSignalSender;

  //#region Singleton
  public static get(): KeypressSignalSender {
    if (!KeypressSignalSender.instance) {
      KeypressSignalSender.instance = new KeypressSignalSender();
    }

    return KeypressSignalSender.instance;
  }
  //#endregion

  public raise({ key }: KeypressConfig): void {
    let signalReceived = false;
    KeypressSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyPressed(key); } 
    });
  }

}

export interface KeypressSignalListener {
  onKeyPressed(key: string): boolean;
}