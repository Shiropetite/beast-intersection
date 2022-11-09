export class TriggerEntity {

  private triggerTop: number;
  private triggerLeft: number;
  private triggerHeight: number;
  private triggerWidth: number;

  public constructor(triggerTop: number, triggerLeft: number, triggerHeight: number, triggerWidth: number) {
      this.triggerTop = triggerTop;
      this.triggerLeft = triggerLeft;
      this.triggerHeight = triggerHeight;
      this.triggerWidth = triggerWidth;
  }

  public isTriggeredBy(other: TriggerEntity): boolean {
    return (this.triggerLeft + this.triggerWidth) > other.triggerLeft && this.triggerLeft < (other.triggerLeft + other.triggerWidth)
      && (this.triggerTop + this.triggerHeight) > other.triggerTop && this.triggerTop < (other.triggerTop + other.triggerHeight);
  }

}