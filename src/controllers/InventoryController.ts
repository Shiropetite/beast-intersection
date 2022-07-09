import { Item } from "../items/Item";
import { InventoryElement } from './../ui/InventoryElement';

export class InventoryController {
  private static INVENTORY_CAPACITY: number = 40;
  private static inventory: Item[] = [];

  public static addItem(item: Item): boolean {
    // inventory is full
    if (this.inventory.length === this.INVENTORY_CAPACITY) {
      return false;
    }
    
    this.inventory.push(item);
    InventoryElement.update(this.inventory.length - 1);
    return true;
  }

  public static removeItem(itemIndex: number): void {
    this.inventory = this.inventory.filter((_, index) => index !== itemIndex);
  }

  public static getInventory(): Item[] {
    return this.inventory;
  }

  public static getCapacity(): number {
    return this.INVENTORY_CAPACITY;
  }

}
