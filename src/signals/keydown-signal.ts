import { SignalSender } from ".";

export class KeydownSignalSender extends SignalSender<KeydownSignalListener, Event> {
  private static instance: KeydownSignalSender;

  //#region Singleton
  public static get(): KeydownSignalSender {
    if (!KeydownSignalSender.instance) {
      KeydownSignalSender.instance = new KeydownSignalSender();
    }

    return KeydownSignalSender.instance;
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

export interface KeydownSignalListener {
  onKeydown(key: string): boolean;
}