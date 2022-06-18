import { collisions } from "..";
import { TriggerEntity } from "./TriggerEntity";

export class SolidEntity extends TriggerEntity {
  // Solid hitbox dimensions
  private readonly solidWidth: number;
  private readonly solidHeight: number;
  private solidTop: number;
  private solidLeft: number;

  //#region Constructor
  // solid hitbox dimensions same as trigger hitbox same as sprite
  constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number); 
  // solid hitbox dimensions same as trigger hitbox dimensions
  constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number, 
    triggerWidth: number, triggerHeight: number, triggerTop: number, triggerLeft: number);
  // solid hitbox has its own dimensions
  constructor(htmlId: string, cssClass: string, width: number, height: number, top: number, left: number, 
    triggerWidth: number, triggerHeight: number, triggerTop: number, triggerLeft: number,
    solidWidth: number, solidHeight: number, solidTop: number, solidLeft: number);

  constructor(...parameters: any[]) {
    if (parameters.length === 6) {
      super(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5]);
    }
    else {
      super(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6], parameters[7], parameters[8], parameters[9]);
    }
    
    if(parameters.length > 10) { // solid hitbox has its own dimensions
      this.solidWidth = parameters[10];
      this.solidHeight = parameters[11];
      this.solidTop = parameters[12];
      this.solidLeft = parameters[13];
    }
    else { // solid hitbox dimensions same as trigger hitbox dimensions
      this.solidWidth = super.getTriggerWidth();
      this.solidHeight = super.getTriggerHeight();
      this.solidTop = super.getTriggerTop();
      this.solidLeft = super.getTriggerLeft();
    }
  }
  //#endregion

  //#region Method
  isCollide(other: SolidEntity): boolean {
    return (this.solidLeft + this.solidWidth) > other.solidLeft && this.solidLeft < (other.solidLeft + other.solidWidth)
      && (this.solidTop + this.solidHeight) > other.solidTop && this.solidTop < (other.solidTop + other.solidHeight);
  }

  nextMoveCollide(): boolean {
    for (let collision of collisions) {
      // check it is colliding but not with himself
      if (this.isCollide(collision) && collision.htmlElement?.id !== super.getHTMLElement().id) {
        return true;
      }
    }

    return false;
  }
  //#endregion

  getSolidTop(): number {
    return this.solidTop;
  }

  setSolidTop(solidTop: number): void {
    this.solidTop = solidTop;
  }

  getSolidLeft(): number {
    return this.solidLeft;
  }

  setSolidLeft(solidLeft: number): void {
    this.solidLeft = solidLeft;
  }
}