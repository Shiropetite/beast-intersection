import { MapCell } from "../entities";
import { CameraUI } from ".";

export class MapUI {

  private static instance: MapUI;
  private html: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static getInstance(): MapUI {
    if (!MapUI.instance) {
      MapUI.instance = new MapUI();
    }

    return MapUI.instance;
  }
  //#endregion

  /**
   * Create html of map
   */
  public create(): void {
    const cameraHTML = document.createElement('div');
    cameraHTML.id = 'map';
    cameraHTML.classList.add('map');
    
    CameraUI.getInstance().add(cameraHTML);
  
    // store camera HTML
    this.html = document.getElementById('map');
  }

  /**
   * remove map from camera
   */
  public destroy(): void {
    CameraUI.getInstance().remove(this.html);
    this.html = null;
  }

  public isMap(): boolean {
    return this.html !== null;
  }

  /**
   * Add child div in map div
   * @param child
   */
  public add(child: HTMLElement): void {
    this.html.appendChild(child);
  }

  /**
   * Add child div in map div
   * @param child 
   */
  public remove(child: HTMLElement): void {
    this.html.removeChild(child);
  }

  /**
   * Build map from mapService
   * @param root 
   * @param x 
   * @param y 
   * @returns 
   */
  public build(root: MapCell, x: number = 0, y: number = 0) {
    if (!root) return;
    
    const mapCellDiv = document.createElement('div');
    mapCellDiv.classList.add("cell");
    mapCellDiv.classList.add(root.getSprite() === 'W' ? 'water' : 'ground');
  
    mapCellDiv.style.top = `${y}px`;
    mapCellDiv.style.left = `${x}px`;
  
    this.add(mapCellDiv);
  
    // Process map line
    this.build(root.getRight(), x + MapCell.MAP_CELL_SIZE, y);
    // Process map column
    if (x < 1) this.build(root.getDown(), x, y + MapCell.MAP_CELL_SIZE);
  }

}