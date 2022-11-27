import { TalkingService, InventoryService } from ".";
import { PickableEntity, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class PickableService implements InputSignalListener {
  
  private static instance: PickableService;
  private pickables: PickableEntity[] = [];

  private constructor() {}

  public static get(): PickableService {
    if (!PickableService.instance) { PickableService.instance = new PickableService(); }
    return PickableService.instance;
  }

  public register(pickable: PickableEntity): void { this.pickables.push(pickable); }

  public onKeyPressed(key: string): boolean {
    let signalReceived = false
    if (key === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.pickables.forEach((pickable) => {
        if (this.isTriggeredByPlayer(pickable)) { 
          this.pick(pickable);
          signalReceived = true;
        }
      });
    }
    return signalReceived;
  }

  /**
   * 
   * @param pickable 
   * @returns 
   */
  private isTriggeredByPlayer(pickable: PickableEntity): boolean {
    // player is on pickable
    if (pickable.getCurrentCell().getContents().find(c => c === PlayerEntity.get())) { return true; }
    return false;
  }

  /**
   * 
   * @param pickable 
   */
  private pick(pickable: PickableEntity): void {
    // hide sprite from map
    pickable.getSprite().destroy();
    // add item to player inventory
    InventoryService.get().add(pickable.getItem());
    // remove entity from the pool
    this.pickables.filter(p => p !== pickable);
    //TODO: remove from map cell
    // display pickup text
    TalkingService.get().start([{ 
      text: "Vous avez rammassé 1 " + pickable.getItem().getName() + " !",
    }]);
  }
}