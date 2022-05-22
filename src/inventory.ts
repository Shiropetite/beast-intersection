import { Direction, cameraHTML } from ".";

export class Inventory {
  private readonly htmlElement: HTMLElement;
  private readonly height: number = 4;
  private readonly width: number = 10;
  private tab: any[][] = [];
  private selected: { x: number, y: number } = { x: 0, y: 0 }

  constructor() {
    for(let i = 0; i < this.height; i++) {
      const line = []
      for(let j = 0; j < this.width; j++) {
        line.push(null)
      }
      this.tab.push(line);
    }
   
    this.create();
    this.htmlElement = document.getElementById('inventory');
    this.hide();
  }

  create(): void {
    const element = document.createElement('div');
    this.tab.forEach((line, lineIdx) => {
      const lineHTML = document.createElement('tr');
      lineHTML.id = lineIdx.toString();

      line.forEach((_, itemIdx) => {
        const itemHTML = document.createElement('td');
        itemHTML.id = `${lineIdx}-${itemIdx}`;
        lineHTML.appendChild(itemHTML);
      })
      element.appendChild(lineHTML);
    })

    element.id = 'inventory';
    cameraHTML.appendChild(element);
  }

  update(x: number, y: number): void {
    const cell = document.getElementById(`${y}-${x}`)
    cell.classList.add(this.tab[y][x]);
    cell.innerHTML = this.tab[y][x];
  }

  show(): void {
    this.htmlElement.style.display = 'block';
  }

  hide(): void {
    this.htmlElement.style.display = 'none';
    this.removeSelected();
    this.selected = { x: 0, y: 0 };
    this.addSelected();
  }

  isVisible(): boolean {
    return this.htmlElement.style.display === 'block';
  }

  addObject(object: string): void {
    let isUpdate = false;
    let position: any = {x: 0, y: 0, item: null}

    this.tab.forEach((line, idxLine) => {
      if(isUpdate) return;

      line.forEach((item, idxItem) => {
        if(isUpdate) return;
        if(item === null) {
          position = {x: idxItem, y: idxLine, item: object}
          isUpdate = true;
        }
      })
    })

    this.tab[position.y][position.x] = position.item;
    this.update(position.x, position.y);
  }

  addSelected(): void {
    this.tab.forEach((line, idxLine) => {
      line.forEach((_, idxItem) => {
        if(this.selected.x === idxItem && this.selected.y === idxLine) {
          const cell = document.getElementById(`${idxLine}-${idxItem}`);
          cell.classList.add('selected')
        }
      })
    })
  }

  removeSelected(): void {
    this.tab.forEach((line, idxLine) => {
      line.forEach((_, idxItem) => {
        if(this.selected.x === idxItem && this.selected.y === idxLine) {
          const cell = document.getElementById(`${idxLine}-${idxItem}`);
          cell.classList.remove('selected')
        }
      })
    })
  }

  moveCursor(key: Direction): void {
    this.removeSelected();

    switch(key) {
      case Direction.UP:
        if(this.selected.y > 0) {
          this.selected.y -= 1;
        }
        break;
      case Direction.LEFT:
        if(this.selected.x > 0) {
          this.selected.x -= 1;
        }
        break;
      case Direction.RIGHT:
        if(this.selected.x < this.width - 1) {
          this.selected.x += 1;
        }
        break;
      case Direction.DOWN:
        if(this.selected.y < this.height - 1) {
          this.selected.y += 1;
        }
        break;
    }

    this.addSelected();
  }

}