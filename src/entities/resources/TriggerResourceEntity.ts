import { TriggerEntity, PersonState } from '..';
import { FishingService, FishingState, TalkingService, InventoryService } from '../../services';
import { Item, FishingToolItem, ToolType } from '../../items';
import { box } from '../../utils';
import { player, removeFromTrigger } from '../..';

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
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box, box, spriteTop, spriteLeft, (box) * 3, (box) * 3, spriteTop - box, spriteLeft - box);
    }
    else {
      super(`${ name }-${ TriggerResourceEntity.CURRENT_ID++ }`, name, box, box, spriteTop, spriteLeft);
    }

    this.drop = drop;
    this.behaviour = behaviour;

    super.update();
  }

  public act(): void {

    if(player.getState() === PersonState.TALKING) {
      const isEnd = TalkingService.talk();
      if(isEnd) player.setState(PersonState.IDLE);
      return
    }
    
    // resource is a fish
    if (this.behaviour === ResourceEntityBehaviour.FISHING) {
      // fishing rod not equipped
      if (player.getToolEquiped().getToolType() !== ToolType.FISHING) return;
      
      // fishing has not started
      if (player.getState() === PersonState.IDLE) {
        player.setState(PersonState.ACTING);
        FishingService.start(this, player.getToolEquiped() as FishingToolItem);
        return;
      }
      // fishing has started
      else {
        const fishingstate = FishingService.fish(player.getToolEquiped() as FishingToolItem);

        // pick up fish
        if (fishingstate === FishingState.PICK_UP) {
          player.setState(PersonState.IDLE);
          this.behaviour = ResourceEntityBehaviour.PICKUP
        }
        else if (fishingstate) {
          TalkingService.start([{ sentence: `Le poisson s'est enfui...`, isQuestion: false }]);
          player.setState(PersonState.TALKING)
        }
        // fishing is not over
        else {
          return;
        }
      }
    }

    if (this.behaviour === ResourceEntityBehaviour.PICKUP) {
      // pick up drop
      if (player.getState() === PersonState.IDLE) {
        player.setState(PersonState.ACTING);

        // destroy on pickup
        super.destroy();

        InventoryService.addItem(this.drop);
        TalkingService.start([{ sentence: `Vous ramassez 1 ${ this.drop.getName() } !`, isQuestion: false }]);
      }
      else {
        TalkingService.talk();
        player.setState(PersonState.IDLE);

        removeFromTrigger(this);
      }
    }
    
  }

  public getDrop(): Item {
    return this.drop;
  }
  
}
