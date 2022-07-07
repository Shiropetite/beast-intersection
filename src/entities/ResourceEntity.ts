import { box, player } from '..';
import { Talking } from '../actions/Talking';
import { PersonState } from '../entities/PlayerEntity';
import { TriggerEntity } from './../entities/TriggerEntity';

// Objects that can be picked up by the player
export class ResourceEntity extends TriggerEntity {

  private static CURRENT_ID: number = 1;
  private name: string;

  constructor(name: string, top: number, left: number) {
    super(`${name}-${ResourceEntity.CURRENT_ID++}`, name, box - 6, box - 6, top, left);
    this.name = name;

    super.updateHtmlElement();
  }

  public act(): void {
    if(player.getState() === PersonState.IDLE) {
      player.setState(PersonState.ACTING);

      // destroy on pickup
      super.destroyHtmlElement();

      // TODO: Ajouter dans l'inventaire
      
      // trigger pickup dialog
      Talking.startDialog([{ text: `Vous ramassez 1 ${this.name} !`, isChoice: false }]);
    }
    else {
      Talking.displaySentence();
      player.setState(PersonState.IDLE);
    }

  }

}
