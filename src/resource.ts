import { mapHTML } from ".";
import { Dialog } from './dialog';

export class Resource {
  private readonly id: string;
  // geometry
  private readonly size: number;
  private top: number;
  private left: number;

  // constructor
  public constructor(id:string);
  public constructor(id: string, top: number, left: number);
  public constructor(...parameters: any[]) { 
    if(parameters.length === 1) {
      this.id = parameters[0];
      this.top = 64 * 4;
      this.left = 64 * 8;
    }

    if(parameters.length === 3) {
      this.id = parameters[0];
      this.top = parameters[1];
      this.left = parameters[2];
    }

    this.size = 64  ;
    this.create();
  }

  create(): void {
    const element = document.createElement('div');
    element.id = this.id;
    element.style.top = `${this.top}px`;
    element.style.left = `${this.left}px`;
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
    mapHTML.appendChild(element);
  }

  remove(dialog: Dialog): void {
    const element = document.getElementById(this.id);
    mapHTML.removeChild(element);
    dialog.show();
    dialog.update(`Vous avez trouvé un ${this.id} !`)
  }

  // getter & setter
  getType(): string { return this.id }
  getSize(): number { return this.size; }

  getTop(): number { return this.top; }
  setTop(top: number): void { this.top = top; }

  getLeft(): number { return this.left; }
  setLeft(left: number): void { this.left = left; }

}