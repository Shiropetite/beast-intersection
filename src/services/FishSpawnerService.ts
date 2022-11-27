import { FishingService } from '.';
import { FishSpawnerEntity, PlayerEntity, PlayerStates } from '../entities';
import { FishingToolItem } from '../items';
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class FishSpawnerService implements InputSignalListener {

  private static instance: FishSpawnerService;
  private spawners: FishSpawnerEntity[] = [];

  private constructor() { }

  public static get(): FishSpawnerService {
    if (!FishSpawnerService.instance) { FishSpawnerService.instance = new FishSpawnerService(); }
    return FishSpawnerService.instance;
  }

  public register(spawner: FishSpawnerEntity): void { this.spawners.push(spawner); }

  public onKeyPressed(key: string): boolean {
    let signalReceived = false;
    if (key === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.spawners.forEach((spawner) => {
        if (this.isTriggeredByPlayer(spawner) && !spawner.isEmpty()) { 
          this.fishing(spawner);
          signalReceived = true;
        }
      });
    }
    return signalReceived;
  }

  /**
   * 
   * @param spawner 
   * @returns 
   */
  private isTriggeredByPlayer(spawner: FishSpawnerEntity): boolean {
    // player is above spawner
    if (spawner.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookDown();
      return true;
    }
    // player is right of spawner
    else if (spawner.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookLeft();
      return true;
    }
    // player is below spawner
    else if (spawner.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookUp();
      return true;
    }
    // player is left of spawner
    else if (spawner.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
      PlayerEntity.get().getSprite().lookRight();
      return true;
    }
    // player is not around spawner
    return false;
  }

  /**
   * 
   * @param spawner 
   */
  private fishing(spawner: FishSpawnerEntity): void {
    FishingService.get().start(spawner/*, PlayerEntity.get().getToolEquiped() as FishingToolItem*/);
  }
}