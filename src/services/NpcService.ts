import { MapService, TalkingService, TimeService } from ".";
import { NpcEntity, NpcRoutine, NpcStates, PlayerEntity, PlayerStates } from "../entities";
import { SpriteDirections } from "../map";
import { InputSignalListener, TimeSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class NpcService implements TimeSignalListener, InputSignalListener {

  private static instance: NpcService;
  
  private npcs: NpcEntity[] = [];

  private constructor() {}

  public static getInstance(): NpcService {
    if (!NpcService.instance) {
      NpcService.instance = new NpcService();
    }

    return NpcService.instance;
  }

  public addNpc(npc: NpcEntity): void { this.npcs.push(npc); }

  public initCells() {
    this.npcs.forEach((npc) => {
      const time = this.getLastPosition(npc);
      MapService.getInstance().initEntityMapCell(npc,
        npc.getRoutine()[time].position.top,
        npc.getRoutine()[time].position.left,
      );
    });
  }
  
  public onTick(formattedTime: string): void {
    this.npcs.forEach((npc) => { 
      if (Object.keys(npc.getRoutine()).includes(formattedTime) && 
          npc.getRoutine()[formattedTime].position && 
          npc.getState() === NpcStates.IDLE) {
            NpcService.getInstance().move(npc,
              npc.getRoutine()[formattedTime].position.top,
              npc.getRoutine()[formattedTime].position.left
            );
      }
    });
  }

  public onKeyPressed(keyPressed: string): boolean {
    let signalReceived = false
    if (keyPressed === ActionKeys.ACT && PlayerEntity.getInstance().getState() === PlayerStates.IDLE) {
      this.npcs.forEach((npc) => {
        if (this.isTriggeredByPlayer(npc) && npc.getState() === NpcStates.IDLE) { 
          this.talk(npc);
          signalReceived = true;
        }
      });
    }
    
    return signalReceived;
  }

  private isTriggeredByPlayer(npc: NpcEntity): boolean {
    if (npc.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.getInstance())) {
      npc.getSprite().lookUp(); 
      PlayerEntity.getInstance().getSprite().lookDown();
      return true;
    }
    else if (npc.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.getInstance())) {
      npc.getSprite().lookRight(); 
      PlayerEntity.getInstance().getSprite().lookLeft();
      return true;
    }
    else if (npc.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.getInstance())) {
      npc.getSprite().lookDown(); 
      PlayerEntity.getInstance().getSprite().lookUp();
      return true;
    }
    else if (npc.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.getInstance())) {
      npc.getSprite().lookLeft(); 
      PlayerEntity.getInstance().getSprite().lookRight();
      return true;
    }

    return false;
  }

  private getLastPosition(npc: NpcEntity) {
    let time = TimeService.getInstance().getCurrentTime();
    while (npc.getRoutine()[time]?.position === undefined) { time = TimeService.getInstance().getPreviousTime(time); }
    return time;
  }

  private getLastDialog(npc: NpcEntity) {
    let time = TimeService.getInstance().getCurrentTime();
    while (npc.getRoutine()[time]?.dialog === undefined) { time = TimeService.getInstance().getPreviousTime(time); }
    return time;
  }

  private talk(npc: NpcEntity) {
    const time = this.getLastDialog(npc);
    TalkingService.getInstance().start(npc.getRoutine()[time].dialog, npc);
  }

  private move(npc: NpcEntity, targetTop: number, targetLeft: number): void {
    // time interval between each step
    const moveInterval = setInterval(() => {
      // Npc is on target position
      if (npc.getCurrentCell().getCellY() === targetTop && npc.getCurrentCell().getCellX() === targetLeft) {
        npc.setState(NpcStates.IDLE);
        clearInterval(moveInterval);
      }

      if (npc.getState() === NpcStates.IDLE) {
        npc.setState(NpcStates.MOVING);

        // Npc is below target position
        if (npc.getCurrentCell().getCellY() > targetTop) { NpcService.getInstance().moveUp(npc); }
        // Npc is above target position
        else if (npc.getCurrentCell().getCellY() < targetTop) { NpcService.getInstance().moveDown(npc); }
        // Npc is right of target position
        else if (npc.getCurrentCell().getCellX() > targetLeft) { NpcService.getInstance().moveLeft(npc); }
        // Npc is left of target position
        else if (npc.getCurrentCell().getCellX() < targetLeft) { NpcService.getInstance().moveRight(npc); }

        npc.setState(NpcStates.IDLE);
      }
    }, 500) // Move every 0.5s
  }

  private moveUp(npc: NpcEntity): void {
    npc.getSprite().lookUp();
    const newCell = npc.getCurrentCell().moveContentUp(npc);
    
    if (newCell) {
      npc.getSprite().moveUp();
      npc.setCurrentCell(newCell);
    }
  }

  private moveDown(npc: NpcEntity): void {
    npc.getSprite().lookDown();
    const newCell = npc.getCurrentCell().moveContentDown(npc);
    
    if (newCell) {
      npc.getSprite().moveDown();
      npc.setCurrentCell(newCell);
    }
  }

  private moveLeft(npc: NpcEntity): void {
    npc.getSprite().lookLeft();
    const newCell = npc.getCurrentCell().moveContentLeft(npc);
    
    if (newCell) {
      npc.getSprite().moveLeft();
      npc.setCurrentCell(newCell);
    }
  }

  private moveRight(npc: NpcEntity): void {
    npc.getSprite().lookRight();
    const newCell = npc.getCurrentCell().moveContentRight(npc);
    
    if (newCell) {
      npc.getSprite().moveRight();
      npc.setCurrentCell(newCell);
    }
  }

  // public act(): void {
  //   let time = TimeService.getInstance().getCurrentTime();
    
  //   // routine do not contain a dialog for current time
  //   while (this.routine[time]?.dialog === undefined) {
  //     time = TimeService.getInstance().getPreviousTime(time);
  //   }
    
  //   // start of dialog
  //   if (this.getState() !== PersonState.TALKING) {
  //     this.setState(PersonState.TALKING);

  //     lookAt(this, player);
  //     lookAt(player, this);

  //     TalkingService.getInstance().start(this.routine[time].dialog, this.getName());
  //   }
  //   // dialog ongoing
  //   else {
  //     if (this.getState() === PersonState.TALKING) {
  //       const dialogNext: boolean = TalkingService.getInstance().talk();

  //       // end of dialog
  //       if (!dialogNext) {
  //         this.setState(PersonState.IDLE);
  //       }
  //     }
  //   }
  // }
  //#endregion
  
}