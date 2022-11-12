import { Map } from "../Map";

export enum SpriteDirections {
  UP='up',
  LEFT='left',
  RIGHT='right',
  DOWN='down',
}

export class SpriteComponent {
  
  private readonly html: HTMLElement;

  private top: number;
  private left: number;
  private height: number;
  private width: number;
  private direction: SpriteDirections;

  public constructor(
    htmlId: string, 
    cssClass: string, 
    top: number, 
    left: number, 
    height: number, 
    width: number
  ) {
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;
    this.direction = SpriteDirections.DOWN;
    

    // create sprite HTML
    const spriteHTML = document.createElement('div');
    spriteHTML.id = htmlId;
    spriteHTML.classList.add(cssClass);
    spriteHTML.style.height = `124px`;
    spriteHTML.style.width = `124px`;
    Map.getInstance().mapHtml.appendChild(spriteHTML);

    // store HTML
    this.html = document.getElementById(htmlId);
    this.updateHtml(0, 0);
  }

  public destroy(): void { Map.getInstance().mapHtml.removeChild(this.html); }

  // public moveUp() { 
  //   this.top -= box; 
  //   this.direction = SpriteDirections.UP;
  //   this.updateHtml(); 
  // }

  // public moveDown() { 
  //   this.top += box;
  //   this.direction = SpriteDirections.DOWN; 
  //   this.updateHtml(); 
  // }

  // public moveLeft() { 
  //   this.left -= box; 
  //   this.direction = SpriteDirections.LEFT; 
  //   this.updateHtml(); 
  // }

  // public moveRight() { 
  //   this.left += box;
  //   this.direction = SpriteDirections.RIGHT;  
  //   this.updateHtml(); 
  // }

  private updateHtml(y: number, x: number): void {
    this.html.style.transform = `translate3d(${ x }px, ${ y }px, 0)`;
    if (this.html.classList[1]) {
      this.html.classList.remove(this.html.classList[1]);
    }
    this.html.classList.add(`${this.html.classList[0]}-${this.direction}`);
  }

  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }

  public getDirection(): SpriteDirections { return this.direction; }

}