import { PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener } from "../signals";
import { PlayerMoveSignalSender } from "../signals/PlayerMoveSignal";
import { DirectionKeys, SpriteDirections } from "../utils";

export class PlayerService implements InputSignalListener {
  
  private static instance: PlayerService;

  private constructor() { }

  public static getInstance(): PlayerService {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }

    return PlayerService.instance;
  }

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
      moveSuccess = PlayerService.getInstance().moveUp(); break;
    case DirectionKeys.DOWN:
      moveSuccess = PlayerService.getInstance().moveDown(); break;
    case DirectionKeys.LEFT:
      moveSuccess = PlayerService.getInstance().moveLeft(); break;
    case DirectionKeys.RIGHT:
      moveSuccess = PlayerService.getInstance().moveRight(); break;
    }

    if (moveSuccess) {
      // Signal to trigger entities that player has moved
      PlayerMoveSignalSender.getInstance().raise();
    }
    
    PlayerEntity.getInstance().setState(PlayerStates.IDLE);
  }

  //#region Move
  private moveUp(): boolean {
    PlayerEntity.getInstance().setSpriteDirection(SpriteDirections.UP);
    PlayerEntity.getInstance().getCollider().moveUp();
    
    if (PlayerEntity.getInstance().getCollider().isColliding()) {
      PlayerEntity.getInstance().getCollider().moveDown();
      return false;
    }

    PlayerEntity.getInstance().getSprite().moveUp();
    return true;
  }

  private moveDown(): boolean {
    PlayerEntity.getInstance().setSpriteDirection(SpriteDirections.DOWN);
    PlayerEntity.getInstance().getCollider().moveDown();

    if (PlayerEntity.getInstance().getCollider().isColliding()) {
      PlayerEntity.getInstance().getCollider().moveUp();
      return false;
    }

    PlayerEntity.getInstance().getSprite().moveDown();
    return true;
  }

  private moveLeft(): boolean  {
    PlayerEntity.getInstance().setSpriteDirection(SpriteDirections.LEFT);
    PlayerEntity.getInstance().getCollider().moveLeft();

    if (PlayerEntity.getInstance().getCollider().isColliding()) {
      PlayerEntity.getInstance().getCollider().moveRight();
      return false;
    }

    PlayerEntity.getInstance().getSprite().moveLeft();
    return true;
  }

  private moveRight(): boolean {
    PlayerEntity.getInstance().setSpriteDirection(SpriteDirections.RIGHT);
    PlayerEntity.getInstance().getCollider().moveRight();

    if (PlayerEntity.getInstance().getCollider().isColliding()) {
      PlayerEntity.getInstance().getCollider().moveLeft();
      return false;
    }

    PlayerEntity.getInstance().getSprite().moveRight();
    return true;
  }
  //#endregion

}