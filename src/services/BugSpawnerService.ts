import { CatchingService } from '.';
import { BugSpawnerEntity, PlayerEntity, PlayerStates } from '../entities';
import { CatchingToolItem } from '../items';
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class BugSpawnerService implements InputSignalListener {

  private static instance: BugSpawnerService;
  private spawners: BugSpawnerEntity[] = [];

  private constructor() { }

  public static get(): BugSpawnerService {
    if (!BugSpawnerService.instance) { BugSpawnerService.instance = new BugSpawnerService(); }
    return BugSpawnerService.instance;
  }

  public register(spawner: BugSpawnerEntity): void { this.spawners.push(spawner); }

  public onKeyPressed(key: string): boolean {
    let signalReceived = false;
    if (key === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.spawners.forEach((spawner) => {
        if (this.isTriggeredByPlayer(spawner) && !spawner.isEmpty()) { 
          this.catching(spawner);
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
  private isTriggeredByPlayer(spawner: BugSpawnerEntity): boolean {
    // player is on spawner
    if (spawner.getCurrentCell().getContents().find(c => c === PlayerEntity.get())) { return true; }
    return false;
  }

  /**
   * 
   * @param spawner 
   */
  private catching(spawner: BugSpawnerEntity): void {
    CatchingService.get().start(spawner/*, PlayerEntity.get().getToolEquiped() as CatchingToolItem*/);
  }
}