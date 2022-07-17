import { box } from '../../utils';
import { ColliderEntity } from '../ColliderEntity';

export enum PersonState {
  IDLE,
  MOVING,
  TALKING,
  ACTING,
  MENUING
}

export enum Direction {
  UP='up',
  DOWN='down',
  LEFT='left',
  RIGHT='right'
}

export abstract class PersonEntity extends ColliderEntity {
  private readonly name: string;
  private state: PersonState = PersonState.IDLE;
  private direction: Direction

  public constructor(name: string, spriteTop: number, spriteLeft: number, npc: boolean) {
    const type = npc ? 'npc' : 'player';
    super(type, type, box, box, spriteTop, spriteLeft);

    if (npc) {
      this.setTriggerWidth((box) * 3);
      this.setTriggerHeight((box) * 3);
      this.setTriggerTop(spriteTop - box);
      this.setTriggerLeft(spriteLeft - box);
    }

    this.name = name;
    
    this.setState(PersonState.IDLE);
    this.direction = Direction.DOWN;
    super.getSprite().classList.add(`${type}-${this.direction}`)

    this.update();
  }

  public update(): void {
    super.update();
    const id = this.getSprite().id;
    super.getSprite().classList.replace(super.getSprite().classList.item(1), `${id}-${this.direction}`)
  }

  //#region Getters & Setters
  public getName(): string {
    return this.name;
  }

  public getState(): PersonState {
    return this.state;
  }

  public setState(state: PersonState): void {
    if (this.state !== state) {
      this.state = state;
    }
  }

  public getDirection(): Direction {
    return this.direction;
  }

  public setDirection(direction: Direction): void {
    this.direction = direction;
  }
  //#endregion
}
