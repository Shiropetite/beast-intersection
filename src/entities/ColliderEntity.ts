import { colliders } from "..";
import { Action, TriggerEntity } from "./TriggerEntity";

export class ColliderEntity extends TriggerEntity {
  // collider hitbox dimensions
  private colliderWidth: number;
  private colliderHeight: number;
  private colliderTop: number;
  private colliderLeft: number;

  //#region Constructors
  // collider hitbox dimensions same as trigger hitbox same as sprite dimensions
  public constructor(
    htmlId: string,
    cssClass: string,
    action: Action,
    spriteWidth: number,
    spriteHeight: number,
    spriteTop: number,
    spriteLeft: number
  );

  // collider hitbox dimensions same as trigger hitbox dimensions
  public constructor(
    htmlId: string,
    cssClass: string,
    action: Action,
    spriteWidth: number,
    spriteHeight: number,
    spriteTop: number,
    spriteLeft: number, 
    triggerWidth:number,
    triggerHeight: number,
    triggerTop: number,
    triggerLeft: number
  );
  
  // collider hitbox has its own dimensions
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
    triggerLeft: number,
    colliderWidth: number,
    colliderHeight: number,
    colliderTop: number,
    colliderLeft: number
  );

  public constructor(...parameters: any[]) {
    // collider hitbox dimensions same as trigger hitbox same as sprite dimensions
    if (parameters.length === 7) {
      super(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6]);
    }
    // collider hitbox dimensions same as trigger hitbox dimensions
    else {
      super(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], 
        parameters[6], parameters[7], parameters[8], parameters[9], parameters[10]);
    }
    
    // collider hitbox has its own dimensions
    if (parameters.length > 11) { 
      this.colliderWidth = parameters[11];
      this.colliderHeight = parameters[12];
      this.colliderTop = parameters[13];
      this.colliderLeft = parameters[14];
    }
    // collider hitbox dimensions same as sprite dimensions
    else { 
      this.colliderWidth = super.getSpriteWidth();
      this.colliderHeight = super.getSpriteHeight();
      this.colliderTop = super.getSpriteTop();
      this.colliderLeft = super.getSpriteLeft();
    }

  }
  //#endregion

  //#region Methods
  public isCollidingWith(other: ColliderEntity): boolean {
    return (this.colliderLeft + this.colliderWidth) > other.colliderLeft && this.colliderLeft < (other.colliderLeft + other.colliderWidth)
      && (this.colliderTop + this.colliderHeight) > other.colliderTop && this.colliderTop < (other.colliderTop + other.colliderHeight);
  }

  public isColliding(): boolean {
    for (let collider of colliders) {
      // check colliders except self
      if (this.isCollidingWith(collider) && collider.getSprite()?.id !== super.getSprite().id) {
        return true;
      }
    }

    return false;
  }
  //#endregion

  //#region Getters & Setters
  public getColliderWidth(): number { return this.colliderWidth; }

  public setColliderWidth(colliderWidth: number): void { this.colliderWidth = colliderWidth; }

  public getColliderHeight(): number { return this.colliderHeight; }

  public setColliderHeight(colliderHeight: number): void { this.colliderHeight = colliderHeight; }

  public getColliderTop(): number { return this.colliderTop; }

  public setColliderTop(colliderTop: number): void { this.colliderTop = colliderTop; }

  public getColliderLeft(): number { return this.colliderLeft; }

  public setColliderLeft(colliderLeft: number): void { this.colliderLeft = colliderLeft; }
  //#endregion

}
