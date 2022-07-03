import { triggerEntities } from "..";
import { TimeElement } from './../ui/TimeElement';

export class SignalManager {

  //#region Methods
  public static raiseSignalTime(): void {
    // notify entities affected by time
    for (const entity of triggerEntities) {
      entity.onSignalRaisedTime();
    }

    // update displayed time
    TimeElement.update();
  }
  //#endregion

}