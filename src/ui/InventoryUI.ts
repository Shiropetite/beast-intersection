import { camera, player } from '..';
import { PersonState } from '../entities';
import { InventoryService } from '../services';

export class InventoryUI {
  private static inventory: HTMLElement;

  public static create(): void {
    // create inventory HTML
    const inventoryHTML = document.createElement('div');
    inventoryHTML.id = "inventory"
    inventoryHTML.classList.add('inventory');

    for (let i = 0; i < InventoryService.getInstance().getCapacity() / 10; i++) {
      const inventoryLineHTML = document.createElement('tr');
      inventoryLineHTML.id = i.toString();
      
      for (let j = 0; j < 10; j++) {
        const itemHTML = document.createElement('td');
        itemHTML.id = `${ i }-${ j }`;
        inventoryLineHTML.appendChild(itemHTML);
      }

      inventoryHTML.appendChild(inventoryLineHTML);
    }

    camera.appendChild(inventoryHTML);

    // store HTML
    InventoryUI.inventory = document.getElementById("inventory");

    InventoryUI.hide();
  }

  public static show(): void {
    player.setState(PersonState.MENUING);
    InventoryUI.inventory.style.display = 'block';
  }

  public static hide(): void {
    player.setState(PersonState.IDLE);
    InventoryUI.inventory.style.display = 'none';
  }

  public static isVisible(): boolean {
    return InventoryUI.inventory.style.display === 'block';
  }

  public static setContent(index: number): void {
    // find cell in inventory by index
    const line = Math.floor(index / 10);
    const column = index % 10;
    const cell = document.getElementById(`${ line }-${ column }`);

    // update cell content
    const stack = InventoryService.getInstance().getContent()[index]
    if(cell.classList.length > 0) {
      cell.classList.remove(cell.classList.item(0))
    }
    cell.classList.add(stack.item.getName().split(" ").join("-"))
    cell.innerHTML = `<div class="qty">${ stack.amount }</div>`;
  }

}
