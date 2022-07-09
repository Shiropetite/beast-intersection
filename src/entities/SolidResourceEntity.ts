import { box, player } from "..";
import { ResourceItem } from "../items/ResourceItem";
import { PersonState } from "./PlayerEntity";
import { SolidEntity } from "./SolidEntity";
import { InventoryController } from './../controllers/InventoryController';
import { Talking } from "../actions/Talking";

export class SolidResourceEntity extends SolidEntity {
  private static CURRENT_ID: number = 1;
  private drops: { item: ResourceItem, rate: number }[];

  constructor(name: string, top: number, left: number, drops: { item: ResourceItem, rate: number }[]) {
    super(`${ name }-${ SolidResourceEntity.CURRENT_ID++ }`, name, box - 6, box - 6, top, left, (box - 6) * 3, (box - 6) * 3, top - box - 6, left - box - 6);
    this.drops = drops;
    super.updateHtmlElement();
  }

  public act(): void {
    if (player.getState() === PersonState.IDLE) {
      player.setState(PersonState.ACTING);

      // roll drop
      let drop = this.rollDrop();
      
      // add drop in inventory
      if (drop) {
        InventoryController.addItem(drop);
        Talking.startDialog([{ text: `Vous ramassez 1 ${ drop.getName() } !`, isChoice: false }]);
      }
      
    }
    else {
      Talking.displaySentence();
      player.setState(PersonState.IDLE);
    }
  }

  public rollDrop(): ResourceItem {
    let r = Math.random();
    for (let drop of this.drops) {
      if (r < drop.rate) return drop.item;
    }

    return null;
  }

}