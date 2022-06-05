import { mapHTML } from '.';

export class DisplayedElement {
  private readonly id: string;
  private readonly className: string;
  private readonly width: number;
  private readonly height: number;
  private top: number;
  private left: number;

  //#region Constructor
  constructor(id: string, className: string, width: number, height: number, top: number, left: number) {
    this.id = id;
    this.className = className;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
  }
  //#endregion

  //#region Methods
  createHTML(): void {
    const element = document.createElement('div');
    element.id = this.id;
    element.classList.add(this.className);
    mapHTML.appendChild(element);
  }

  updateHTML(): void {
    const element = document.getElementById(this.id);
    element.style.width = `${this.width}px`;
    element.style.height = `${this.height}px`;
    element.style.transform = `translate3d(${this.left}px, ${this.top}px, 0)`;
  }

  removeHTML(): void {
    mapHTML.removeChild(document.getElementById(this.getId()))
  }
  //#endregion

  //#region Getters & Setters
  getId(): string {
    return this.id;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getTop(): number {
    return this.top;
  }
  
  setTop(top: number): void {
    this.top = top;
  }

  getLeft(): number {
    return this.left;
  }

  setLeft(left: number): void {
    this.left = left;
  }
  //#endregion
}