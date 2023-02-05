import { settings } from "../settings";
import { TitleScreenService, SoundService } from ".";
import { KeypressSignalSender } from "../signals";
import { KeypressSignalListener, Field, FieldType } from "../types";
import { SettingsScreenUI } from "../ui";

/**
 * Handles the settings screen
 */
export class SettingsScreenService implements KeypressSignalListener {

  private currentFieldIndex: number;
  private fields: Field[] = [
    { name: 'music', type: FieldType.SLIDER },
    { name: 'sound', type: FieldType.SLIDER },
    { name: 'up', type: FieldType.KEY},
    { name: 'left', type: FieldType.KEY},
    { name: 'right', type: FieldType.KEY},
    { name: 'down', type: FieldType.KEY},
    { name: 'confirm', type: FieldType.REDIRECT}
  ];
  private isEditingKeyField: boolean;

  //#region Singleton
  private static instance: SettingsScreenService;

  constructor() {
    this.currentFieldIndex = 0;
    this.isEditingKeyField = false;
  }

  public static get(): SettingsScreenService {
    if (!this.instance) {
      this.instance = new SettingsScreenService();
    }
    return this.instance;
  }
  //#endregion

  //#region Start
  public start(): void {
    SettingsScreenUI.get().build(this.fields);

    SettingsScreenUI.get().select(this.getCurrentField().name);
    this.fields.forEach(f => {
      if (f.type === FieldType.SLIDER) {
        SettingsScreenUI.get().updateSlide(f.name, settings[f.name] * 100);
      }
      if (f.type === FieldType.KEY) {
        SettingsScreenUI.get().updateKey(f.name, settings[f.name]);
      }
    });

    KeypressSignalSender.get().register(SettingsScreenService.get());
  }

  public stop(): void {
    KeypressSignalSender.get().unregister(SettingsScreenService.get());
  }
  //#endregion

  /**
   * Handles user's keypresses
   * @param key key pressed symbol
   * @returns `true` if the service reacted to the keypress, `false` if not
   */
  public onKeyPressed(key: string): boolean {
    if (!this.isEditingKeyField) {
      if (key === settings.up && this.currentFieldIndex > 0) {
        this.navigate(this.currentFieldIndex - 1);
        return true;
      }
      if (key === settings.down && this.currentFieldIndex < this.fields.length - 1) {
        this.navigate(this.currentFieldIndex + 1);
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
      if (key === settings.left) { 
        return this.editSliderField(settings[this.getCurrentField().name] - 0.1) 
      }
      if (key === settings.right) {
        return this.editSliderField(settings[this.getCurrentField().name] + 0.1);
      }
    }

    if (key === settings.act && this.getCurrentField().type === FieldType.REDIRECT) {
      this.stop();
      SoundService.get().play("button-click");
      TitleScreenService.get().start();
    }

    return false;
  }

  private switchIsEditing(): void {
    this.isEditingKeyField = !this.isEditingKeyField;
    if (this.isEditingKeyField) {
      SettingsScreenUI.get().enterEditMode(this.getCurrentField().name);
    }
    else {
      SettingsScreenUI.get().exitEditMode(this.getCurrentField().name);
    }
  }

  private editKeyField(key: string): void {
    settings[this.getCurrentField().name] = key;
    SettingsScreenUI.get().updateKey(this.getCurrentField().name, settings[this.getCurrentField().name]);
  }

  private editSliderField(nextValue: number): boolean {
    if (nextValue < 0 || nextValue > 1) {
      return false; 
    }
    settings[this.getCurrentField().name] = nextValue;
    SettingsScreenUI.get().updateSlide(this.getCurrentField().name, settings[this.getCurrentField().name] * 100);
    return true;
  }

  private navigate(nextIndex: number): void {
    SettingsScreenUI.get().unselect(this.getCurrentField().name);
    this.currentFieldIndex = nextIndex;
    SettingsScreenUI.get().select(this.getCurrentField().name);
    SoundService.get().play("button-hover");
  }

  private getCurrentField(): Field {
    return this.fields[this.currentFieldIndex];
  }
}
