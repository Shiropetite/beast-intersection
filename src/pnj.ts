import { Character } from './character';
import { Dialog } from './dialog';

export class PNJ extends Character {
  private routine: any;
  private name: string;
  private currentAction: any;
  private currentDialog: number;

  constructor(name: string, top: number, left: number, routine: any) {
    super('pnj', 'pnj', top, left);
    this.name = name;
    this.routine = routine;
    this.currentDialog = 0;
  }

  doRoutine(time: string) {
    if(Object.keys(this.routine).includes(time)) {
      this.currentDialog = 0;
      this.currentAction = this.routine[time];
      console.log(this.currentAction.text);

      if(this.currentAction.position) {
        this.move(this.currentAction.position.top, this.currentAction.position.left)
      }
    }
  }

  interact(dialog: Dialog) {
    if(dialog.isVisible()) {
      if(this.currentAction.dialog.length > this.currentDialog) {
        if(dialog.haveChoice()) {
          dialog.update(this.currentAction.dialog[this.currentDialog][dialog.getChoice()]);
          this.currentDialog++;
          return;
        }
        else {
          dialog.update(this.currentAction.dialog[this.currentDialog].text);
        }
        
        if(this.currentAction.dialog[this.currentDialog]?.choice === true) {
          dialog.addChoice();
        }
        else {
          this.currentDialog++;
        }
        
      }
      else {
        dialog.hide();
        this.currentDialog = 0;
      }
    }
    else {
      dialog.update(this.currentAction.dialog[this.currentDialog].text);
      dialog.show();
      this.currentDialog++;
    }
  }

  move(finalTop: number, finalLeft: number) {
    const steps = 64 * 2;
    const finTop = finalTop * 2 * 64
    const finTLeft = finalLeft * 2 * 64
    
    const walk = setInterval(() => {
      const top = this.getTop();
      const left = this.getLeft();

      if(top === finTop && left === finTLeft) { clearInterval(walk) }

      if(top < finTop && !this.colide(top + steps, left)) {
        super.setTop(top + steps)
        super.updateHTML();
        return;
      }

      if(top > finTop && !this.colide(top - steps, left)) {
        super.setTop(top - steps)
        super.updateHTML();
        return;
      }

      if(left < finTLeft && !this.colide(top, left + steps)) {
        super.setLeft(left + steps)
        super.updateHTML();
        return;
      }

      if(left > finTLeft && !this.colide(top, left - steps)) {
        super.setLeft(left - steps)
        super.updateHTML();
        return;
      }
    }, 200)

  }

  getAction() { return this.currentAction }
}

