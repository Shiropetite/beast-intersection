import { box, player, triggerEntities } from '..';
import { Talking } from '../actions/Talking';
import { PersonState } from './PlayerEntity';
import { TriggerEntity } from './TriggerEntity';
import { InventoryController } from './../controllers/InventoryController';
import { Fishing } from './../actions/Fishing';
import { Item } from '../items/Item';

export enum ResourceEntityBehaviour {
  PICKUP,
  FISHING,
  CATCHING
}

// Objects that can be picked up by the player
export class TriggerResourceEntity extends TriggerEntity {
  private static CURRENT_ID: number = 1;
  private drop: Item;
  private behaviour: ResourceEntityBehaviour;

  constructor(name: string, top: number, left: number, drop: Item, behaviour: ResourceEntityBehaviour = ResourceEntityBehaviour.PICKUP) {
    if (behaviour === ResourceEntityBehaviour.FISHING) {
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, top, left, (box - 6) * 3, (box - 6) * 3, top - box - 6, left - box - 6);
    }
    else {
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, top, left);
    }

    this.drop = drop;
    this.behaviour = behaviour;

    super.updateHtmlElement();
  }

  public act(): void {
    // resource is a fish
    if (this.behaviour === ResourceEntityBehaviour.FISHING) {
      // fishing has not started
      if (player.getState() === PersonState.IDLE) {
        player.setState(PersonState.ACTING);
        Fishing.start(this);
        return;
      }
      // fishing has started
      else {
        const fishingIsOver = Fishing.fishing();
        // pick up fish
        if (fishingIsOver) {
          player.setState(PersonState.IDLE);
          this.behaviour = ResourceEntityBehaviour.PICKUP
        }
        // fishing is not over
        else {
          return;
        }
      }
    }

    // pick up
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

  public getDrop(): Item {
    return this.drop;
  }
  
}
