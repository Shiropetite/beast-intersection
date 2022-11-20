import { MapCell } from "../map/MapCell";
import { MapUI } from "../ui";

export enum SpriteDirections {
  UP='up',
  LEFT='left',
  RIGHT='right',
  DOWN='down',
}

export class MapSprite {
  
  private html: HTMLElement;
  private htmlId: string;

  private top: number;
  private left: number;
  private height: number;
  private width: number;

  private direction: SpriteDirections;

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
    MapUI.getInstance().add(spriteHTML);

    this.html = document.getElementById(this.htmlId);
    this.lookHtml(this.direction);
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
 
  public destroy(): void { MapUI.getInstance().remove(this.html); }

  public lookUp() {
    this.lookHtml(SpriteDirections.UP);
  }

  public lookDown() {
    this.lookHtml(SpriteDirections.DOWN);
  }

  public lookLeft() {
    this.lookHtml(SpriteDirections.LEFT);
  }

  public lookRight() {
    this.lookHtml(SpriteDirections.RIGHT);
  }

  private lookHtml(direction: SpriteDirections): void {
    if (this.html.classList[1]) { this.html.classList.remove(this.html.classList[1]); }
    this.html.classList.add(`${ this.html.classList[0] }-${ direction }`);
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

  //#region Getters & Setters
  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }
  //#endregion

}