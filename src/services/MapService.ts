import { MapCell, PlayerEntity } from "../entities";
import { MapUI } from "../ui";

export class MapService {

  private static instance: MapService;
  private rootMapCell: MapCell | null = null;

  //#region Singleton
  private constructor() {}

  public static getInstance(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }

    return MapService.instance;
  }
  //#endregion

  /**
   * Create map cells and html from array of character
   * @param mapArray 
   */
  public buildMap(mapArray: string[][]) {
    this.createMapCells(mapArray);
    if (MapUI.getInstance().isMap()) { MapUI.getInstance().destroy(); }
    MapUI.getInstance().create();
    MapUI.getInstance().build(this.rootMapCell);
  }

  /**
   * Converts strings map into cells map
   * @param mapArray 
   * @returns root MapCell
   */
  private createMapCells = (mapArray: string[][]): void => {
    const cells: MapCell[][] = [];
    
    // For each char in mapArray create a Cell 
    for (let i = 0; i < mapArray.length; i++) {
      cells.push([]);
      for (let j = 0; j < mapArray[i].length; j++) {
        cells[i].push(new MapCell(i, j, mapArray[i][j], mapArray[i][j] === 'G'));
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
   * Get a specific Cell in map with coordinates 
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

  public initPlayerMapCell(y: number, x: number): void {
    const playerMapCell = this.getMapCell(this.rootMapCell, y, x);
    playerMapCell.createContent(PlayerEntity.getInstance());
  }
  
}