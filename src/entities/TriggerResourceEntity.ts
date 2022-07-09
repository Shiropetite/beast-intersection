import { box, player } from '..';
import { Talking } from '../actions/Talking';
import { PersonState } from './PlayerEntity';
import { TriggerEntity } from './TriggerEntity';
import { ResourceItem } from './../items/ResourceItem';
import { InventoryController } from './../controllers/InventoryController';

// Objects that can be picked up by the player
export class TriggerResourceEntity extends TriggerEntity {
  private static CURRENT_ID: number = 1;
  private drop: ResourceItem;

  constructor(name: string, top: number, left: number, drop: ResourceItem) {
    super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, top, left);

    this.drop = drop;
    super.updateHtmlElement();
  }

  public act(): void {
    if (player.getState() === PersonState.IDLE) {
      player.setState(PersonState.ACTING);

      // destroy on pickup
      super.destroyHtmlElement();

      InventoryController.addItem(this.drop);
      Talking.startDialog([{ text: `Vous ramassez 1 ${ this.drop.getName() } !`, isChoice: false }]);
    }
    else {
      Talking.displaySentence();
      player.setState(PersonState.IDLE);
    }
  }
  
}
