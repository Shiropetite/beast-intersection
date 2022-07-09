import { DialogElement } from '../ui/DialogElement';

export interface Dialog { 
  text: string, 
  isChoice: boolean, 
  choices?: [
    {
      playerResponse: string,
      npcResponse: string
    }
  ]
}

export class Talking {
  private static dialog: Dialog[]; 
  private static playerChoice: number;
  private static sentence: Dialog;

  //#region Methods
  public static startDialog(dialog: Dialog[], speakerName?: string): void {
    this.dialog = [ ...dialog ];
    this.playerChoice = -1;
    this.sentence = null;

    DialogElement.show();
    if (speakerName) { DialogElement.setName(speakerName); }
    this.displaySentence();
  }

  public static displaySentence(): boolean {
    // player has chosen
    if (this.playerChoice >= 0) {
      DialogElement.setText(this.sentence.choices[this.playerChoice].npcResponse);
      this.playerChoice = -1;
      return true;
    }

    if (this.dialog.length === 0) {
      this.endDialog();
      return false;
    }

    this.sentence = this.dialog.shift();
    DialogElement.setText(this.sentence.text);

    // player is choosing
    if (this.sentence.isChoice) {
      this.choice(this.sentence.choices);
    }
    
    return true;
  }

  private static choice(choices: any[]): void {
    // display all choices
    for (let i = 0; i < choices.length; i++) {
      DialogElement.addChoice(choices[i].playerResponse, i);
    }

    // set indicator on first choice
    Talking.playerChoice = 0;
    DialogElement.addIndicator(Talking.playerChoice);
  }

  public static selectChoice(goUp: boolean) {
    DialogElement.removeIndicator(Talking.playerChoice);
    if (goUp && Talking.playerChoice > 0) Talking.playerChoice--;
    else if (!goUp && Talking.playerChoice < this.sentence.choices.length - 1) Talking.playerChoice++;
    DialogElement.addIndicator(Talking.playerChoice);
  }

  private static endDialog(): void {
    DialogElement.setName("");
    DialogElement.setText("");
    DialogElement.hide();
  }
  //#endregion

}
