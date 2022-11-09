import { sleep } from "../utils";
import { SignalSender } from "./SignalSender";

interface InputConfig {
  key: string
}

export class InputSignalSender extends SignalSender<InputSignalListener, InputConfig> {
  private static instance: InputSignalSender;

  private keyIsPressed: boolean;
  private previousKeyPressed: string;
  
  //#region Singleton
  private constructor() { 
    super(); 
    this.keyIsPressed = false;
  }

  public static getInstance(): InputSignalSender {
    if (!InputSignalSender.instance) {
      InputSignalSender.instance = new InputSignalSender();
    }

    return InputSignalSender.instance;
  }
  //#endregion

  public async raise({ key }: InputConfig): Promise<void> {
    // limit spam of same input
    if (this.keyIsPressed && key === this.previousKeyPressed) return;
    this.keyIsPressed = true;
    
    InputSignalSender.getInstance().getListerners().forEach((listener) => { listener.onKeyPressed(key); });

    // input buffer time
    await sleep(150);

    this.previousKeyPressed = key;
    this.keyIsPressed = false;
  }

}

export interface InputSignalListener {
  onKeyPressed(keyPressed: string): void;
}