import { app } from "../app";
import { Field, FieldType } from "../types/screen-types";

export class SettingsScreenUI {

  //#region Singleton
  private static instance: SettingsScreenUI;

  public static get(): SettingsScreenUI {
    if (!this.instance) { 
      this.instance = new SettingsScreenUI();
    }
    return this.instance;
  }
  //#endregion

  public build(fields: Field[]): void {
    let html =
    `<div class="camera">
      <div class="fit column justify-center items-center gap-16">`;

    fields.forEach(f => {
      if (f.type === FieldType.SLIDER) {
        html += 
        `<div id="${f.name}" class="input">
          <div>${f.name}</div>
          <input id="${f.name}-volume" class="slider" type="range"/>
        </div>`;
      }

      if (f.type === FieldType.KEY) {
        html += 
        `<div id="${f.name}" class="input">
          <div>${f.name}</div>
          <input id="input-${f.name}" class="key-input" maxlength="1" />
        </div>`;
      }

      if (f.type === FieldType.REDIRECT) {
        html += `<div id="${f.name}" class="button">Confirmer</div>`;
      }
    })
    
    html += `</div></div>`;

    app.innerHTML = html;
  }

  public select(id: string): void {
    document.getElementById(id)!.classList.add("active");
  }

  public unselect(id: string): void {
    document.getElementById(id)!.classList.remove("active");
  }

  public enterEditMode(id: string): void {
    document.getElementById(`input-${id}`)!.classList.add("edition")
  }

  public exitEditMode(id: string): void {
    document.getElementById(`input-${id}`)!.classList.remove("edition")
  }

  public updateSlide(id: string, value: number): void {
    const volume = document.getElementById(`${id}-volume`) as any;
    volume.value = value;
  }

  public updateKey(id: string, value: string): void {
    const field = document.getElementById(`input-${id}`) as any;
    field.value = value;
  }
}
