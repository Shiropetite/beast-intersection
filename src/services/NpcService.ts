import { NpcEntity, NpcStates } from "../entities";
import { TimeSignalListener } from "../signals";
import { box, SpriteDirections } from "../utils";

export class NpcService implements TimeSignalListener {

  private static instance: NpcService;
  
  private npcs: NpcEntity[] = [];

  private constructor() { }

  public static getInstance(): NpcService {
    if (!NpcService.instance) {
      NpcService.instance = new NpcService();
    }

    return NpcService.instance;
  }
  
  /**
   * 
   * @param hours 
   * @param minutes 
   */
  onTick(hours: string, minutes: string): void {
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

  private move(npc: NpcEntity, targetTop: number, targetLeft: number): void {
    // time interval between each step
    const moveInterval = setInterval(() => {
      // cannot move unless idle
      if (npc.getState() !== NpcStates.IDLE) { return; }

      // npc is at target position
      if (npc.getCollider().getTop() === (targetTop * box) && npc.getCollider().getLeft() === (targetLeft * box)) {
        clearInterval(moveInterval);
      }

      // npc is above target position
      if (npc.getCollider().getTop() < (targetTop * box)) {
        npc.setSpriteDirection(SpriteDirections.DOWN);
        npc.getCollider().moveDown();
        npc.getSprite().moveDown();
      }
      // npc is below target position
      else if (npc.getCollider().getTop() > (targetTop * box)) {
        npc.setSpriteDirection(SpriteDirections.UP);
        npc.getCollider().moveUp();
        npc.getSprite().moveUp();
      } 
      // npc is left of target position
      else if (npc.getCollider().getLeft() < (targetLeft * box)) {
        npc.setSpriteDirection(SpriteDirections.RIGHT);
        npc.getCollider().moveRight();
        npc.getSprite().moveRight();
      }
      else 
      // npc is right of target position
      if (npc.getCollider().getLeft() > (targetLeft * box)) {
        npc.setSpriteDirection(SpriteDirections.LEFT);
        npc.getCollider().moveLeft();
        npc.getSprite().moveLeft();
      }

      // collider hitbox is not colliding
      if (!this.isColliding()) {
        const stepTop = this.getColliderTop() - currentColliderTop;
        const stepLeft = this.getColliderLeft() - currentColliderLeft;

        // move sprite
        this.setSpriteTop(this.getSpriteTop() + stepTop);
        this.setSpriteLeft(this.getSpriteLeft() + stepLeft);

        // move trigger hitbox
        this.setTriggerTop(this.getTriggerTop() + stepTop);
        this.setTriggerLeft(this.getTriggerLeft() + stepLeft);

        super.update();
      }
      // collider hitbox collide
      else {
        // abort movement
        this.setColliderTop(currentColliderTop);
        this.setColliderLeft(currentColliderLeft);
      }
    }, 500) // move every 0.5s
  }

  // when player talk to npc
  public act(): void {
    let time = TimeService.getInstance().getCurrentTime();
    
    // routine do not contain a dialog for current time
    while (this.routine[time]?.dialog === undefined) {
      time = TimeService.getInstance().getPreviousTime(time);
    }
    
    // start of dialog
    if (this.getState() !== PersonState.TALKING) {
      this.setState(PersonState.TALKING);

      lookAt(this, player);
      lookAt(player, this);

      TalkingService.getInstance().start(this.routine[time].dialog, this.getName());
    }
    // dialog ongoing
    else {
      if (this.getState() === PersonState.TALKING) {
        const dialogNext: boolean = TalkingService.getInstance().talk();

        // end of dialog
        if (!dialogNext) {
          this.setState(PersonState.IDLE);
        }
      }
    }
  }
  //#endregion

  
}