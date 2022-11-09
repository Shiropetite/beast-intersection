import { ColliderEntity } from ".";
import { box } from "../utils";

export class TriggerEntity {

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

  public isTriggeredByTrigger(other: TriggerEntity): boolean {
    return (this.left + this.width) > other.left && this.left < (other.left + other.width)
      && (this.top + this.height) > other.top && this.top < (other.top + other.height);
  }

  public isTriggeredByCollider(other: ColliderEntity): boolean {
    return (this.left + this.width) > other.getLeft() && this.left < (other.getLeft() + other.getWidth())
      && (this.top + this.height) > other.getTop() && this.top < (other.getTop() + other.getHeight());
  }

  public getTop(): number { return this.top; }

  public getLeft(): number { return this.left; }

  public moveUp() { this.top -= box; }

  public moveDown() { this.top += box; }

  public moveLeft() { this.left -= box; }

  public moveRight() { this.left += box; }

}