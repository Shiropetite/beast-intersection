import { Talking } from '../../actions/Talking';
import { TriggerEntity } from '../TriggerEntity';
import { Fishing } from '../../actions/Fishing';
import { Item } from '../../items/Item';
import { box } from '../../utils';
import { player } from '../..';
import { PersonState } from '../persons/PersonEntity';
import { InventoryService } from './../../services/InventoryService';

export enum ResourceEntityBehaviour {
  PICKUP,
  FISHING,
  CATCHING
}

export class TriggerResourceEntity extends TriggerEntity {
  private static CURRENT_ID: number = 1;
  private readonly drop: Item;
  private behaviour: ResourceEntityBehaviour;

  constructor(name: string, spriteTop: number, spriteLeft: number, drop: Item, behaviour: ResourceEntityBehaviour = ResourceEntityBehaviour.PICKUP) {
    if (behaviour === ResourceEntityBehaviour.FISHING) {
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, spriteTop, spriteLeft, (box - 6) * 3, (box - 6) * 3, spriteTop - box - 6, spriteLeft - box - 6);
    }
    else {
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, spriteTop, spriteLeft);
    }

    this.drop = drop;
    this.behaviour = behaviour;

    super.update();
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
        const fishingIsOver = Fishing.fish();

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

    // pick up drop
    if (player.getState() === PersonState.IDLE) {
      player.setState(PersonState.ACTING);

      // destroy on pickup
      super.destroy();

      InventoryService.addItem(this.drop);
      Talking.start([{ sentence: `Vous ramassez 1 ${ this.drop.getName() } !`, isQuestion: false }]);
    }
    else {
      Talking.talk();
      player.setState(PersonState.IDLE);
    }
  }

  public getDrop(): Item {
    return this.drop;
  }
  
}
