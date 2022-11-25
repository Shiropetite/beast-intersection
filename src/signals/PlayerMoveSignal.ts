import { SignalSender } from "./SignalSender";

export class PlayerMoveSignalSender extends SignalSender<PlayerMoveSignalListener, null> {

  private static instance: PlayerMoveSignalSender;

  //#region Singleton
  private constructor() { super(); }

  public static get(): PlayerMoveSignalSender {
    if (!PlayerMoveSignalSender.instance) {
      PlayerMoveSignalSender.instance = new PlayerMoveSignalSender();
    }

    return PlayerMoveSignalSender.instance;
  }
  //#endregion

  public raise(): void {
    super.getListerners().forEach((listener) => { listener.onMove(); })
  }

}

export interface PlayerMoveSignalListener {
  onMove(): void
}