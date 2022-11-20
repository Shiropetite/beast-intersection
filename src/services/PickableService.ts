import { TalkingService } from ".";
import { PickableEntity, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class PickableService implements InputSignalListener {
  private static instance: PickableService;
  
  private pickables: PickableEntity[] = [];

  private constructor() {}

  public static getInstance(): PickableService {
    if (!PickableService.instance) {
      PickableService.instance = new PickableService();
    }

    return PickableService.instance;
  }

  public addPickable(pickable: PickableEntity): void { this.pickables.push(pickable); }

  public onKeyPressed(keyPressed: string): boolean {
    let signalReceived = false
    if (keyPressed === ActionKeys.ACT && PlayerEntity.getInstance().getState() === PlayerStates.IDLE) {
      this.pickables.forEach((pickable) => {
        if (this.isTriggeredByPlayer(pickable)) { 
          this.pickUp(pickable);
          signalReceived = true;
        }
      });
    }
    
    return signalReceived;
  }

  private isTriggeredByPlayer(pickable: PickableEntity): boolean {
    if (pickable.getCurrentCell().getContents().find(c => c === PlayerEntity.getInstance())) { return true; }
    return false;
  }

  private pickUp(pickable: PickableEntity): void {
    //TODO: add item to inventory
    //TODO: remove from map
    //pickable.destroy();
    pickable.getSprite().destroy();

    TalkingService.getInstance().start([{ 
      text: "Vous avez rammassé 1 " + pickable.getItem().getName() + " !",
    }]);
  }
}