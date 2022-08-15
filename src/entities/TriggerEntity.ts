import { map } from "..";

export enum Action {
  TALK='talk',
  PICK_UP='pick-up',
  FISH='fish',
  CATCH='catch',
  CUT='cut',
  NONE='none'
}

export class TriggerEntity {
  private sprite: HTMLElement;
  
  // sprite dimensions
  private spriteWidth: number;
  private spriteHeight: number;
  private spriteTop: number;
  private spriteLeft: number;

  // trigger hitbox dimensions
  private triggerWidth: number;
  private triggerHeight: number;
  private triggerTop: number;
  private triggerLeft: number;

  private action: Action;

  //#region Constructors
  // trigger hitbox dimensions same as sprite dimensions
  public constructor(
    htmlId: string,
    cssClass: string,
    action: Action,
    spriteWidth: number,
    spriteHeight: number,
    spriteTop: number,
    spriteLeft: number
  );

  // trigger hitbox has its own dimensions
  public constructor(
    htmlId: string,
    cssClass: string,
    action: Action,
    spriteWidth: number,
    spriteHeight: number,
    spriteTop: number,
    spriteLeft: number,
    triggerWidth: number,
    triggerHeight: number,
    triggerTop: number,
    triggerLeft: number
  );
  
  public constructor(...parameters: any[]) {
    this.spriteWidth = parameters[3];
    this.spriteHeight = parameters[4];
    this.spriteTop = parameters[5];
    this.spriteLeft = parameters[6];

    // trigger hitbox has its own dimensions
    if (parameters.length > 8) {
      this.triggerWidth = parameters[7];
      this.triggerHeight = parameters[8];
      this.triggerTop = parameters[9];
      this.triggerLeft = parameters[10];
    }
    // trigger hitbox dimensions same as sprite dimensions
    else {
      this.triggerWidth = this.spriteWidth;
      this.triggerHeight = this.spriteHeight;
      this.triggerTop = this.spriteTop;
      this.triggerLeft = this.spriteLeft;
    }

    this.action = parameters[2];
    this.create(parameters[0], parameters[1]);
  }
  //#endregion

  //#region Methods
  public create(htmlId: string, cssClass: string): void {
    // create sprite HTML
    const spriteHTML = document.createElement('div');
    spriteHTML.id = htmlId;
    spriteHTML.classList.add(cssClass);
    spriteHTML.style.width = `${ this.spriteWidth }px`;
    spriteHTML.style.height = `${ this.spriteHeight }px`;
    map.appendChild(spriteHTML);

    // store HTML
    this.sprite = document.getElementById(htmlId);
  }

  public update(): void {
    this.sprite.style.transform = `translate3d(${ this.spriteLeft }px, ${ this.spriteTop }px, 0)`;
  }

  public destroy(): void {
    map.removeChild(this.sprite);
  }

  public isTriggeredBy(other: TriggerEntity): boolean {
    return (this.triggerLeft + this.triggerWidth) > other.triggerLeft && this.triggerLeft < (other.triggerLeft + other.triggerWidth)
      && (this.triggerTop + this.triggerHeight) > other.triggerTop && this.triggerTop < (other.triggerTop + other.triggerHeight);
  }

  public onTrigger(): void { }

  public act(): void { }

  public onTimeTick(): void { }
  //#endregion

  //#region Getters & Setters
  public getSprite(): HTMLElement { return this.sprite; }

  public getAction(): Action { return this.action; }

  public getSpriteWidth(): number { return this.spriteWidth; }

  public setSpriteWidth(spriteWidth: number): void { this.spriteWidth = spriteWidth }

  public getSpriteHeight(): number { return this.spriteHeight; }

  public setSpriteHeight(spriteHeight: number): void { this.spriteHeight = spriteHeight }

  public getSpriteTop(): number { return this.spriteTop; }

  public setSpriteTop(top: number): void { this.spriteTop = top; }

  public getSpriteLeft(): number { return this.spriteLeft; }

  public setSpriteLeft(left: number): void { this.spriteLeft = left; }

  public getTriggerWidth(): number { return this.triggerWidth; }

  public setTriggerWidth(triggerWidth: number) { this.triggerWidth = triggerWidth }

  public getTriggerHeight(): number { return this.triggerHeight; }

  public setTriggerHeight(triggerHeight: number) { this.triggerHeight = triggerHeight }

  public getTriggerTop(): number { return this.triggerTop; }

  public setTriggerTop(triggerTop: number): void { this.triggerTop = triggerTop }

  public getTriggerLeft(): number { return this.triggerLeft; }

  public setTriggerLeft(triggerLeft: number): void { this.triggerLeft = triggerLeft }
  //#endregion

}
