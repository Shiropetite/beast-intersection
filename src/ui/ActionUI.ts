import { camera } from "..";

export class ActionUI {
  private static action: HTMLElement;

  public static create(): void {
    // create fishHP container HTML
    const actionHTML = document.createElement('div');
    actionHTML.id = `action`;
    actionHTML.classList.add('action')
    camera.appendChild(actionHTML);

    // store HTML
    ActionUI.action = document.getElementById('action');
  }

  public static destroy(): void {
    camera.removeChild(document.getElementById(`action`));
  }

  // public static updateAction(action: Action): void {
  //   if(this.action.classList.length > 1) {
  //     this.action.classList.remove(this.action.classList.item(1));
  //   }
  //   if(action !== 'none') {
  //     this.action.classList.add(`action-${action}`)
  //   }
  // }

}
