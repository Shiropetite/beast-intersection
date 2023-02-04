import { app } from "../app";

export class TitleScreenUI {

  //#region Singleton
  private static instance: TitleScreenUI;

  public static get(): TitleScreenUI {
    if (!this.instance) {
      this.instance = new TitleScreenUI();
    }
    return this.instance;
  }
  //#endregion

  build(): void {
    let html = 
    `<div class="camera">
      <div class="fit column justify-center items-center gap-16">
        <div class="title">🍃 Beast Intersection 🍃</div>
        <div id="play" class="button">Jouer</div>
        <div id="settings" class="button">Paramètres</div>
      </div>
    </div>`;
    app.innerHTML = html;
  }

  public select(id: string): void {
    document.getElementById(id)!.classList.add("active");
  }

  public unselect(id: string): void {
    document.getElementById(id)!.classList.remove("active");
  }
}
