import { ColliderEntity } from "../ColliderEntity";
import { Talking } from "../../actions/Talking";
import { Item } from '../../items/Item';
import { PersonState } from "../persons/PersonEntity";
import { box } from "../../utils";
import { player } from "../..";
import { InventoryService } from './../../services/InventoryService';

export class ColliderResourceEntity extends ColliderEntity {
  private static CURRENT_ID: number = 1;
  private readonly drops: { item: Item, rate: number }[];

  constructor(name: string, spriteTop: number, spriteLeft: number, drops: { item: Item, rate: number }[]) {
    super(`${ name }-${ ColliderResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, spriteTop, spriteLeft, (box - 6) * 3, (box - 6) * 3, spriteTop - box - 6, spriteLeft - box - 6);
    
    this.drops = drops;

    super.update();
  }

  public act(): void {
    if (player.getState() === PersonState.IDLE) {
      player.setState(PersonState.ACTING);

      // roll drop
      let drop = this.rollDrop();
      
      // add drop in inventory
      if (drop) {
        InventoryService.addItem(drop);
        Talking.start([{ sentence: `Vous ramassez 1 ${ drop.getName() } !`, isQuestion: false }]);
      }
    }
    else {
      Talking.talk();
      player.setState(PersonState.IDLE);
    }
  }

  private rollDrop(): Item {
    let r = Math.random();
    for (let drop of this.drops) {
      if (r < drop.rate) return drop.item;
    }

    return null;
  }

}
