import { TimeService } from ".";
import { NpcEntity, NpcStates, PlayerEntity, PlayerStates } from "../entities";
import { TalkingUI } from "../ui";
import { InputSignalListener } from "../signals";
import { ActionKeys, DirectionKeys } from "../utils";

export interface Sentence {
  text: string, 
  isQuestion?: boolean, 
  answers?:
  {
    playerAnswer: string, // player answer to the question
    npcAnswer: string, // npc answer to the player
  }[],
  isLock?: boolean,
}

export class TalkingService implements InputSignalListener {
  
  private static instance: TalkingService;
  
  private isRunning: boolean;
  private dialog: Sentence[];
  private npc: NpcEntity | null;
  private answerIndex: number | null;

  //#region Singleton
  private constructor() { }

  public static get(): TalkingService {
    if (!TalkingService.instance) {
      TalkingService.instance = new TalkingService();
    }

    return TalkingService.instance;
  }
  //#endregion

  public onKeyPressed(keyPressed: string): boolean {
    if (keyPressed === ActionKeys.ACT && this.isRunning && PlayerEntity.get().getState() === PlayerStates.TALKING) {
      this.talk();
      return true;
    }

    if (this.isRunning && PlayerEntity.get().getState() === PlayerStates.TALKING) {
      if (this.dialog[0]?.isQuestion) {
        if (keyPressed === DirectionKeys.UP) {
          if (this.answerIndex > 0) {
            TalkingUI.get().hideAnswerIndicator(this.answerIndex);
            this.answerIndex--;
            TalkingUI.get().showAnswerIndicator(this.answerIndex); 
          }
          else {
            TalkingUI.get().hideAnswerIndicator(this.answerIndex);
            this.answerIndex = this.dialog[0]?.answers.length - 1;
            TalkingUI.get().showAnswerIndicator(this.answerIndex);
          }
        }
        else if (keyPressed === DirectionKeys.DOWN) {
          if (this.answerIndex < this.dialog[0]?.answers.length - 1) {
            TalkingUI.get().hideAnswerIndicator(this.answerIndex);
            this.answerIndex++;
            TalkingUI.get().showAnswerIndicator(this.answerIndex); 
          }
          else {
            TalkingUI.get().hideAnswerIndicator(this.answerIndex);
            this.answerIndex = 0;
            TalkingUI.get().showAnswerIndicator(this.answerIndex); 
          }
        }
        
        return true;
      }
    }

    return false;
  }

  //#region Methods
  /**
   * Start talk between player and interlocutor
   * @param dialog the complete dialog to display
   */
  public start(dialog: Sentence[], npc?: NpcEntity): void {
    PlayerEntity.get().setState(PlayerStates.TALKING);

    this.isRunning = true;
    this.dialog = [ ...dialog];
    this.npc = npc;

    TalkingUI.get().show(this.npc);

    TimeService.get().stop();
    
    if (this.npc) { this.npc.setState(NpcStates.TALKING); }

    this.talk()
  }

  private talk(): void {
    // Dialog is over
    if (this.dialog.length === 0) { this.end(); return; }

    //FIXME: handle player response
    // Player answers
    if (this.dialog[0].isQuestion && this.answerIndex >= 0) {
      // Npc answers
      TalkingUI.get().setText(this.dialog[0].answers[this.answerIndex].npcAnswer);
      this.answerIndex = undefined; 
      this.dialog.shift();
      return;
    }

    // Display next sentence
    const nextSentence = this.dialog[0];
    TalkingUI.get().setText(nextSentence.text);

    // Next sentence is not skippable
    if (nextSentence.isLock) {
      PlayerEntity.get().setState(PlayerStates.LOCKED);
      setTimeout(() => {
        PlayerEntity.get().setState(PlayerStates.TALKING);
        this.talk();
      }, 3000)
    }

    // Next sentence is a question
    if (nextSentence.isQuestion) { this.question(nextSentence.answers); return; } 
    else { this.dialog.shift(); }
  }

  private end(): void {
    TalkingUI.get().hide(this.npc);

    TimeService.get().start();

    if (this.npc) { this.npc.setState(NpcStates.IDLE); }

    this.isRunning = false;  

    PlayerEntity.get().setState(PlayerStates.IDLE);
  }

  private question(answers: any[]): void {
    // display all answers
    for (let i = 0; i < answers.length; i++) {
      TalkingUI.get().showAnswer(answers[i].playerAnswer, i);
    }

    // set indicator on first answer by default
    this.answerIndex = 0;
    TalkingUI.get().showAnswerIndicator(this.answerIndex);
  }
  //#endregion
  
}