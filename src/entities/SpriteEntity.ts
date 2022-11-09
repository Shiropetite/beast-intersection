import { map } from "..";
import { box } from "../utils";

export class SpriteEntity {
  
  private readonly html: HTMLElement;

  private top: number;
  private left: number;
  private height: number;
  private width: number;

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

    // create sprite HTML
    const spriteHTML = document.createElement('div');
    spriteHTML.id = htmlId;
    spriteHTML.classList.add(cssClass);
    spriteHTML.style.height = `${ this.height }px`;
    spriteHTML.style.width = `${ this.width }px`;
    map.appendChild(spriteHTML);

    // store HTML
    this.html = document.getElementById(htmlId);
  }

  public destroy(): void { map.removeChild(this.html); }

  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }

  public moveUp() { this.top -= box; this.updateHtml(); }

  public moveDown() { this.top += box; this.updateHtml(); }

  public moveLeft() { this.left -= box; this.updateHtml(); }

  public moveRight() { this.left += box; this.updateHtml(); }

  private updateHtml(): void {
    this.html.style.transform = `translate3d(${ this.left }px, ${ this.top }px, 0)`;
  }

}