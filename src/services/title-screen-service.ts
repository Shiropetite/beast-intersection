import { settings } from '../settings';
import { SettingsScreenService, SoundService } from ".";
import { KeypressSignalSender } from "../signals";
import { KeypressSignalListener, Field, FieldType } from "../types";
import { TitleScreenUI } from '../ui';

/**
 * Handles the title screen
 */
export class TitleScreenService implements KeypressSignalListener {

  private currentFieldIndex: number;
  private fields: Field[] = [
    { name: 'play', type: FieldType.REDIRECT},
    { name: 'settings', type: FieldType.REDIRECT},
  ];

  //#region Singleton
  private static instance: TitleScreenService;

  private constructor() {
    this.currentFieldIndex = 0;
  }

  public static get(): TitleScreenService {
    if (!this.instance) {
      this.instance = new TitleScreenService();
    }
    return this.instance;
  }
  //#endregion

  //#region Start
  public start(): void {
    TitleScreenUI.get().build();
    TitleScreenUI.get().select(this.getCurrentField().name);

    KeypressSignalSender.get().register(TitleScreenService.get());
  }

  public stop(): void {
    KeypressSignalSender.get().unregister(TitleScreenService.get());
  }
  //#endregion

  /**
   * Handles user's keypresses
   * @param key key pressed symbol
   * @returns `true` if the service reacted to the keypress, `false` if not
   */
  public onKeyPressed(key: string): boolean {
    if (key === settings.up && this.currentFieldIndex > 0) {
      this.navigate(this.currentFieldIndex - 1);
      return true;
    }

    if (key === settings.down && this.currentFieldIndex < this.fields.length - 1) {
      this.navigate(this.currentFieldIndex + 1);
      return true;
    }

    if (key === settings.act && this.getCurrentField().name === 'settings') {
      SoundService.get().play("button-click");
      this.stop();
      SettingsScreenService.get().start();
      return true;
    }
    
    return false;
  }

  private navigate(nextIndex: number): void {
    TitleScreenUI.get().unselect(this.getCurrentField().name);
    this.currentFieldIndex = nextIndex;
    TitleScreenUI.get().select(this.getCurrentField().name);
    SoundService.get().play("button-hover");
  }
  
  private getCurrentField(): Field {
    return this.fields[this.currentFieldIndex];
  }
}
