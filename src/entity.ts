import { isColliding } from ".";
import { DisplayedElement } from './displayedElement';

export class Entity extends DisplayedElement {
  private readonly hitWidth: number;
  private readonly hitHeight: number;
  private hitTop: number;
  private hitLeft: number;

  //#region Constructor
  public constructor(id: string, className: string, width: number, height: number, top: number, left: number);
  public constructor(id: string, className: string, width: number, height: number, top: number, left: number, hitTop: number, hitLeft: number, hitWidth: number, hitHeight: number);
  public constructor(...parameters: any[]) { 
    super(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5])

    if(parameters.length <= 6) {
      this.hitTop = 0;
      this.hitLeft = 0;
      this.hitWidth = this.getWidth();
      this.hitHeight = this.getHeight();
    }
    else {
      this.hitTop = parameters[6];
      this.hitLeft = parameters[7];
      this.hitWidth = parameters[8];
      this.hitHeight = parameters[9];
    }
  }
  //#endregion

  //#region Method
  async interact(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  colide(top: number, left: number, width: number, height: number) {
    return isColliding(
      this.getTop() + this.hitTop, 
      this.getLeft() + this.hitLeft, 
      this.hitWidth, 
      this.hitHeight, 
      top, 
      left, 
      width, 
      height
    );
  }
  //#endregion

}