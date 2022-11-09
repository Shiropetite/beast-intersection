import { colliders } from "..";

export class ColliderEntity {
  
  private colliderTop: number;
  private colliderLeft: number;
  private colliderHeight: number;
  private colliderWidth: number;

  public constructor(colliderTop: number, colliderLeft: number, colliderHeight: number, colliderWidth: number) {
    this.colliderTop = colliderTop;
    this.colliderLeft = colliderLeft;
    this.colliderHeight = colliderHeight;
    this.colliderWidth = colliderWidth;
  }

  public isCollidingWith(other: ColliderEntity): boolean {
    return (this.colliderLeft + this.colliderWidth) > other.colliderLeft && this.colliderLeft < (other.colliderLeft + other.colliderWidth)
      && (this.colliderTop + this.colliderHeight) > other.colliderTop && this.colliderTop < (other.colliderTop + other.colliderHeight);
  }

  public isColliding(): boolean {
    for (let collider of colliders) {
      if (this.isCollidingWith(collider) && this !== collider) { return true; }
    }

    return false;
  }

}
