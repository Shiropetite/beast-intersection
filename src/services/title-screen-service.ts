import { ParameterScreenService } from ".";
import { KeypressSignalListener, KeypressSignalSender } from "../signals";
import { TitleScreenUI } from '../ui/title-screen-ui';
import { parameter } from './../parameter';
import { SoundService } from './sound-service';

/**
 * Manage title screen
 */
export class TitleScreenService implements KeypressSignalListener {

  private currentButtonActive: 'play' | 'parameter';

  //#region Singleton
  private static instance: TitleScreenService;

  private constructor() {
    this.currentButtonActive = 'play';
  }

  /**
   * Get the current instance of Title Screen Service
   * @returns 
   */
  public static get(): TitleScreenService {
    if (!this.instance) {
      this.instance = new TitleScreenService();
    }

    return this.instance;
  }
  //#endregion

  /**
   * Load title screen
   */
  load(): void {
    KeypressSignalSender.get().register(TitleScreenService.get());
    TitleScreenUI.get().buildHtml();
    TitleScreenUI.get().active(this.currentButtonActive);
  }

  unload(): void {
    KeypressSignalSender.get().unregister(TitleScreenService.get());
  }

  /**
   * Manage key press on title screen
   * @param key 
   * @returns 
   */
  onKeyPressed(key: string): boolean {
    if (key === parameter.up && this.currentButtonActive === 'parameter') {
      this.currentButtonActive = 'play';
      TitleScreenUI.get().active('play', 'parameter');
      SoundService.get().playSound("button-hover");
      return true;
    }

    if (key === parameter.down && this.currentButtonActive === 'play') {
      this.currentButtonActive = 'parameter';
      TitleScreenUI.get().active('parameter', 'play');
      SoundService.get().playSound("button-hover");
      return true;
    }

    if (key === parameter.interact && this.currentButtonActive === 'parameter') {
      SoundService.get().playSound('button-click');
      this.unload();
      ParameterScreenService.get().load();
      return true;
    }
    
    return false;
  }
  
}