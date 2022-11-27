import { MapService, TalkingService, TimeService } from ".";
import { NpcEntity, NpcStates, PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, TimeSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class NpcService implements TimeSignalListener, InputSignalListener {

  private static instance: NpcService;
  private npcs: NpcEntity[] = [];

  private constructor() {}

  public static get(): NpcService {
    if (!NpcService.instance) { NpcService.instance = new NpcService(); }
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
      if (Object.keys(
        npc.getRoutine()).includes(formattedTime) && 
        npc.getRoutine()[formattedTime].position && 
        npc.getState() === NpcStates.IDLE) {
          NpcService.get().move(npc,
            npc.getRoutine()[formattedTime].position.top,
            npc.getRoutine()[formattedTime].position.left
          );
      }
    });
  }

  public onKeyPressed(key: string): boolean {
    let signalReceived = false;
    if (key === ActionKeys.ACT && PlayerEntity.get().getState() === PlayerStates.IDLE) {
      this.npcs.forEach((npc) => {
        if (this.isTriggeredByPlayer(npc) && npc.getState() === NpcStates.IDLE) { 
          this.talk(npc);
          signalReceived = true;
        }
      });
    }
    return signalReceived;
  }

  /**
   * Checks if the player is located in an adjacent cell of the npc
   * @param npc
   * @returns true if player is present, else false
   */
  private isTriggeredByPlayer(npc: NpcEntity): boolean {
    // player is above npc
    if (npc.getCurrentCell().getUp().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookUp(); 
      PlayerEntity.get().getSprite().lookDown();
      return true;
    }
    // player is right of npc
    else if (npc.getCurrentCell().getRight().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookRight(); 
      PlayerEntity.get().getSprite().lookLeft();
      return true;
    }
    // player is below npc
    else if (npc.getCurrentCell().getDown().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookDown(); 
      PlayerEntity.get().getSprite().lookUp();
      return true;
    }
    // player is right of npc
    else if (npc.getCurrentCell().getLeft().getContents().find(c => c === PlayerEntity.get())) {
      npc.getSprite().lookLeft(); 
      PlayerEntity.get().getSprite().lookRight();
      return true;
    }
    // player is not around npc
    return false;
  }

  /**
   * Checks the npc routine to find the last registered position
   * @param npc 
   * @returns the time at which the position was found
   */
  private getLastPosition(npc: NpcEntity) {
    let time = TimeService.get().getCurrentTime();
    while (npc.getRoutine()[time]?.position === undefined) { time = TimeService.get().getPreviousTime(time); }
    return time;
  }

  /**
   * Checks the npc routine to find the last registered dialog
   * @param npc 
   * @returns the time at which the dialog was found
   */
  private getLastDialog(npc: NpcEntity) {
    let time = TimeService.get().getCurrentTime();
    while (npc.getRoutine()[time]?.dialog === undefined) { time = TimeService.get().getPreviousTime(time); }
    return time;
  }

  /**
   * Start dialog sequence between the played and the npc with its current dialog
   * @param npc 
   */
  private talk(npc: NpcEntity) {
    const time = this.getLastDialog(npc);
    TalkingService.get().start(npc.getRoutine()[time].dialog, npc);
  }

  /**
   * Moves npc towards a target position
   * @param npc 
   * @param targetTop y coordinate of the target position
   * @param targetLeft x coordinate of the target position
   */
  private move(npc: NpcEntity, targetTop: number, targetLeft: number): void {
    setTimeout(() => {
      // npc is on target position
      if (npc.getCurrentCell().getCellY() === targetTop && npc.getCurrentCell().getCellX() === targetLeft) {
        npc.setState(NpcStates.IDLE); return;
      }
      // npc can move
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
      // npc is not on target position
      this.move(npc, targetTop, targetLeft);
    }, 500);
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