import { box, dialog, player, inventory, sleep } from ".";
import { Entity } from "./entity";
import { PlayerState } from "./entities/PlayerEntity";

let ressourceCounter = 0;

export enum ResourceType {
  PIERRE="pierre",
  BRANCHE="branche"
}

export class Resource extends Entity {
  private name: ResourceType; // Espece de poisson

  constructor(name: ResourceType, top: number, left: number, ) {
    super(`ressource-${ressourceCounter++}`, name, box - 6, box - 6, top, left);
    this.name = name;

    this.createHTML();
    this.updateHTML();
  }

  createHTML(): void {
    super.createHTML();
    document.getElementById(this.getId()).classList.add(this.name);
  }

  async interact(): Promise<boolean> {
    player.setState(PlayerState.ACTING);
    
    super.removeHTML();

    dialog.update(`Vous ramassez un ${this.name} !`);
    dialog.show();
   
    inventory.addObject(this.name);

    await sleep(2000);

    dialog.hide();

    player.setState(PlayerState.IDLE);
    return true;
  }

}