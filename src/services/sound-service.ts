import { settings } from "../settings";

/**
 * Handles music and sounds effects played in the game
 */
export class SoundService {

  //#region Singleton
  private static instance: SoundService;

  public static get(): SoundService {
    if (!this.instance) {
      this.instance = new SoundService();
    }
    return this.instance;
  }
  //#endregion

  /**
   * Plays an audio file
   * @param fileName audio filename
   */
  public play(fileName: string): void {
    const beep = new Audio(`/sound-effects/${fileName}.mp3`);
    beep.volume = settings.sound;
    beep.play()
  }
}
