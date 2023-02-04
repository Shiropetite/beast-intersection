import { app } from "../main";
import { Field, FieldType } from "../services";

export class ParameterScreenUI {

  //#region Singleton
  private static instance: ParameterScreenUI;

  public static get(): ParameterScreenUI {
    if (!this.instance) {
      this.instance = new ParameterScreenUI();
    }

    return this.instance;
  }
  //#endregion

  public buildHtml(fields: Field[]): void {
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

      if (f.type === FieldType.SUBMIT) {
        html += `<div class="button">Confirmer</div>`;
      }
    })
    
    html += `</div></div>`;

    app.innerHTML = html;
  }

  /**
   * Update active class on the selected button
   * @param id 
   */
  select(newId: string): void {
    document.getElementById(newId)!.classList.add("active");
  }

  unselect(lastId: string): void {
    document.getElementById(lastId)!.classList.remove("active");
  }

  enterEditMode(id: string): void {
    document.getElementById(`input-${id}`)!.classList.add("edition")
  }

  exitEditMode(id: string): void {
    document.getElementById(`input-${id}`)!.classList.remove("edition")
  }

  updateSlide(id: string, value: number): void {
    const volume = document.getElementById(`${id}-volume`) as any;
    volume.value = value;
  }

  updateKey(id: string, value: string): void {
    const field = document.getElementById(`input-${id}`) as any;
    field.value = value;
  }

}
