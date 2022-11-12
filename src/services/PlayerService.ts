import { SpriteDirections } from "../components";
import { PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, PlayerMoveSignalSender } from "../signals";
import { MapUI } from "../ui";
import { DirectionKeys } from "../utils";

export class PlayerService implements InputSignalListener {
  
  private static instance: PlayerService;

  //#region Singleton
  private constructor() { }

  public static getInstance(): PlayerService {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }

    return PlayerService.instance;
  }
  //#endregion

  /**
   * Listerner of player input
   * @param keyPressed player input
   */
  onKeyPressed(keyPressed: string): void {
    // Press 'z, q, s, d'
    const directionKey = Object.values(DirectionKeys).find(value =>  value === keyPressed);
    if (directionKey && PlayerEntity.getInstance().getState() === PlayerStates.IDLE) { this.move(directionKey); }
  }

  /**
   * Moves the player in direction if move is possible
   * @param key the direction key
   */
  private move(key: DirectionKeys): void {
    PlayerEntity.getInstance().setState(PlayerStates.MOVING);

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

    if (moveSuccess) {
      // Signal to entities that player has moved
      PlayerMoveSignalSender.getInstance().raise();
    }
    
    PlayerEntity.getInstance().setState(PlayerStates.IDLE);
  }

  /**
   * Move the player up
   * @returns is success
   */
  private moveUp(): boolean {
    PlayerEntity.getInstance().getSprite().lookAt(SpriteDirections.UP);
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentUp(PlayerEntity.getInstance());
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveUp();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true
    }
    return false;
  }

  /**
   * Move the player down
   * @returns is success
   */
  private moveDown(): boolean {
    PlayerEntity.getInstance().getSprite().lookAt(SpriteDirections.DOWN);
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentDown(PlayerEntity.getInstance());
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveDown();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true
    }
    return false;
  }

  /**
   * Move the player left
   * @returns is success
   */
  private moveLeft(): boolean {
    PlayerEntity.getInstance().getSprite().lookAt(SpriteDirections.LEFT);
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentLeft(PlayerEntity.getInstance());
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveLeft();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true
    }
    return false;
  }

  /**
   * Move the player right
   * @returns is success
   */
  private moveRight(): boolean {
    PlayerEntity.getInstance().getSprite().lookAt(SpriteDirections.RIGHT);
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentRight(PlayerEntity.getInstance());
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveRight();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true
    }
    return false;
  }
  
}