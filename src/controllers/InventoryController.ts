import { Item } from "../items/Item";
import { InventoryElement } from './../ui/InventoryElement';

export class InventoryController {
  private static INVENTORY_CAPACITY: number = 40;
  private static inventory: { item: Item, unit: number }[] = [];

  public static addItem(item: Item): boolean {
    // inventory is full
    if (this.inventory.length === this.INVENTORY_CAPACITY) {
      return false;
    }

    // stack if inventory already contain unit of item
    const stack = this.inventory.find((cell => cell.item.getName() === item.getName()));
    if (stack && stack.unit < 99) {
      stack.unit++;
      InventoryElement.update(this.inventory.indexOf(stack));
    }
    else {
      this.inventory.push({ item, unit: 1 });
      InventoryElement.update(this.inventory.length - 1);
    }
    
    return true;
  }

  public static removeItem(itemIndex: number): void {
    this.inventory = this.inventory.filter((_, index) => index !== itemIndex);
  }

  public static getInventory(): { item: Item, unit: number }[] {
    return this.inventory;
  }

  public static getCapacity(): number {
    return this.INVENTORY_CAPACITY;
  }
}
