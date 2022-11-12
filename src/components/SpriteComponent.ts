import { MapCell } from "../entities";
import { MapUI } from "../ui";

export enum SpriteDirections {
  UP='up',
  LEFT='left',
  RIGHT='right',
  DOWN='down',
}

export class SpriteComponent {
  
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
    this.lookAt(this.direction);
    this.moveHtml();
  }

  /**
   * Remove sprite from map
   */
  public destroy(): void { MapUI.getInstance().remove(this.html); }


  /**
   * Chage direction of the sprite
   * @param direction 
   */
  public lookAt(direction: SpriteDirections): void {
    this.direction = direction;
    if (this.html.classList[1]) {
      this.html.classList.remove(this.html.classList[1]);
    }
    this.html.classList.add(`${this.html.classList[0]}-${this.direction}`);
  }

  /**
   * Move Up the sprite
   */
  public moveUp() { 
    this.top -= MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  /**
   * Move Down the sprite
   */
  public moveDown() { 
    this.top += MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  /**
   * Move Left the sprite
   */
  public moveLeft() { 
    this.direction = SpriteDirections.LEFT;  
    this.left -= MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  /**
   * Move Right the sprite
   */
  public moveRight() { 
    this.direction = SpriteDirections.RIGHT;  
    this.left += MapCell.MAP_CELL_SIZE;
    this.moveHtml(); 
  }

  /**
   * Move sprite html on page
   */
  private moveHtml(): void {
    this.html.style.transform = `translate3d(${ this.left }px, ${ this.top }px, 0)`;
  }

}