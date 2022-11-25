import { TimeService } from ".";
import { PlayerEntity, PlayerStates } from '../entities';
import { Item } from "../items";
import { InventoryUI } from "../ui";
import { InputSignalListener } from "../signals";
import { ActionKeys } from "../utils";

export class InventoryService implements InputSignalListener {

  private static instance: InventoryService;

  private capacity: number;
  private content: { item: Item, amount: number }[];

  //#region Singleton
  private constructor() { }

  public static get(): InventoryService {
    if (!InventoryService.instance) {
      InventoryService.instance = new InventoryService();
    }

    return InventoryService.instance;
  }
  //#endregion

  public init(capacity: number, content: { item: Item, amount: number }[]) {
    this.capacity = capacity;
    this.content = content

    InventoryUI.get().create(this.capacity);
  }

  public onKeyPressed(keyPressed: string): boolean {
    if (keyPressed === ActionKeys.INVENTORY) {
        if (PlayerEntity.get().getState() === PlayerStates.IDLE) { this.open(); }
        else if (PlayerEntity.get().getState() === PlayerStates.MENUING) { this.close(); }
        return true;
    }
  }

  public open(): void {
    PlayerEntity.get().setState(PlayerStates.MENUING);

    InventoryUI.get().show();
    TimeService.get().stop();
  }

  public close(): void {
    PlayerEntity.get().setState(PlayerStates.IDLE);

    InventoryUI.get().hide();
    TimeService.get().start();
  }

  public add(item: Item): boolean {
    // search existing stack of item to add
    const stack = this.content.filter(s => s.amount < 99).find((cell => cell.item.getName() === item.getName()));
    
    // increase amount of existing stack
    if (stack) {
      stack.amount++;
      InventoryUI.get().add(this.content, this.content.indexOf(stack));
    }
    // create stack if inventory not full
    else if (this.content.length < this.capacity) {
      this.content.push({ item, amount: 1 });
      InventoryUI.get().add(this.content, this.content.length - 1);
    }
    // inventory full
    else { return false; }
    
    return true;
  }

  public remove(itemIndex: number): void {
    this.content = this.content.filter((_, index) => index !== itemIndex);
  }

}