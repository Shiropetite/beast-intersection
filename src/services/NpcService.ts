import { MapService, TalkingService, TimeService } from ".";
import { NpcEntity, NpcStates, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, TimeSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class NpcService implements TimeSignalListener, InputSignalListener {

  private static instance: NpcService;
  
  private npcs: NpcEntity[] = [];

  private constructor() {}

  public static get(): NpcService {
    if (!NpcService.instance) {
      NpcService.instance = new NpcService();
    }

    return NpcService.instance;
  }

  public register(npc: NpcEntity): void { this.npcs.push(npc); }

  public init() {
    this.npcs.forEach((npc) => {
      const time = this.getLastPosition(npc);
      MapService.get().initEntityMapCell(npc,
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
            NpcService.get().move(npc,
              npc.getRoutine()[formattedTime].position.top,
              npc.getRoutine()[formattedTime].position.left
            );
      }
    });
  }

  public onKeyPressed(keyPressed: string): boolean {
    let signalReceived = false
    if (keyPressed === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
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
    if (npc.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookUp(); 
      PlayerEntity.get().getSprite().lookDown();
      return true;
    }
    else if (npc.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookRight(); 
      PlayerEntity.get().getSprite().lookLeft();
      return true;
    }
    else if (npc.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookDown(); 
      PlayerEntity.get().getSprite().lookUp();
      return true;
    }
    else if (npc.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookLeft(); 
      PlayerEntity.get().getSprite().lookRight();
      return true;
    }

    return false;
  }

  private getLastPosition(npc: NpcEntity) {
    let time = TimeService.get().getCurrentTime();
    while (npc.getRoutine()[time]?.position === undefined) { time = TimeService.get().getPreviousTime(time); }
    return time;
  }

  private getLastDialog(npc: NpcEntity) {
    let time = TimeService.get().getCurrentTime();
    while (npc.getRoutine()[time]?.dialog === undefined) { time = TimeService.get().getPreviousTime(time); }
    return time;
  }

  private talk(npc: NpcEntity) {
    const time = this.getLastDialog(npc);
    TalkingService.get().start(npc.getRoutine()[time].dialog, npc);
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
        if (npc.getCurrentCell().getCellY() > targetTop) { NpcService.get().moveUp(npc); }
        // Npc is above target position
        else if (npc.getCurrentCell().getCellY() < targetTop) { NpcService.get().moveDown(npc); }
        // Npc is right of target position
        else if (npc.getCurrentCell().getCellX() > targetLeft) { NpcService.get().moveLeft(npc); }
        // Npc is left of target position
        else if (npc.getCurrentCell().getCellX() < targetLeft) { NpcService.get().moveRight(npc); }

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

}