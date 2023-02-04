import { PlayerEntity } from "../entities";
import { MapCell } from "../map/MapCell";
import { MapUI } from "../ui";
import { sleep } from "../utils";

export enum SpriteDirections {
  UP='up',
  LEFT='left',
  RIGHT='right',
  DOWN='down',
}

export enum SpriteActions {
  IDLE='idle',
  WALK="walk"
}

export class MapSprite {
  
  private html: HTMLElement;
  private htmlId: string;

  private top: number;
  private left: number;
  private height: number;
  private width: number;

  private direction: SpriteDirections;
  
  private idleInterval: NodeJS.Timer;
  private walkingAnimationFrame = 1;

  public constructor(
    htmlId: string, 
  ) {
    this.height = MapCell.MAP_CELL_SIZE;
    this.width = MapCell.MAP_CELL_SIZE;
    this.direction = SpriteDirections.DOWN;
    this.htmlId = htmlId;
  }

  /**
   * Create Html sprite on map
   * @param y 
   * @param x 
   */
  public create(y: number, x: number): void {  
    this.top = y;
    this.left = x;

    const spriteHTML = document.createElement('div');
    spriteHTML.id = this.htmlId;
    spriteHTML.classList.add(this.htmlId);
    spriteHTML.style.height = `${this.height}px`;
    spriteHTML.style.width = `${this.width}px`;
    MapUI.get().add(spriteHTML);

    this.html = document.getElementById(this.htmlId);
    this.lookHtml();
    this.moveHtml();
  }

  public addClass(className: string) {
    this.html.classList.add(className);
  }

  public removeClass(className: string) {
    this.html.classList.remove(className);
  }

  public show(): void { this.html.style.display = 'block'; }

  public hide(): void { this.html.style.display = 'none'; }
 
  public destroy(): void { MapUI.get().remove(this.html); }

  public lookUp() { this.direction = SpriteDirections.UP; this.lookHtml(); }

  public lookDown() { this.direction = SpriteDirections.DOWN; this.lookHtml(); }

  public lookLeft() { this.direction = SpriteDirections.LEFT; this.lookHtml(); }

  public lookRight() { this.direction = SpriteDirections.RIGHT; this.lookHtml(); }

  private lookHtml(): void {
    if (this.html.classList[1]) { this.html.classList.remove(this.html.classList[1]); }
    this.html.classList.add(`${ this.html.classList[0] }-${ this.direction }-1`);
  }

  public moveUp() { 
    this.top -= MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  public moveDown() { 
    this.top += MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  public moveLeft() { 
    this.direction = SpriteDirections.LEFT;  
    this.left -= MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  public moveRight() { 
    this.direction = SpriteDirections.RIGHT;  
    this.left += MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  private moveHtml(): void {
    this.html.style.transform = `translate3d(${ this.left }px, ${ this.top }px, 0)`;
  }

  public updateImage(spriteActions: SpriteActions, animationFrame: number): void {
    if (this.html.classList[1]) { this.html.classList.remove(this.html.classList[1]); }
    this.html.classList.add(`${ this.html.classList[0] }-${ spriteActions }-${ this.direction }-${animationFrame}`);
  }

  public startIdle(): void {
    let idleAnimationFrame = 1;
    this.idleInterval = setInterval(() => { 
      this.updateImage(SpriteActions.IDLE, idleAnimationFrame);
      if(idleAnimationFrame === 4) { idleAnimationFrame = 1 }
      else { idleAnimationFrame++; }
    }, 400)
  }

  public stopIdle(): void {
    clearInterval(this.idleInterval);
  }

  public async startMoving(): Promise<void> {
    PlayerEntity.get().getSprite().updateImage(SpriteActions.WALK, this.walkingAnimationFrame++) 
    await sleep(80)
    PlayerEntity.get().getSprite().updateImage(SpriteActions.WALK, this.walkingAnimationFrame++) 

    if(this.walkingAnimationFrame > 4) {
      this.walkingAnimationFrame = 1;
    }
  }

  //#region Getters & Setters
  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }

  public setHeight(height: number): void { this.height = height; }
  //#endregion

}