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
    const steps = 42;
    
    const walk = setInterval(() => {
      const top = this.getTop();
      const left = this.getLeft();

      if(top === finalTop && left === finalLeft) { clearInterval(walk) }

      if(top < finalTop && !this.colide(top + steps, left)) {
        super.setTop(top + steps)
        this.update();
        return;
      }

      if(top > finalTop && !this.colide(top - steps, left)) {
        super.setTop(top - steps)
        this.update();
        return;
      }

      if(left < finalLeft && !this.colide(top, left + steps)) {
        super.setLeft(left + steps)
        this.update();
        return;
      }

      if(left > finalLeft && !this.colide(top, left - steps)) {
        super.setLeft(left - steps)
        this.update();
        return;
      }
    }, 200)

  }

  getAction() { return this.currentAction }
}

