import { TimeService } from "../services/TimeService";
import { TalkingUI } from "../ui/TalkingUI";

export interface DialogElement {
  sentence: string, 
  isQuestion: boolean, 
  answers?: [
    {
      playerAnswer: string, // player answer to the question
      npcAnswer: string // npc answer to the player
    }
  ]
}

export class Talking {
  private static dialog: DialogElement[]; 
  private static currentDialogElement: DialogElement;
  private static playerAnswerIndex: number;

  //#region Methods
  public static start(dialog: DialogElement[], speakerName?: string): void {
    this.dialog = [ ...dialog ];
    this.currentDialogElement = null;
    this.playerAnswerIndex = -1;

    TalkingUI.show();
    
    if (speakerName) { 
      TalkingUI.setSpeakerName(speakerName); 
    }

    this.talk();

    TimeService.stop();
  }

  private static end(): void {
    TalkingUI.setSpeakerName('');
    TalkingUI.setText('');
    TalkingUI.hide();

    TimeService.start();
  }

  // returns true if dialog is not over
  public static talk(): boolean {
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
    Talking.playerAnswerIndex = 0;
    TalkingUI.showAnswerIndicator(Talking.playerAnswerIndex);
  }

  // select answer depending on player input
  public static selectAnswer(goToNext: boolean) {
    // remove indicator from previous answer
    TalkingUI.hideAnswerIndicator(Talking.playerAnswerIndex);

    // select next answer
    if (goToNext && Talking.playerAnswerIndex < this.currentDialogElement.answers.length - 1) {
      Talking.playerAnswerIndex++;
    }
    // select previous answer
    else if (!goToNext && Talking.playerAnswerIndex > 0) {
      Talking.playerAnswerIndex--;
    }

    TalkingUI.showAnswerIndicator(Talking.playerAnswerIndex);
  }
  //#endregion

}
