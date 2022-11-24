import { FishingService } from '.';
import { FishSpawnerEntity, PlayerEntity, PlayerStates } from '../entities';
import { FishingToolItem } from '../items';
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class FishSpawnerService implements InputSignalListener {

    private static instance: FishSpawnerService;
  
    private spawners: FishSpawnerEntity[] = [];

    //#region Singleton
    private constructor() { }

    public static get(): FishSpawnerService {
        if (!FishSpawnerService.instance) {
            FishSpawnerService.instance = new FishSpawnerService();
        }

        return FishSpawnerService.instance;
    }
    //#endregion

    public register(spawner: FishSpawnerEntity): void { this.spawners.push(spawner); }

    public onKeyPressed(keyPressed: string): boolean {
        if (keyPressed === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
            this.spawners.forEach((spawner) => {
                if (this.isTriggeredByPlayer(spawner) && !spawner.isEmpty()) { 
                    this.fishing(spawner);
                    return true;
                }
            });
        }
        return false;
    }

    private isTriggeredByPlayer(spawner: FishSpawnerEntity): boolean {
        if (spawner.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
            PlayerEntity.get().getSprite().lookDown();
            return true;
        }
        else if (spawner.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
            PlayerEntity.get().getSprite().lookLeft();
            return true;
        }
        else if (spawner.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
            PlayerEntity.get().getSprite().lookUp();
            return true;
        }
        else if (spawner.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
            PlayerEntity.get().getSprite().lookRight();
            return true;
        }
    
        return false;
    }

    private fishing(spawner: FishSpawnerEntity): void {
        FishingService.get().start(spawner, PlayerEntity.get().getToolEquiped() as FishingToolItem);
    }
}