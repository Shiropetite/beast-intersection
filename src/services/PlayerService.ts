import { PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, PlayerMoveSignalSender } from "../signals";
import { DirectionKeys } from "../utils";

export class PlayerService implements InputSignalListener {
  
  private static instance: PlayerService;
  private keyPressed: boolean = false;

  private constructor() { }

  public static get(): PlayerService {
    if (!PlayerService.instance) { PlayerService.instance = new PlayerService(); }
    return PlayerService.instance;
  }

  public onKeyPressed(key: string): boolean {
    if (this.keyPressed === true) return false;
    this.keyPressed = true;
    const directionKey = Object.values(DirectionKeys).find(value => value === key);
    if (directionKey && PlayerEntity.get().getState() === PlayerStates.IDLE) { 
      this.move(directionKey);
      setTimeout(() => { this.keyPressed = false; }, 150);
      return true; 
    }
    setTimeout(() => { this.keyPressed = false; }, 150);
    return false;
  }

  /**
   * Moves the player towards a direction according to the key pressed by the user
   * @param key key pressed by user
   */
  private async move(key: DirectionKeys): Promise<void> {
    PlayerEntity.get().setState(PlayerStates.MOVING);
    // move player towards input direction
    PlayerEntity.get().getSprite().stopIdle();

    // move player collider towards input direction
    let moveSuccess: boolean;
    switch (key) {
    case DirectionKeys.UP:
      moveSuccess = this.moveUp();
      break;
    case DirectionKeys.DOWN:
      moveSuccess = this.moveDown();
      break;
    case DirectionKeys.LEFT:
      moveSuccess = this.moveLeft();
      break;
    case DirectionKeys.RIGHT:
      moveSuccess = this.moveRight();
      break;
    }
    // signal to entities that player has moved
    if (moveSuccess) { PlayerMoveSignalSender.get().raise(); }
    
    if (moveSuccess) {
      // Signal to entities that player has moved
      PlayerMoveSignalSender.get().raise();
      PlayerEntity.get().getSprite().startMoving();
    }
    // wait for sprite to sync before setting player state
    await sleep(150);
    
    PlayerEntity.get().getSprite().startIdle();
    PlayerEntity.get().setState(PlayerStates.IDLE);
  }

  private moveUp(): boolean {
    PlayerEntity.get().getSprite().lookUp();
    const newCell = PlayerEntity.get().getCurrentCell().moveContentUp(PlayerEntity.get());
    if (newCell) {
      PlayerEntity.get().getSprite().moveUp();
      PlayerEntity.get().setCurrentCell(newCell);
      return true;
    }
    return false;
  }

  private moveDown(): boolean {
    PlayerEntity.get().getSprite().lookDown();
    const newCell = PlayerEntity.get().getCurrentCell().moveContentDown(PlayerEntity.get());
    if (newCell) {
      PlayerEntity.get().getSprite().moveDown();
      PlayerEntity.get().setCurrentCell(newCell);
      return true
    }
    return false;
  }

  private moveLeft(): boolean {
    PlayerEntity.get().getSprite().lookLeft();
    const newCell = PlayerEntity.get().getCurrentCell().moveContentLeft(PlayerEntity.get());
    if (newCell) {
      PlayerEntity.get().getSprite().moveLeft();
      PlayerEntity.get().setCurrentCell(newCell);
      return true
    }
    return false;
  }

  private moveRight(): boolean {
    PlayerEntity.get().getSprite().lookRight();
    const newCell = PlayerEntity.get().getCurrentCell().moveContentRight(PlayerEntity.get());
    if (newCell) {
      PlayerEntity.get().getSprite().moveRight();
      PlayerEntity.get().setCurrentCell(newCell);
      return true
    }
    return false;
  }
  
}