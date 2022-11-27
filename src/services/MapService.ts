import { PlayerEntity } from "../entities";
import { MapCell, MapCellContent } from "../map/MapCell";
import { MapTeleporter } from "../map/MapTeleporter";
import { PlayerMoveSignalListener, PlayerMoveSignalSender } from "../signals";
import { MapUI } from "../ui";

export type MapConfig = {
  map: string[][],
  initMap: () => void
}

export class MapService implements PlayerMoveSignalListener {
  
  private static instance: MapService;
  
  private rootMapCell: MapCell | null = null;

  //#region Singleton
  private constructor() {}

  public static get(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }

    return MapService.instance;
  }
  //#endregion

  onMove(): void {
    MapUI.get().move();
  }

  /**
   * Create map cells and html from array of character
   * @param mapArray 
   */
  public createMap(mapArray: MapConfig) {
    this.createMapCells(mapArray.map);
    if (MapUI.get().isMap()) { MapUI.get().destroy(); }
    MapUI.get().create();
    MapUI.get().build(this.rootMapCell);
    mapArray.initMap()
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
        cells[i].push(new MapCell(i, j, mapArray[i][j], mapArray[i][j] === 'W'));
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

  public initEntityMapCell(content: MapCellContent, y: number, x: number): void {
    const entitiesCell = this.getMapCell(this.rootMapCell, y, x);
    entitiesCell.createContent(content);
  }

  public initPlayerMapCell(y: number, x: number): void {
    this.initEntityMapCell(PlayerEntity.get(), y, x);
    MapUI.get().move();
  }

  addTeleporter(teleporter: MapTeleporter, y: number, x: number): void {
    const teleporterCell = this.getMapCell(this.rootMapCell, y, x);
    teleporterCell.setTeleporter(teleporter);
    PlayerMoveSignalSender.get().register(teleporterCell);
  }
  
}