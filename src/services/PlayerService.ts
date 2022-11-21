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
   * @param keyPressed player input
   */
  public onKeyPressed(keyPressed: string): boolean {
    // Press 'z, q, s, d'
    const directionKey = Object.values(DirectionKeys).find(value => value === keyPressed);
    if (directionKey && PlayerEntity.getInstance().getState() === PlayerStates.IDLE) { 
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
      PlayerMoveSignalSender.get().raise();
    }

    // wait for sprite to sync before setting player state
    await sleep(100);
    PlayerEntity.getInstance().setState(PlayerStates.IDLE);
  }

  /**
   * Move the player up
   * @returns is success
   */
  private moveUp(): boolean {
    PlayerEntity.getInstance().getSprite().lookUp();
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentUp(PlayerEntity.getInstance());
    
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveUp();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true;
    }

    return false;
  }

  /**
   * Move the player down
   * @returns is success
   */
  private moveDown(): boolean {
    PlayerEntity.getInstance().getSprite().lookDown();
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
    PlayerEntity.getInstance().getSprite().lookLeft();
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
    PlayerEntity.getInstance().getSprite().lookRight();
    const newCell = PlayerEntity.getInstance().getCurrentCell().moveContentRight(PlayerEntity.getInstance());
    if (newCell) {
      PlayerEntity.getInstance().getSprite().moveRight();
      PlayerEntity.getInstance().setCurrentCell(newCell);
      return true
    }
    return false;
  }
  
}