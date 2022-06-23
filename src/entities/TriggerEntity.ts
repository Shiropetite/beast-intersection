import { mapHTML } from "..";

// Displayed element with trigger hitbox
export class TriggerEntity {
  // Html
  private htmlElement: HTMLElement;
  
  // Sprite dimensions
  private readonly width: number;
  private readonly height: number;
  private top: number;
  private left: number;

  // Trigger hitbox dimensions
  private readonly triggerWidth: number;
  private readonly triggerHeight: number;
  private triggerTop: number;
  private triggerLeft: number;

  //#region Constructor
  // trigger hitbox dimensions same as sprite
  constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number);
  // trigger hitbox has its own dimensions
  constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number, triggerWidth: number, triggerHeight: number, triggerTop: number, triggerLeft: number);
  
  constructor(...parameters: any[]) {
    this.width = parameters[2];
    this.height = parameters[3];
    this.top = parameters[4];
    this.left = parameters[5];

    if (parameters.length > 6) {
      this.triggerWidth = parameters[6];
      this.triggerHeight = parameters[7];
      this.triggerTop = parameters[8];
      this.triggerLeft = parameters[9];
    }
    else {
      this.triggerWidth = this.width;
      this.triggerHeight = this.height;
      this.triggerTop = this.top;
      this.triggerLeft = this.left;
    }

    this.createHtmlElement(parameters[0], parameters[1]);
    this.htmlElement = document.getElementById(parameters[0]);
  }
  //#endregion

  //#region Method
  createHtmlElement(htmlId: string, cssClass: string): void {
    // html
    const entity = document.createElement('div');
    entity.id = htmlId;
    
    // css
    entity.classList.add(cssClass);
    entity.style.width = `${this.width}px`;
    entity.style.height = `${this.height}px`;
    
    mapHTML.appendChild(entity);
  }

  updateHtmlElement(): void {
    this.htmlElement.style.transform = `translate3d(${this.left}px, ${this.top}px, 0)`;
  }

  destroyHtmlElement(): void {
    mapHTML.removeChild(this.htmlElement);
  }

  isTrigger(other: TriggerEntity): boolean {
    return (this.triggerLeft + this.triggerWidth) > other.triggerLeft && this.triggerLeft < (other.triggerLeft + other.triggerWidth)
      && (this.triggerTop + this.triggerHeight) > other.triggerTop && this.triggerTop < (other.triggerTop + other.triggerHeight);
  }

  onTrigger(): void {
    throw new Error('Method not yet implemented.');
  }
  //#endregion

  //#region Getters & Setters
  getHTMLElement(): HTMLElement {
    return this.htmlElement;
  }

  getWidth(): number { return this.width; }

  getHeight(): number { return this.height; }

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

  getTriggerWidth(): number {
    return this.triggerWidth;
  }

  getTriggerHeight(): number {
    return this.triggerHeight;
  }

  getTriggerTop(): number {
    return this.triggerTop;
  }

  getTriggerLeft(): number {
    return this.triggerLeft;
  }

  setTriggerTop(triggerTop: number): void {
    this.triggerTop = triggerTop
  }

  setTriggerLeft(triggerLeft: number): void {
    this.triggerLeft = triggerLeft
  }
  //#endregion
}
