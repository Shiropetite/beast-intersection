import { parameter } from "../parameter";

/**
 * Manage every sound and music of the game
 */
export class SoundService {

  //#region Singleton
  private static instance: SoundService;

  /**
   * Get the current instance of Sound Service
   * @returns 
   */
  public static get(): SoundService {
    if (!this.instance) {
      this.instance = new SoundService();
    }

    return this.instance;
  }
  //#endregion

  /**
   * Play a sound effect
   * @param fileName
   */
  public playSound(fileName: string): void {
    const beep = new Audio(`/sound-effects/${fileName}.mp3`);
    beep.volume = parameter.sound
    beep.play()
  }

}