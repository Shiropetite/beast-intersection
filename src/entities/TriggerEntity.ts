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
  public constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number);
  // trigger hitbox has its own dimensions
  public constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number, triggerWidth: number, triggerHeight: number, triggerTop: number, triggerLeft: number);
  
  public constructor(...parameters: any[]) {
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
  public createHtmlElement(htmlId: string, cssClass: string): void {
    // html
    const entity = document.createElement('div');
    entity.id = htmlId;
    
    // css
    entity.classList.add(cssClass);
    entity.style.width = `${this.width}px`;
    entity.style.height = `${this.height}px`;
    
    mapHTML.appendChild(entity);
  }

  public updateHtmlElement(): void {
    this.htmlElement.style.transform = `translate3d(${this.left}px, ${this.top}px, 0)`;
  }

  public destroyHtmlElement(): void {
    mapHTML.removeChild(this.htmlElement);
  }

  public isTrigger(other: TriggerEntity): boolean {
    return (this.triggerLeft + this.triggerWidth) > other.triggerLeft && this.triggerLeft < (other.triggerLeft + other.triggerWidth)
      && (this.triggerTop + this.triggerHeight) > other.triggerTop && this.triggerTop < (other.triggerTop + other.triggerHeight);
  }

  public onTrigger(): void {
    throw new Error('Method not yet implemented.');
  }
  //#endregion

  //#region Getters & Setters
  public getHTMLElement(): HTMLElement { return this.htmlElement; }

  public getWidth(): number { return this.width; }

  public getHeight(): number { return this.height; }

  public getTop(): number { return this.top; }

  public setTop(top: number): void { this.top = top; }

  public getLeft(): number { return this.left; }

  public setLeft(left: number): void { this.left = left; }

  public getTriggerWidth(): number { return this.triggerWidth; }

  public getTriggerHeight(): number { return this.triggerHeight; }

  public getTriggerTop(): number { return this.triggerTop; }

  public getTriggerLeft(): number { return this.triggerLeft; }

  public setTriggerTop(triggerTop: number): void { this.triggerTop = triggerTop }

  public setTriggerLeft(triggerLeft: number): void { this.triggerLeft = triggerLeft }
  //#endregion
}
