import { TimeService } from ".";
import { player } from "..";
import { PersonState } from "../entities";
import { TalkingUI } from "../ui";

export interface DialogElement {
  sentence: string, 
  isQuestion?: boolean, 
  answers?: [
    {
      playerAnswer: string, // player answer to the question
      npcAnswer: string // npc answer to the player
    }
  ],
  notSkip?: boolean
}

export class TalkingService {
  private static dialog: DialogElement[]; 
  private static currentDialogElement: DialogElement;
  private static playerAnswerIndex: number;

  //#region Methods
  public static start(dialog: DialogElement[], speakerName?: string): void {
    this.dialog = [ ...dialog ];
    this.currentDialogElement = null;
    this.playerAnswerIndex = -1;

    TalkingUI.show();
    
    // talking to person
    if (speakerName) { 
      TalkingUI.setSpeakerName(speakerName); 
      TalkingUI.setSpriteDialog();
    }

    player.setState(PersonState.TALKING);

    this.talk();

    TimeService.stop();
  }

  private static end(): void {
    TalkingUI.setSpeakerName('');
    TalkingUI.setText('');
    TalkingUI.hide();

    player.setState(PersonState.IDLE);

    TimeService.start();
  }

  // returns true if dialog is not over
  public static talk(): boolean {
    if (this.dialog === undefined) { return; }

    // player answer
    if (this.playerAnswerIndex >= 0) {
      // npc answer
      TalkingUI.setText(this.currentDialogElement.answers[this.playerAnswerIndex].npcAnswer);
      
      this.playerAnswerIndex = -1;
      return true;
    }

    // dialog end
    if (this.dialog.length === 0) {
      this.end();
      return false;
    }

    // next dialog element
    this.currentDialogElement = this.dialog.shift();
    TalkingUI.setText(this.currentDialogElement.sentence);

    // dialog not skip
    if (this.currentDialogElement.notSkip) {
      player.setState(PersonState.LOCKED)
      setTimeout(() => {
        player.setState(PersonState.TALKING)
        this.talk();
      }, 3000); // wait for 3000
    }

    // player need to answer
    if (this.currentDialogElement.isQuestion) {
      this.answer(this.currentDialogElement.answers);
    }
    
    // end dialog element but not end dialog
    return true;
  }

  private static answer(answers: any[]): void {
    // display all answers
    for (let i = 0; i < answers.length; i++) {
      TalkingUI.showAnswer(answers[i].playerAnswer, i);
    }

    // set indicator on first answer by default
    TalkingService.playerAnswerIndex = 0;
    TalkingUI.showAnswerIndicator(TalkingService.playerAnswerIndex);
  }

  // select answer depending on player input
  public static selectAnswer(goToNext: boolean) {
    // remove indicator from previous answer
    TalkingUI.hideAnswerIndicator(TalkingService.playerAnswerIndex);

    // select next answer
    if (goToNext && TalkingService.playerAnswerIndex < this.currentDialogElement.answers.length - 1) {
      TalkingService.playerAnswerIndex++;
    }
    // select previous answer
    else if (!goToNext && TalkingService.playerAnswerIndex > 0) {
      TalkingService.playerAnswerIndex--;
    }

    TalkingUI.showAnswerIndicator(TalkingService.playerAnswerIndex);
  }
  //#endregion
  
}
