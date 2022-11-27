import { TimeService } from ".";
import { PlayerEntity, PlayerStates } from '../entities';
import { Item } from "../items";
import { InventoryUI } from "../ui";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class InventoryService implements InputSignalListener {

  private static instance: InventoryService;
  private keyPressed: boolean = false;
  private capacity: number;
  private content: { item: Item, amount: number }[];

  private constructor() { }

  public static get(): InventoryService {
    if (!InventoryService.instance) { InventoryService.instance = new InventoryService(); }
    return InventoryService.instance;
  }

  public init(capacity: number, content: { item: Item, amount: number }[]) {
    this.capacity = capacity;
    this.content = content

    InventoryUI.get().create(this.capacity);
  }

  public onKeyPressed(key: string): boolean {
    if (this.keyPressed === true) return false;
    this.keyPressed = true;
    if (key === ActionKeys.INVENTORY) {
        if (PlayerEntity.get().getState() === PlayerStates.IDLE) { this.open(); }
        else if (PlayerEntity.get().getState() === PlayerStates.MENUING) { this.close(); }
        setTimeout(() => { this.keyPressed = false; }, 500);
        return true;
    }
    setTimeout(() => { this.keyPressed = false; }, 500);
    return false;
  }

  public add(item: Item): boolean {
    // search existing stack of item in inventory
    const stack = this.content.filter(s => s.amount < 99).find((cell => cell.item.getName() === item.getName()));
    // increase amount of existing stack
    if (stack) {
      stack.amount++;
      InventoryUI.get().add(this.content, this.content.indexOf(stack));
    }
    // create stack if inventory is not full
    else if (this.content.length < this.capacity) {
      this.content.push({ item, amount: 1 });
      InventoryUI.get().add(this.content, this.content.length - 1);
    }
    // inventory is full and item was not added
    else { return false; }
    // item was added
    return true;
  }

  public remove(itemIndex: number): void {
    this.content = this.content.filter((_, index) => index !== itemIndex);
  }

  /**
   * 
   */
  private open(): void {
    PlayerEntity.get().setState(PlayerStates.MENUING);
    InventoryUI.get().show();
    TimeService.get().stop();
  }

  /**
   * 
   */
  private close(): void {
    PlayerEntity.get().setState(PlayerStates.IDLE);
    InventoryUI.get().hide();
    TimeService.get().start();
  }

}