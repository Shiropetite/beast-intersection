import { colliders } from "..";
import { box } from "../utils";

export class ColliderEntity {
  
  private top: number;
  private left: number;
  private height: number;
  private width: number;

  public constructor(top: number, left: number, height: number, width: number) {
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;
  }

  public isColliding(): boolean {
    for (let collider of colliders) {
      if (this.isCollidingWith(collider) && this !== collider) { return true; }
    }

    return false;
  }

  public isCollidingWith(other: ColliderEntity): boolean {
    return (this.left + this.width) > other.left && this.left < (other.left + other.width)
      && (this.top + this.height) > other.top && this.top < (other.top + other.height);
  }

  public isOnPosition(positionTop: number, positionLeft: number) {
    return this.top === (positionTop * box) && this.left === (positionLeft * box);
  }

  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }

  public getHeight(): number { return this.height; }

  public getWidth(): number { return this.width; }

  public moveUp() { this.top -= box; }

  public moveDown() { this.top += box; }

  public moveLeft() { this.left -= box; }

  public moveRight() { this.left += box; }

}