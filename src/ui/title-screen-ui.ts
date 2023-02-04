import { UI } from ".";
import { app } from "../main";

/**
 * Manage title screen HTML
 */
export class TitleScreenUI implements UI {

  //#region Singleton
  private static instance: TitleScreenUI;

  public static get(): TitleScreenUI {
    if (!this.instance) {
      this.instance = new TitleScreenUI();
    }

    return this.instance;
  }
  //#endregion

  /**
   * Build the title screen HTML
   */
  buildHtml(): void {
    app.innerHTML = 
    `<div class="camera">
      <div class="fit column justify-center items-center gap-16">
        <div class="title">🍃 Beast Intersection 🍃</div>
        <div id="play" class="button">Jouer</div>
        <div id="parameter" class="button">Paramètres</div>
      </div>
    </div>`;
  }

  /**
   * Update active class on the selected button
   * @param id 
   */
  active(newId: string, lastId?: string): void {
    if (lastId) {
      document.getElementById(lastId)!.classList.remove("active");
    }
    document.getElementById(newId)!.classList.add("active");
  }

}