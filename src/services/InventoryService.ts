import { Item } from "../items";
import { InventoryUI } from "../ui";
import { TimeService } from ".";

export class InventoryService {
  private static capacity: number;
  private static content: { item: Item, amount: number }[];

  public static init(capacity: number, content: { item: Item, amount: number }[]) {
    this.capacity = capacity;
    this.content = content

    InventoryUI.create();
  }

  public static addItem(item: Item): boolean {
    // inventory is full
    if (this.content.length === this.capacity) {
      return false;
    }

    // search existing stack of item to add
    const stack = this.content.filter(s => s.amount < 99).find((cell => cell.item.getName() === item.getName()));
    // increase amount of existing stack
    if (stack) {
      stack.amount++;
      InventoryUI.setContent(this.content.indexOf(stack));
    }
    // create stack
    else {
      this.content.push({ item, amount: 1 });
      InventoryUI.setContent(this.content.length - 1);
    }
    
    return true;
  }

  public static removeItem(itemIndex: number): void {
    this.content = this.content.filter((_, index) => index !== itemIndex);
  }

  public static getContent(): { item: Item, amount: number }[] {
    return this.content;
  }

  public static getCapacity(): number {
    return this.capacity;
  }

  public static openInventory(): void {
    InventoryUI.show();

    TimeService.stop();
  }

  public static closeInventory(): void {
    InventoryUI.hide();

    TimeService.start();
  }

}
