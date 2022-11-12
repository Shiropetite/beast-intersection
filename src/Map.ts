import { camera } from '.';
import { testMap } from './@shared/assets/maps/test-map';
import { PlayerEntity, NpcEntity } from './entities';

type MapCellContent = PlayerEntity | NpcEntity;

export class Map {

  public mapHtml: HTMLElement = null;

  private static instance: Map;
  
  private rootMapCell: MapCell = null;
  private playerMapCell: MapCell | null = null;

  //#region Singleton
  private constructor() {
    this.buildMap(testMap);
  }

  public static getInstance(): Map {
    if (!Map.instance) {
      Map.instance = new Map();
      Map.instance.setPlayerMapCell();
    }

    return Map.instance;
  }
  //#endregion

  /**
   * 
   * @param mapTab 
   */
  public buildMap(mapTab: string[][]) {
    this.createMapCells(mapTab);
    if (this.mapHtml) { this.destroyMapHtml(); }
    this.createDivMapHtml();
    this.createMapHtml(this.rootMapCell);
  }

  /**
   * Converts strings map into cells map
   * @param mapTab 
   * @returns root MapCell
   */
  private createMapCells = (mapTab: string[][]): void => {
    const cells: MapCell[][] = [];
    
    // For each char in mapTab create a Cell 
    for (let i = 0; i < mapTab.length; i++) {
      cells.push([]);
      for (let j = 0; j < mapTab[i].length; j++) {
        cells[i].push(new MapCell(i, j, mapTab[i][j], mapTab[i][j] === 'W'));
      }
    }
  
    // Link each Cell with its neighbors
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        const currentCell = cells[i][j];
  
        // If neighbor up
        if (i > 0) { currentCell.setUp(cells[i - 1][j]); }
        // If neighbor down
        if (i < cells.length - 1) { currentCell.setDown(cells[i + 1][j]); }
        // If neighbor left
        if (j > 0) { currentCell.setLeft(cells[i][j - 1]); }
        // If neighbor right
       
        if (j < cells[i].length - 1) { currentCell.setRight(cells[i][j + 1]); }
      }
    }
  
    this.rootMapCell = cells[0][0];
  }

  /**
   * 
   */
  private createDivMapHtml = () => {
    const mapHTML = document.createElement('div');
    mapHTML.id = 'map';
    mapHTML.classList.add('map');
    
    camera.appendChild(mapHTML);
  
    // store map HTML
    this.mapHtml = document.getElementById('map');
  }
  
  /**
   * Converts cells map into html elements
   * @param root 
   * @param x 
   * @param y 
   * @returns 
   */
  private createMapHtml = (root: MapCell, x: number = 0, y: number = 0) => {
    if (!root) return;
    
    const mapCellDiv = document.createElement('div');
    mapCellDiv.classList.add("cell");
    mapCellDiv.classList.add(root.getSprite() === 'W' ? 'water' : 'ground');
  
    mapCellDiv.style.top = `${y}px`;
    mapCellDiv.style.left = `${x}px`;
  
    this.mapHtml.appendChild(mapCellDiv);
  
    // Process map line
    this.createMapHtml(root.getRight(), x + MapCell.MAP_CELL_SIZE, y);
    // Process map column
    if (x < 1) this.createMapHtml(root.getDown(), x, y + MapCell.MAP_CELL_SIZE);
  }

  private destroyMapHtml = () => {
    camera.removeChild(this.mapHtml);
    this.mapHtml = null;
  }
  
  /**
   * 
   * @param root 
   * @param y 
   * @param x 
   * @returns 
   */
  public getMapCell = (root: MapCell, y: number, x: number): MapCell => {
    if (!root) return null;
    
    if (root.getY() === (y * MapCell.MAP_CELL_SIZE) && root.getX() === (x * MapCell.MAP_CELL_SIZE)) {
      return root;
    }
  
    const cellDown = this.getMapCell(root.getDown(), y, x);
    if(cellDown) return cellDown;
  
    if (root.getY() === 0) { return this.getMapCell(root.getRight(), y, x); }
  }

  private setPlayerMapCell(): void {
    this.playerMapCell = this.getMapCell(this.rootMapCell, 4, 2);
    this.playerMapCell.addContent(PlayerEntity.getInstance());
  }
  
}

export class MapCell {

  public static readonly MAP_CELL_SIZE = 128;
  
  private readonly sprite: string;
  private readonly taken: boolean;
  private readonly contents: MapCellContent[]; // TODO: create a type

  private up: MapCell | null;
  private down: MapCell | null;
  private left: MapCell | null;
  private right: MapCell | null;

  private y: number;
  private x: number;

  constructor(y: number, x: number, sprite: string, taken: boolean = true) {
    this.sprite = sprite;
    this.taken = taken;
    this.y = y * MapCell.MAP_CELL_SIZE;
    this.x = x * MapCell.MAP_CELL_SIZE;
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
    this.contents = [];
  }

  public addContent(content: MapCellContent): void {
    this.contents.push(content);
    // TODO: updateHtml
    //content.getSprite().update(y, x);
  }

  public getSprite(): string { return this.sprite; }
  
  public isTaken(): boolean { return this.taken; }

  public getUp(): MapCell | null { return this.up; }

  public setUp(up: MapCell | null): void { this.up = up; }
  
  public getDown(): MapCell | null { return this.down; }

  public setDown(down: MapCell | null): void { this.down = down; }
  
  public getLeft(): MapCell | null { return this.left; }

  public setLeft(left: MapCell | null): void { this.left = left; }

  public getRight(): MapCell | null { return this.right; }
  
  public setRight(right: MapCell | null): void { this.right = right; }

  public getY(): number { return this.y; }

  public getX(): number { return this.x; }

}