// import { InventoryUI } from "../ui";
// import { TimeService } from ".";
// import { InputSignalListener } from "../signals/InputSignal";
// import { ActionKeys } from "../utils";

// export class InventoryService implements InputSignalListener {
//   private static instance: InventoryService;

//   private capacity: number;
//   private content: { item: Item, amount: number }[];

//   //#region Singleton
//   private constructor() { }

//   public static getInstance(): InventoryService {
//     if (!InventoryService.instance) {
//       InventoryService.instance = new InventoryService();
//     }

//     return InventoryService.instance;
//   }
//   //#endregion

//   onKeyPressed(keyPressed: string): void {
//     if (keyPressed === ActionKeys.INVENTORY) { 
//       //TODO: open or close inventory
//     }
//   }

//   public init(capacity: number, content: { item: Item, amount: number }[]) {
//     this.capacity = capacity;
//     this.content = content

//     InventoryUI.create();
//   }

//   public addItem(item: Item): boolean {
//     // search existing stack of item to add
//     const stack = this.content.filter(s => s.amount < 99).find((cell => cell.item.getName() === item.getName()));
    
//     // increase amount of existing stack
//     if (stack) {
//       stack.amount++;
//       InventoryUI.setContent(this.content.indexOf(stack));
//     }
//     // create stack if inventory not full
//     else if (this.content.length < this.capacity) {
//       this.content.push({ item, amount: 1 });
//       InventoryUI.setContent(this.content.length - 1);
//     }
//     // inventory full
//     else {
//       return false;
//     }
    
//     return true;
//   }

//   public removeItem(itemIndex: number): void {
//     this.content = this.content.filter((_, index) => index !== itemIndex);
//   }

//   public getContent(): { item: Item, amount: number }[] {
//     return this.content;
//   }

//   public getCapacity(): number {
//     return this.capacity;
//   }

//   public openInventory(): void {
//     InventoryUI.show();

//     TimeService.getInstance().stop();
//   }

//   public closeInventory(): void {
//     InventoryUI.hide();

//     TimeService.getInstance().start();
//   }

// }