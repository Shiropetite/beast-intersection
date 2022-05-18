import { Character } from './character';

export class PNJ extends Character {
  private routine: any;
  private name: string;
  private currentAction: any;

  constructor(name: string, top: number, left: number, routine: any) {
    super('pnj', top, left);
    this.name = name;
    this.routine = routine;
  }

  doRoutine(time: string) {
    if(Object.keys(this.routine).includes(time)) {
      this.currentAction = this.routine[time];
      console.log(this.currentAction.text);

      if(this.currentAction.position) {
        this.move(this.currentAction.position.top, this.currentAction.position.left)
      }
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
        this.update();
        return;
      }

      if(top > finTop && !this.colide(top - steps, left)) {
        super.setTop(top - steps)
        this.update();
        return;
      }

      if(left < finTLeft && !this.colide(top, left + steps)) {
        super.setLeft(left + steps)
        this.update();
        return;
      }

      if(left > finTLeft && !this.colide(top, left - steps)) {
        super.setLeft(left - steps)
        this.update();
        return;
      }
    }, 200)

  }

  getAction() { return this.currentAction }
}

