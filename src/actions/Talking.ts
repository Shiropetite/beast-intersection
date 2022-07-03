import { DialogElement } from '../ui/DialogElement';

export interface Dialog { 
  text: string, 
  isChoice: boolean, 
  choices?: [
    {
      choice: string,
      response: string
    }
  ]
}

export class Talking {
  private static dialog: Dialog[]; 

  //#region Methods
  public static startDialog(dialog: Dialog[], speakerName?: string): void {
    this.dialog = [ ...dialog ];

    DialogElement.show();
    if (speakerName) { DialogElement.setName(speakerName); }
    this.displaySentence();
  }

  public static displaySentence(): boolean {
    if (this.dialog.length === 0) {
      this.endDialog();
      return false;
    }

    const sentence = this.dialog.shift();
    if (sentence.isChoice) {
      this.choice();
    }
    
    DialogElement.setText(sentence.text);
    return true;
  }

  private static choice(): void {
    // todo
  }

  private static endDialog(): void {
    DialogElement.setName("");
    DialogElement.setText("");
    DialogElement.hide();
  }
  //#endregion

}