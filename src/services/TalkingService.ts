import { TimeService } from ".";
import { TalkingUI } from "../ui";
import { InputSignalListener } from "../signals/InputSignal";
import { PlayerEntity, PlayerStates } from "../entities";
import { ActionKeys } from "../utils";
import { TriggerComponent } from '../components/TriggerComponent';

export interface Sentence {
  text: string, 
  isQuestion?: boolean, 
  answers?: [
    {
      playerAnswer: string, // player answer to the question
      npcAnswer: string // npc answer to the player
    }
  ],
  isSkippable?: boolean
}

export class TalkingService implements InputSignalListener {
  
  private static instance: TalkingService;
  
  private isRunning: boolean;
  private dialog: Sentence[];
  private playerAnswer: number;

  //#region Singleton
  private constructor() { }

  public static getInstance(): TalkingService {
    if (!TalkingService.instance) {
      TalkingService.instance = new TalkingService();
    }

    return TalkingService.instance;
  }
  //#endregion

  onKeyPressed(keyPressed: string): void {
    if (keyPressed === ActionKeys.ACT && this.isRunning) {
      this.talk();
    }

    //TODO: check if 'z' or 's' is pressed during dialog
  }

  //#region Methods
  /**
   * Start talk between player and interlocutor
   * @param dialog the complete dialog to display
   * @param interlocutor 
   */
  public start(dialog: Sentence[], interlocutor: TriggerComponent): void {
    
    TalkingService.getInstance().isRunning = true;
    TalkingService.getInstance().dialog = [ ...dialog ];
    //FIXME:
    TalkingService.getInstance().playerAnswer = -1;

    //TODO: add interlocutor information in UI
    TalkingUI.show();

    TimeService.getInstance().stop();
    PlayerEntity.getInstance().setState(PlayerStates.TALKING);
    this.talk();
  }

  private talk(): void {
    // FIXME:
    // // player answer
    // if (this.playerAnswerIndex >= 0) {
    //   // npc answer
    //   TalkingUI.setText(this.currentDialogElement.answers[this.playerAnswerIndex].npcAnswer);
      
    //   this.playerAnswerIndex = -1;
    //   return true;
    // }

    // Dialog is over
    if (TalkingService.getInstance().dialog.length === 0) { TalkingService.getInstance().end(); return; }

    // Display next sentence
    const nextSentence = TalkingService.getInstance().dialog.shift();
    TalkingUI.setText(nextSentence.text);

    // Next sentence is not skippable
    if (!nextSentence.isSkippable) {
      PlayerEntity.getInstance().setState(PlayerStates.LOCKED);

      setTimeout(() => {
        PlayerEntity.getInstance().setState(PlayerStates.TALKING);
        TalkingService.getInstance().talk();
      }, 3000); // wait for 3000
    }

    // Next sentence is question
    //FIXME:
    // if (nextSentence.isQuestion) { this.question(nextSentence.answers); return; }
  }

  private end(): void {
    //FIXME: should be done in 1 call to UI
    TalkingUI.setSpeakerName('');
    TalkingUI.setText('');
    TalkingUI.hide();

    TimeService.getInstance().start();
    PlayerEntity.getInstance().setState(PlayerStates.IDLE);
  }

  //FIXME:
  // private question(answers: any[]): void {
  //   // display all answers
  //   for (let i = 0; i < answers.length; i++) {
  //     TalkingUI.showAnswer(answers[i].playerAnswer, i);
  //   }

  //   // set indicator on first answer by default
  //   this.playerAnswerIndex = 0;
  //   TalkingUI.showAnswerIndicator(this.playerAnswerIndex);
  // }

  // // select answer depending on player input
  // private selectAnswer(goToNext: boolean) {
  //   // remove indicator from previous answer
  //   TalkingUI.hideAnswerIndicator(this.playerAnswerIndex);

  //   // select next answer
  //   if (goToNext && this.playerAnswerIndex < this.currentDialogElement.answers.length - 1) {
  //     this.playerAnswerIndex++;
  //   }
  //   // select previous answer
  //   else if (!goToNext && this.playerAnswerIndex > 0) {
  //     this.playerAnswerIndex--;
  //   }

  //   TalkingUI.showAnswerIndicator(this.playerAnswerIndex);
  // }
  //#endregion
  
}