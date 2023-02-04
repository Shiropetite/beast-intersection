import { settings } from "../settings";
import { TitleScreenService, SoundService } from '.';
import { KeypressSignalSender } from '../signals';
import { KeypressSignalListener, Field, FieldType } from "../types";
import { AllowSoundScreenUI } from '../ui';

/**
 * Handles the allow sound popup at boot
 */
export class AllowSoundScreenService implements KeypressSignalListener {

  private currentFieldIndex: number;
  private fields: Field[] = [
    { name: 'yes', type: FieldType.REDIRECT},
    { name: 'no', type: FieldType.REDIRECT},
  ];

  //#region Singleton
  private static instance: AllowSoundScreenService;

  private constructor() {
    this.currentFieldIndex = 0;
  }

  public static get(): AllowSoundScreenService {
    if (!this.instance) {
      this.instance = new AllowSoundScreenService();
    }
    return this.instance;
  }
  //#endregion

  //#region Start
  public start(): void {
    AllowSoundScreenUI.get().build();
    AllowSoundScreenUI.get().select(this.getCurrentField().name);

    KeypressSignalSender.get().register(AllowSoundScreenService.get());
  }

  public stop(): void {
    KeypressSignalSender.get().unregister(AllowSoundScreenService.get());
  }
  //#endregion

  /**
   * Handles user's keypresses
   * @param key key pressed symbol
   * @returns `true` if the service reacted to the keypress, `false` if not
   */
  public onKeyPressed(key: string): boolean {
    if (key === settings.left && this.currentFieldIndex > 0) {
      this.navigate(this.currentFieldIndex - 1);
      return true;
    }

    if (key === settings.right && this.currentFieldIndex < this.fields.length - 1) {
      this.navigate(this.currentFieldIndex + 1);
      return true;
    }

    if (key === settings.act && this.getCurrentField().name === 'yes') {
      SoundService.get().play("button-click");
      this.stop();
      TitleScreenService.get().start();
      return true;
    }

    if (key === settings.act && this.getCurrentField().name === 'no') {
      settings.music = 0;
      settings.sound = 0;
      this.stop();
      TitleScreenService.get().start();
      return true;
    }

    return false;
  }

  private navigate(nextIndex: number): void {
    AllowSoundScreenUI.get().unselect(this.getCurrentField().name);
    this.currentFieldIndex = nextIndex;
    AllowSoundScreenUI.get().select(this.getCurrentField().name);
  }

  private getCurrentField(): Field {
    return this.fields[this.currentFieldIndex];
  }
}
