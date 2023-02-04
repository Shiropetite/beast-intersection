import { SignalSender } from ".";

interface KeyupConfig {
  key: string
}

export class KeyupSignalSender extends SignalSender<KeyupSignalListener, KeyupConfig> {
  private static instance: KeyupSignalSender;

  //#region Singleton
  public static get(): KeyupSignalSender {
    if (!KeyupSignalSender.instance) {
      KeyupSignalSender.instance = new KeyupSignalSender();
    }

    return KeyupSignalSender.instance;
  }
  //#endregion

  public raise({ key }: KeyupConfig): void {
    let signalReceived = false;
    KeyupSignalSender.get().getListeners().forEach(listener => { 
      if (!signalReceived) { signalReceived = listener.onKeyup(key); } 
    });
  }

}

export interface KeyupSignalListener {
  onKeyup(key: string): boolean;
}