import { SoundService } from ".";
import { parameter } from "../parameter";
import { KeypressSignalListener, KeypressSignalSender } from "../signals";
import { ParameterScreenUI } from "../ui/parameter-screen-ui";
import { TitleScreenService } from './title-screen-service';

export enum FieldType {
  KEY,
  SLIDER,
  SUBMIT
}

export type Field = {
  name: string,
  type: FieldType
}

export class ParameterScreenService implements KeypressSignalListener {

  private currentIndex: number;
  private isEditingKeyField: boolean;
  private fields: Field[] = [
    { name: 'music', type: FieldType.SLIDER }, 
    { name: 'sound', type: FieldType.SLIDER },
    { name: 'up', type: FieldType.KEY}, 
    { name: 'left', type: FieldType.KEY}, 
    { name: 'right', type: FieldType.KEY}, 
    { name: 'down', type: FieldType.KEY},
    { name: 'confirm', type: FieldType.SUBMIT}
  ];

  //#region Singleton
  private static instance: ParameterScreenService;

  constructor() {
    this.currentIndex = 0;
    this.isEditingKeyField = false;
  }

  /**
   * Get the current instance of Title Screen Service
   * @returns 
   */
  public static get(): ParameterScreenService {
    if (!this.instance) {
      this.instance = new ParameterScreenService();
    }

    return this.instance;
  }
  //#endregion

  load(): void {
    ParameterScreenUI.get().buildHtml(this.fields);

    ParameterScreenUI.get().select(this.getCurrentField().name);
    this.fields.forEach(f => {
      if (f.type === FieldType.SLIDER) {
        ParameterScreenUI.get().updateSlide(f.name, parameter[f.name] * 100);
      }
      if (f.type === FieldType.KEY) {
        ParameterScreenUI.get().updateKey(f.name, parameter[f.name]);
      }
    })

    KeypressSignalSender.get().register(ParameterScreenService.get());
  }

  unload(): void {
    KeypressSignalSender.get().unregister(ParameterScreenService.get());
  }

  /**
   * When user press a key on the parameter screen
   * @param key 
   * @returns 
   */
  public onKeyPressed(key: string): boolean {

    if (!this.isEditingKeyField) {
      if (key === parameter.up && this.currentIndex > 0) {
        this.navigate(this.currentIndex - 1);
        return true;
      }
  
      if (key === parameter.down && this.currentIndex < this.fields.length - 1) {
        this.navigate(this.currentIndex + 1);
        return true;
      }
    }

    if (key === 'Enter' && this.getCurrentField().type === FieldType.KEY) {
      this.switchIsEditing();
      return true;
    }

    if (this.isEditingKeyField && this.getCurrentField().type === FieldType.KEY) { 
      this.editKeyField(key);
      return true;
    }

    if (this.getCurrentField().type === FieldType.SLIDER) {
      if (key === parameter.left) { 
        return this.editSliderField(parameter[this.getCurrentField().name] - 0.1) 
      }
      if (key === parameter.right) {
        return this.editSliderField(parameter[this.getCurrentField().name] + 0.1);
      }
    }

    if (key === parameter.interact && this.getCurrentField().type === FieldType.SUBMIT) {
      this.unload();
      SoundService.get().playSound("button-click");
      TitleScreenService.get().load();
    }

    return false;
  }

  private switchIsEditing(): void {
    this.isEditingKeyField = !this.isEditingKeyField;
    if (this.isEditingKeyField) {
      ParameterScreenUI.get().enterEditMode(this.getCurrentField().name);
    }
    else {
      ParameterScreenUI.get().exitEditMode(this.getCurrentField().name);
    }
  }

  private editKeyField(key: string): void {
    parameter[this.getCurrentField().name] = key;
    ParameterScreenUI.get().updateKey(this.getCurrentField().name, parameter[this.getCurrentField().name]);
  }

  private editSliderField(nextValue: number): boolean {
    if (nextValue < 0 || nextValue > 1) return false;
    parameter[this.getCurrentField().name] = nextValue;
    ParameterScreenUI.get().updateSlide(this.getCurrentField().name, parameter[this.getCurrentField().name] * 100);
    return true;
  }

  private navigate(nextIndex: number): void {
    ParameterScreenUI.get().unselect(this.getCurrentField().name);
    this.currentIndex = nextIndex;
    ParameterScreenUI.get().select(this.getCurrentField().name);
    SoundService.get().playSound("button-hover");
  }

  private getCurrentField(): Field { return this.fields[this.currentIndex]; }

}