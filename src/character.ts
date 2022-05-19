import { colisions, isColliding, mapHTML } from ".";

export class Character {
  private readonly type: string;
  // geometry
  private readonly size: number;
  private top: number;
  private left: number;

  // constructor
  public constructor(type:string);
  public constructor(type: string, top: number, left: number);
  public constructor(...parameters: any[]) { 
    if(parameters.length === 1) {
      this.type = parameters[0];
      this.top = 64 * 4;
      this.left = 64 * 8;
    }

    if(parameters.length === 3) {
      this.type = parameters[0];
      this.top = parameters[1];
      this.left = parameters[2];
    }

    this.size = 64 * 2 - 6;
    this.create();
    this.update();
  }

  create(): void {
    const element = document.createElement('div');
    element.id = this.type;
    mapHTML.appendChild(element);
  }

  update(): void {
    const element = document.getElementById(this.type);
    element.style.transform = `translate3d( ${this.left}px, ${this.top}px, 0 )`;
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
  }

  colide(top: number, left: number) {
    let isColision = false;
    colisions.forEach((colision) => {
      if(isColision === true) return;
      const width = colision?.width ?? colision?.size
      const height = colision?.height ?? colision?.size

      isColision = isColliding(top, left, this.size, this.size, colision.top, colision.left, width, height);
    })
    return isColision;
  }

  // getter & setter
  getSize(): number { return this.size; }

  getTop(): number { return this.top; }
  setTop(top: number): void { this.top = top; }

  getLeft(): number { return this.left; }
  setLeft(left: number): void { this.left = left; }

}