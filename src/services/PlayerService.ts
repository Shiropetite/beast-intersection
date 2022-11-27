import { PlayerEntity, PlayerStates } from "../entities";
import { InputSignalListener, PlayerMoveSignalSender } from "../signals";
import { DirectionKeys, sleep } from "../utils";

export class PlayerService implements InputSignalListener {
  
  private static instance: PlayerService;

  //#region Singleton
  private constructor() { }

  public static get(): PlayerService {
    if (!PlayerService.instance) {
      PlayerService.instance = new PlayerService();
    }

    return PlayerService.instance;
  }
  //#endregion

  /**
   * Listerner of player input
   * @param key player input
   */
  public onKeyPressed(key: string): boolean {
    // Press 'z, q, s, d'
    const directionKey = Object.values(DirectionKeys).find(value => value === key);
    if (directionKey && PlayerEntity.get().getState() === PlayerStates.IDLE) { 
      this.move(directionKey);
      return true; 
    }

    return false;
  }

  /**
   * Moves the player in direction if move is possible
   * @param key the direction key
   */
  private async move(key: DirectionKeys): Promise<void> {
    PlayerEntity.get().setState(PlayerStates.MOVING);

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
      PlayerMoveSignalSender.get().raise();
    }

    // wait for sprite to sync before setting player state
    await sleep(150);
    PlayerEntity.get().setState(PlayerStates.IDLE);
  }

  /**
   * Move the player up
   * @returns is success
   */
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

  /**
   * Move the player down
   * @returns is success
   */
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

  /**
   * Move the player left
   * @returns is success
   */
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

  /**
   * Move the player right
   * @returns is success
   */
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