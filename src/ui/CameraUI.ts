export class CameraUI {

  private static instance: CameraUI;
  private html: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static getInstance(): CameraUI {
    if (!CameraUI.instance) {
      CameraUI.instance = new CameraUI();
    }

    return CameraUI.instance;
  }
  //#endregion

  /**
   * Create html of camera
   */
  public create(): void {
    const cameraHTML = document.createElement('div');
    cameraHTML.id = 'camera';
    cameraHTML.classList.add('camera');
    
    document.body.appendChild(cameraHTML);
  
    // store camera HTML
    this.html = document.getElementById('camera');
  }

  /**
   * Add child div in camera div
   * @param child
   */
  public add(child: HTMLElement): void {
    this.html.appendChild(child);
  }

  /**
   * Add child div in camera div
   * @param child 
   */
  public remove(child: HTMLElement): void {
    this.html.removeChild(child);
  }

}