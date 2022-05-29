import { box, dialog, hero, inventory, sleep } from ".";
import { Entity } from "./entity";

let ressourceCounter = 0;

export enum ResourceType {
  PIERRE="pierre",
  BRANCHE="branche"
}

export class Resource extends Entity {
  private name: ResourceType; // Espece de poisson

  constructor(name: ResourceType, top: number, left: number, ) {
    super(`ressource-${ressourceCounter++}`, top, left, box - 6, box - 6);
    this.name = name;

    this.create();
    this.update();
  }

  create(): void {
    super.create();
    document.getElementById(this.getId()).classList.add(this.name);
  }

  async interact(): Promise<boolean> {
    hero.setCanInteract(false);
    hero.setCanMove(false);
    
    super.remove();

    dialog.update(`Vous ramassez un ${this.name} !`);
    dialog.show();
   
    inventory.addObject(this.name);

    await sleep(2000);

    dialog.hide();

    hero.setCanInteract(true);
    hero.setCanMove(true);
    return true;
  }

}