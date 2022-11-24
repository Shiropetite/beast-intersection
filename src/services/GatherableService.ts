import { TalkingService, InventoryService } from ".";
import { GatherableEntity, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class GatherableService implements InputSignalListener {
  
  private static instance: GatherableService;
  
  private gatherables: GatherableEntity[] = [];

  private constructor() {}

  public static get(): GatherableService {
    if (!GatherableService.instance) {
        GatherableService.instance = new GatherableService();
    }

    return GatherableService.instance;
  }

  public register(gatherable: GatherableEntity): void { this.gatherables.push(gatherable); }

  public onKeyPressed(keyPressed: string): boolean {
    let signalReceived = false
    if (keyPressed === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.gatherables.forEach((gatherable) => {
        if (this.isTriggeredByPlayer(gatherable)) { 
          this.gather(gatherable);
          signalReceived = true;
        }
      });
    }
    return signalReceived;
  }

  private isTriggeredByPlayer(gatherable: GatherableEntity): boolean {
    if (gatherable.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookDown();
      return true;
    }
    else if (gatherable.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookLeft();
      return true;
    }
    else if (gatherable.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookUp();
      return true;
    }
    else if (gatherable.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookRight();
      return true;
    }

    return false;
  }

  private gather(gatherable: GatherableEntity): void {
    let item = gatherable.getItems()[Math.floor(Math.random()*gatherable.getItems().length)]

    InventoryService.get().add(item);

    TalkingService.get().start([{ 
      text: "Vous avez rammassé 1 " + item.getName() + " !",
    }]);
  }
}