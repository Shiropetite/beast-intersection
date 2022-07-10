import { cameraHTML } from '..';
import { InventoryController } from './../controllers/InventoryController';
import { player } from '..';
import { PersonState } from '../entities/PlayerEntity';

export class InventoryElement {
  private static inventoryHTML: HTMLElement;

  public static createHTMLElement(): void {
    const element = document.createElement('div');
    element.id = "inventory"
    element.classList.add('inventory');

    for (let i = 0; i < InventoryController.getCapacity() / 10; i++) {
      const lineHTML = document.createElement('tr');
      lineHTML.id = i.toString();
      
      for (let j = 0; j < 10; j++) {
        const itemHTML = document.createElement('td');
        itemHTML.id = `${ i }-${ j }`;
        lineHTML.appendChild(itemHTML);
      }

      element.appendChild(lineHTML);
    }

    cameraHTML.appendChild(element);

    InventoryElement.inventoryHTML = document.getElementById("inventory");
    InventoryElement.hide();
  }

  public static update(index: number): void {
    const line = Math.floor(index / 10);
    const column = index % 10;
    const cell = document.getElementById(`${ line }-${ column }`);
    const stack = InventoryController.getInventory()[index]
    cell.innerHTML = `${ stack.unit } ${ stack.item.getName() }`;
  }

  public static show(): void {
    player.setState(PersonState.MENUING);
    InventoryElement.inventoryHTML.style.display = 'block';
  }

  public static hide(): void {
    player.setState(PersonState.IDLE);
    InventoryElement.inventoryHTML.style.display = 'none';
  }

  public static isVisible(): boolean {
    return InventoryElement.inventoryHTML.style.display === 'block';
  }

}
