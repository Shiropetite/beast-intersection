import { TalkingService, InventoryService } from ".";
import { GatherableEntity, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class GatherableService implements InputSignalListener {
  
  private static instance: GatherableService;
  private keyPressed: boolean = false;
  private gatherables: GatherableEntity[] = [];

  private constructor() {}

  public static get(): GatherableService {
    if (!GatherableService.instance) { GatherableService.instance = new GatherableService(); }
    return GatherableService.instance;
  }

  public register(gatherable: GatherableEntity): void { this.gatherables.push(gatherable); }

  public onKeyPressed(key: string): boolean {
    if (this.keyPressed === true) return false; 
    this.keyPressed = true;
    let signalReceived = false;
    if (key === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.gatherables.forEach((gatherable) => {
        if (this.isTriggeredByPlayer(gatherable)) { 
          this.gather(gatherable);
          signalReceived = true;
        }
      });
    }
    setTimeout(() => { this.keyPressed = false }, 500);
    return signalReceived;
  }

  /**
   * 
   * @param gatherable 
   * @returns 
   */
  private isTriggeredByPlayer(gatherable: GatherableEntity): boolean {
    // player is above gatherable
    if (gatherable.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookDown();
      return true;
    }
    // player is right of gatherable
    else if (gatherable.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookLeft();
      return true;
    }
    // player is below gatherable
    else if (gatherable.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookUp();
      return true;
    }
    // player is left of gatherable
    else if (gatherable.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookRight();
      return true;
    }
    // player is not around gatherable
    return false;
  }

  /**
   * 
   * @param gatherable 
   */
  private gather(gatherable: GatherableEntity): void {
    // roll item drop from gatherable
    let item = gatherable.getItems()[Math.floor(Math.random()*gatherable.getItems().length)]
    // add item to player inventory
    InventoryService.get().add(item);
    // displays gather text
    TalkingService.get().start([{ 
      text: "Vous avez rammassé 1 " + item.getName() + " !",
    }]);
  }
}