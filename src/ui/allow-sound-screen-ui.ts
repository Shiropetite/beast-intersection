import { app } from "../app";

export class AllowSoundScreenUI {

  //#region Singleton
  private static instance: AllowSoundScreenUI;

  public static get(): AllowSoundScreenUI {
    if (!this.instance) {
      this.instance = new AllowSoundScreenUI();
    }
    return this.instance;
  }
  //#endregion

  public build() {
    let html =
    `<div class="popup-container">
      <div class="popup">
        <div class="mb-16">Voulez vous autoriser cette page à utiliser du son ?</div>
        <div class="row justify-center gap-12 ">
          <div id="yes" class="button">Oui</div>
          <div id="no" class="button">Non</div>
        </div>
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