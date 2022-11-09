import { TimeService } from ".";
import { player } from "..";
import { PersonState } from "../entities";
import { InputSignalListener } from "../signals/InputSignal";
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

export class TalkingService implements InputSignalListener {
  private static instance: TalkingService;

  private dialog: DialogElement[]; 
  private currentDialogElement: DialogElement;
  private playerAnswerIndex: number;

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
    console.log(keyPressed);
  }

  //#region Methods
  public start(dialog: DialogElement[], speakerName?: string): void {
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

    TimeService.getInstance().stop();
  }

  private end(): void {
    TalkingUI.setSpeakerName('');
    TalkingUI.setText('');
    TalkingUI.hide();

    player.setState(PersonState.IDLE);

    TimeService.getInstance().start();
  }

  // returns true if dialog is not over
  public talk(): boolean {
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

  private answer(answers: any[]): void {
    // display all answers
    for (let i = 0; i < answers.length; i++) {
      TalkingUI.showAnswer(answers[i].playerAnswer, i);
    }

    // set indicator on first answer by default
    this.playerAnswerIndex = 0;
    TalkingUI.showAnswerIndicator(this.playerAnswerIndex);
  }

  // select answer depending on player input
  public selectAnswer(goToNext: boolean) {
    // remove indicator from previous answer
    TalkingUI.hideAnswerIndicator(this.playerAnswerIndex);

    // select next answer
    if (goToNext && this.playerAnswerIndex < this.currentDialogElement.answers.length - 1) {
      this.playerAnswerIndex++;
    }
    // select previous answer
    else if (!goToNext && this.playerAnswerIndex > 0) {
      this.playerAnswerIndex--;
    }

    TalkingUI.showAnswerIndicator(this.playerAnswerIndex);
  }
  //#endregion
  
}
