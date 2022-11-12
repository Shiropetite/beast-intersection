import { TalkingService, TimeService } from ".";
import { SpriteDirections } from "../components";
import { NpcEntity, NpcStates, PlayerEntity } from "../entities";
import { InputSignalListener, TimeSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class NpcService implements TimeSignalListener, InputSignalListener {

  private static instance: NpcService;
  
  private npcs: NpcEntity[] = [];

  private constructor() { }

  public static getInstance(): NpcService {
    if (!NpcService.instance) {
      NpcService.instance = new NpcService();
    }

    return NpcService.instance;
  }
  
  onTick(hours: number, minutes: number): void {
    const formattedTime = `${hours}:${minutes}`;

    this.npcs.forEach((npc) => {
      if (Object.keys(npc.getRoutine()).includes(formattedTime)) {
        console.log(npc.getName() + ": " + npc.getRoutine()[formattedTime].text);
  
        if (npc.getRoutine()[formattedTime].position) {
          NpcService.getInstance().move(npc, npc.getRoutine()[formattedTime].position.top, npc.getRoutine()[formattedTime].position.left);
        }
      }
    });
  }

  onKeyPressed(keyPressed: string): void {
    if (keyPressed === ActionKeys.ACT) {
      this.npcs.forEach((npc) => {
        if (npc.getTrigger().isTriggeredByCollider(PlayerEntity.getInstance().getCollider())) {
          if (npc.getState() === NpcStates.IDLE) { TalkingService.getInstance().start(npc.getRoutine().dialog.dialog, npc.getTrigger()); }
        }
      });
    }
  }

  /**
   * 
   * @param npc 
   * @param targetTop 
   * @param targetLeft 
   */
  private move(npc: NpcEntity, targetTop: number, targetLeft: number): void {
  //   // time interval between each step
  //   const moveInterval = setInterval(() => {
  //     // cannot move unless idle
  //     if (npc.getState() !== NpcStates.IDLE) { return; }

  //     npc.setState(NpcStates.MOVING);

  //     // npc is at target position
  //     if (npc.getCollider().isOnPosition(targetTop, targetLeft)) {
  //       clearInterval(moveInterval);
  //     }

  //     // npc is below target position
  //     if (npc.getCollider().getTop() > (targetTop * box)) { NpcService.getInstance().moveUp(npc); }
  //     // npc is above target position
  //     else if (npc.getCollider().getTop() < (targetTop * box)) { NpcService.getInstance().moveDown(npc); }
  //     // npc is right of target position
  //     else if (npc.getCollider().getLeft() > (targetLeft * box)) { NpcService.getInstance().moveLeft(npc); }
  //     // npc is left of target position
  //     else if (npc.getCollider().getLeft() < (targetLeft * box)) { NpcService.getInstance().moveRight(npc); }

  //     npc.setState(NpcStates.IDLE);
  //   }, 500) // move every 0.5s
  // }

  // public moveUp(npc: NpcEntity): void {
  //   npc.getCollider().moveUp();

  //   if (npc.getCollider().isColliding()) { npc.getCollider().moveDown(); }
  //   else { npc.getSprite().moveUp(); }
  // }

  // public moveDown(npc: NpcEntity): void {
  //   npc.getCollider().moveDown();

  //   if (npc.getCollider().isColliding()) { npc.getCollider().moveUp(); }
  //   else { npc.getSprite().moveDown(); }
  // }

  // public moveLeft(npc: NpcEntity): void {
  //   npc.getCollider().moveLeft();

  //   if (npc.getCollider().isColliding()) { npc.getCollider().moveRight(); }
  //   else { npc.getSprite().moveLeft(); }
  // }

  // public moveRight(npc: NpcEntity): void {
  //   npc.getCollider().moveRight();

  //   if (npc.getCollider().isColliding()) { npc.getCollider().moveLeft(); }
  //   else { npc.getSprite().moveRight(); }
  // }

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
  }
  //#endregion
  
}