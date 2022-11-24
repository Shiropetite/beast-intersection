import { CameraUI } from '.';
import { Item } from '../items';

export class InventoryUI {

  private static instance: InventoryUI;

  private inventory: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static get(): InventoryUI {
    if (!InventoryUI.instance) {
      InventoryUI.instance = new InventoryUI();
    }

    return InventoryUI.instance;
  }
  //#endregion

  public create(size: number): void {
    // create inventory HTML
    const inventoryHTML = document.createElement('div');
    inventoryHTML.id = "inventory"
    inventoryHTML.classList.add('inventory');

    for (let i = 0; i < size / 10; i++) {
      const inventoryLineHTML = document.createElement('tr');
      inventoryLineHTML.id = i.toString();
      
      for (let j = 0; j < 10; j++) {
        const itemHTML = document.createElement('td');
        itemHTML.id = `${ i }-${ j }`;
        inventoryLineHTML.appendChild(itemHTML);
      }

      inventoryHTML.appendChild(inventoryLineHTML);
    }

    CameraUI.get().add(inventoryHTML);

    // store HTML
    this.inventory = document.getElementById("inventory");

    this.hide();
  }

  public show(): void { this.inventory.style.display = 'block'; }

  public hide(): void { this.inventory.style.display = 'none'; }

  public add(content: { item: Item, amount: number }[], index: number): void {
    // find cell in inventory by index
    const line = Math.floor(index / 10);
    const column = index % 10;
    const cell = document.getElementById(`${ line }-${ column }`);

    // update cell content
    const stack = content[index]
    if (cell.classList.length > 0) { cell.classList.remove(cell.classList.item(0)); }
    cell.classList.add(stack.item.getName().split(" ").join("-"))
    cell.innerHTML = `<div class="qty">${ stack.amount }</div>`;
  }

}