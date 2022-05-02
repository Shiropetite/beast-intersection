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
        super.setTop(this.currentAction.position.top);
        super.setLeft(this.currentAction.position.left);
        super.update();
      }
    }
  }

  getAction() { return this.currentAction }
}

