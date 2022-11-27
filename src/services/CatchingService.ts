import { TimeService, TalkingService, InventoryService } from '.';
import { BugSpawnerEntity, PlayerEntity, PlayerStates } from '../entities';
import { CatchingToolItem } from '../items';
import { CatchingUI } from '../ui';
import { InputSignalListener } from '../signals';
import { ActionKeys, DirectionKeys } from "../utils";

export class CatchingService implements InputSignalListener {
  
    private static instance: CatchingService;

    private isRunning: boolean;
    private bugSpawner: BugSpawnerEntity;
    private catchingNet: CatchingToolItem;
    private direction: string;
    private directionFails: number;
    private directionInterval: NodeJS.Timer;

    //#region Singleton
    private constructor() { }

    public static get(): CatchingService {
        if (!CatchingService.instance) {
            CatchingService.instance = new CatchingService();
        }

        return CatchingService.instance;
    }
    //#endregion

    // Key listener
    public onKeyPressed(key: string): boolean {
        if (this.isRunning && PlayerEntity.get().getState() === PlayerStates.CATCHING) {
            this.catch(key);
            return true;
        }
        return false;
    }

    public start(bugSpawner: BugSpawnerEntity/*, catchingNet: CatchingToolItem*/): void {
        PlayerEntity.get().setState(PlayerStates.CATCHING);

        this.isRunning = true;
        this.bugSpawner = bugSpawner;
        this.catchingNet = new CatchingToolItem('filet en bois', 50, 1, 0); /* catchingNet; */
        this.directionFails = 0;

        CatchingUI.get().create(this.bugSpawner.getSprite());

        const directionList: any[] = Object.entries(DirectionKeys).map(([_, value]) => value);

        this.direction = directionList[Math.floor(Math.random() * directionList.length)];
        CatchingUI.get().updateDirection(this.direction);

        // switch direction interval
        this.directionInterval = setInterval(() => {
            this.direction = directionList[Math.floor(Math.random() * directionList.length)];
            CatchingUI.get().updateDirection(this.direction);
        }, this.bugSpawner.getBug().getDirectionDuration() /*+ catchingNet.getDirectionDurationBonus()*/);
    }

    private end(): void {
        clearInterval(this.directionInterval);

        CatchingUI.get().destroy();

        this.isRunning = false;

        //FIXME: marche pas si on commence à jouer avec un autre spawner avant que le timeout se termine
        this.bugSpawner.setEmpty();
        this.bugSpawner.getSprite().hide();
        setTimeout(() => {
            this.bugSpawner.setEmpty();
            this.bugSpawner.getSprite().show();
        }, 10000)
    }

    private catch(keyPressed: string): void {
        if (keyPressed === this.direction) {
            this.bugSpawner.getBug().setHealthPoints(this.bugSpawner.getBug().getHealthPoints() - this.catchingNet.getPower());
        }

        // minigame won
        if (this.bugSpawner.getBug().getHealthPoints() <= 0) { 
            this.win();
            this.end(); 
        }

        // minigame lost
        if (this.directionFails >= 3) { 
            this.lose();
            this.end(); 
        }
    }

    private win(): void {
        this.bugSpawner.getBug().setHealthPoints(this.bugSpawner.getBug().getMaxHealthPoints());
        
        InventoryService.get().add(this.bugSpawner.getItem());

        TalkingService.get().start([{ 
          text: "Vous avez attrapé 1 " + this.bugSpawner.getItem().getName() + " !",
          isLock: true,
        }]);
    }

    private lose(): void {
        this.bugSpawner.getBug().setHealthPoints(this.bugSpawner.getBug().getMaxHealthPoints());

        TalkingService.get().start([{ 
            text: "L'insecte s'est enfui...",
            isLock: true,
        }]);
    }
}