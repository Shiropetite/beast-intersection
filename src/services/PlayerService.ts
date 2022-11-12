import { PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, PlayerMoveSignalSender } from "../signals";
import { DirectionKeys } from "../utils";

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
      moveSuccess = this.moveUp(); break;
    case DirectionKeys.DOWN:
      moveSuccess = this.moveDown(); break;
    case DirectionKeys.LEFT:
      moveSuccess = this.moveLeft(); break;
    case DirectionKeys.RIGHT:
      moveSuccess = this.moveRight(); break;
    }

    if (moveSuccess) {
      // Signal to entities that player has moved
      PlayerMoveSignalSender.getInstance().raise();
    }
    
    PlayerEntity.getInstance().setState(PlayerStates.IDLE);
  }

  //#region Move
  private moveUp(): boolean {
    // if (PlayerEntity.getInstance().getCell().getUp()) {
    //   if (PlayerEntity.getInstance().getCell().getUp().isTaken()) { return false; }

    //   PlayerEntity.getInstance().setCell(PlayerEntity.getInstance().getCell().getUp());
    //   //TODO: update sprite position & direction

    //   return true;
    // }
    // else { return false; }
    return false;
  }

  private moveDown(): boolean {
    // if (PlayerEntity.getInstance().getCell().getDown()) {
    //   if (PlayerEntity.getInstance().getCell().getDown().isTaken()) { return false; }

    //   PlayerEntity.getInstance().setCell(PlayerEntity.getInstance().getCell().getDown());
    //   //TODO: update sprite position & direction

    //   return true;
    // }
    // else { return false; }
    return false;
  }

  private moveLeft(): boolean  {
    // if (PlayerEntity.getInstance().getCell().getLeft()) {
    //   if (PlayerEntity.getInstance().getCell().getLeft().isTaken()) { return false; }

    //   PlayerEntity.getInstance().setCell(PlayerEntity.getInstance().getCell().getLeft());
    //   //TODO: update sprite position & direction

    //   return true;
    // }
    // else { return false; }
    return false;
  }

  private moveRight(): boolean {
    // if (PlayerEntity.getInstance().getCell().getRight()) {
    //   if (PlayerEntity.getInstance().getCell().getRight().isTaken()) { return false; }

    //   PlayerEntity.getInstance().setCell(PlayerEntity.getInstance().getCell().getRight());
    //   //TODO: update sprite position & direction

    //   return true;
    // }
    // else { return false; }
    return false;
  }
  //#endregion
  
}