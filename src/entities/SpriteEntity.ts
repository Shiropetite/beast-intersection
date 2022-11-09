import { map } from "..";

export class SpriteEntity {
  
  private readonly sprite: HTMLElement;

  private spriteTop: number;
  private spriteLeft: number;
  private spriteHeight: number;
  private spriteWidth: number;

  public constructor(
    htmlId: string, 
    cssClass: string, 
    spriteTop: number, 
    spriteLeft: number, 
    spriteHeight: number, 
    spriteWidth: number
  ) {
    this.spriteTop = spriteTop;
    this.spriteLeft = spriteLeft;
    this.spriteHeight = spriteHeight;
    this.spriteWidth = spriteWidth;

    // create sprite HTML
    const spriteHTML = document.createElement('div');
    spriteHTML.id = htmlId;
    spriteHTML.classList.add(cssClass);
    spriteHTML.style.height = `${ this.spriteHeight }px`;
    spriteHTML.style.width = `${ this.spriteWidth }px`;
    map.appendChild(spriteHTML);

    // store HTML
    this.sprite = document.getElementById(htmlId);
  }

  public setPosition(spriteTop: number, spriteLeft: number): void {
    this.spriteTop = spriteTop;
    this.spriteLeft = spriteLeft;
    this.sprite.style.transform = `translate3d(${ this.spriteLeft }px, ${ this.spriteTop }px, 0)`;
  }

  public destroy(): void {
    map.removeChild(this.sprite);
  }
  
}