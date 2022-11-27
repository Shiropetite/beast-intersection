import { SignalSender } from ".";

interface InputConfig {
  key: string
}

export class InputSignalSender extends SignalSender<InputSignalListener, InputConfig> {
  private static instance: InputSignalSender;

  //#region Singleton
  private constructor() { 
    super(); 
  }

  public static get(): InputSignalSender {
    if (!InputSignalSender.instance) {
      InputSignalSender.instance = new InputSignalSender();
    }

    return InputSignalSender.instance;
  }
  //#endregion

  public raise({ key }: InputConfig): void {
    let signalReceived = false;
    InputSignalSender.get().getListerners().forEach((listener) => { 
      if (!signalReceived) { signalReceived = listener.onKeyPressed(key); } 
    });
  }

}

export interface InputSignalListener {
  onKeyPressed(key: string): boolean;
}