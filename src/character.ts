import { box, colisions, isColliding } from ".";
import { DisplayedElement } from './displayedElement';

export class Character extends DisplayedElement {

  //#region Constructor
  public constructor(id: string, className: string, top: number, left: number) {
    super(id, className, box - 6, box - 6, top, left);

    super.createHTML();
    super.updateHTML();
  }
  //#endregion

  //#region Methods
  colide(top: number, left: number): boolean {
    let isColision = false;

    colisions.forEach((colision) => {
      if(isColision === true) return;

      const width = colision?.width ?? colision?.size;
      const height = colision?.height ?? colision?.size;

      isColision = isColliding(top, left, super.getWidth(), super.getHeight(), colision.top, colision.left, width, height);
    })

    return isColision;
  }
  //#endregion

}