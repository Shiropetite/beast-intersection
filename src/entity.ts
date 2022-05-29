import { box, isColliding, mapHTML } from ".";

export class Entity {
  private readonly id: string;

  // geometry
  private readonly width: number;
  private readonly height: number;
  private top: number;
  private left: number;

  // hitbox
  private readonly hitWidth: number;
  private readonly hitHeight: number;
  private hitTop: number;
  private hitLeft: number;

  // constructor
  public constructor(id:string);
  public constructor(id: string, top: number, left: number);
  public constructor(id: string, top: number, left: number, width: number, height: number);
  public constructor(id: string, top: number, left: number, width: number, height: number, hitTop: number, hitLeft: number, hitWidth: number, hitHeight: number);
  public constructor(...parameters: any[]) { 
    this.id = parameters[0];
    this.top = parameters[1];
    this.left = parameters[2];

    if(parameters.length <= 3) {
      this.width = box - 6;
      this.height = box - 6;
    }
    else {
      this.width = parameters[3];
      this.height = parameters[4];
    }

    if(parameters.length <= 5) {
      this.hitTop = 0;
      this.hitLeft = 0;
      this.hitWidth = this.width;
      this.hitHeight = this.height;
    }
    else {
      this.hitTop = parameters[5];
      this.hitLeft = parameters[6];
      this.hitWidth = parameters[7];
      this.hitHeight = parameters[8];
    }
  }

  // Create HTML
  create(): void {
    const element = document.createElement('div');
    element.id = this.id;
    mapHTML.appendChild(element);
  }

  // UPDATE HTML
  update(): void {
    const element = document.getElementById(this.id);

    element.style.transform = `translate3d( ${this.left}px, ${this.top}px, 0 )`;
    element.style.width = `${this.width}px`;
    element.style.height = `${this.height}px`;
  }

  async interact(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  colide(top: number, left: number, width: number, height: number) {
    return isColliding(
      this.top + this.hitTop, 
      this.left + this.hitLeft, 
      this.hitWidth, 
      this.hitHeight, 
      top, 
      left, 
      width, 
      height
    );
  }

  remove() {
    mapHTML.removeChild(document.getElementById(this.id))
  }

  // getter & setter
  getId(): string { return this.id }

  getWidth(): number { return this.width; }
  getHeight(): number { return this.height; }

  getTop(): number { return this.top; }
  setTop(top: number): void { this.top = top; }

  getLeft(): number { return this.left; }
  setLeft(left: number): void { this.left = left; }

}