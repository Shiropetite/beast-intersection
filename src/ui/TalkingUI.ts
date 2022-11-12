import { CameraUI } from ".";

export class TalkingUI {
  private static textBox: HTMLElement;
  private static speakerName: HTMLElement;
  private static dialogSprite: HTMLElement;
  private static text: HTMLElement;

  //#region Methods
  public static create(): void {
    // create textbox HTML
    const textBoxHTML = document.createElement("div");
    textBoxHTML.id = "textbox"
    textBoxHTML.classList.add('textbox');
    CameraUI.getInstance().add(textBoxHTML);

    // create dialog sprite HTML
    const dialogSpriteHtml = document.createElement("div");
    dialogSpriteHtml.id = "textbox-sprite"
    dialogSpriteHtml.classList.add('textbox-sprite');
    CameraUI.getInstance().remove(dialogSpriteHtml);

    // create name HTML
    const nameHTML = document.createElement("div");
    nameHTML.id = "textbox-name"
    nameHTML.classList.add('textbox-name');
    
    // create text HTML
    const textHTML = document.createElement("div");
    textHTML.id = "textbox-text"
    textHTML.classList.add('textbox-text');

     // create container for name and text HTML
     const containerHTML = document.createElement("div");
     containerHTML.id = "textbox-container"

    // store HTML
    TalkingUI.textBox = document.getElementById('textbox');
    TalkingUI.textBox.appendChild(dialogSpriteHtml);
    TalkingUI.textBox.appendChild(containerHTML);

    const textBoxContainer = document.getElementById('textbox-container');
    textBoxContainer.appendChild(nameHTML);
    textBoxContainer.appendChild(textHTML);

    TalkingUI.speakerName = document.getElementById('textbox-name');
    TalkingUI.text = document.getElementById('textbox-text');
    TalkingUI.dialogSprite = document.getElementById('textbox-sprite');

    TalkingUI.hide();
  }

  public static show(): void {
    TalkingUI.textBox.style.display = 'flex';
  }

  public static hide(): void {
    TalkingUI.textBox.style.display = 'none';
    TalkingUI.dialogSprite.style.display = 'none';
  }

  public static isVisible(): boolean {
    return TalkingUI.textBox.style.display === 'flex';
  }

  public static setSpeakerName(name: string): void {
    TalkingUI.speakerName.innerHTML = name;
  }

  public static setSpriteDialog(): void {
    TalkingUI.dialogSprite.style.display = 'block';
  }

  public static setText(text: string): void {
    TalkingUI.text.innerHTML = text;
  }

  public static showAnswer(text: string, index: number): void {
    TalkingUI.text.innerHTML += `<div id="answer-${ index }">${ text }</div>`;
  }

  public static showAnswerIndicator(answerIndex: number): void {
    // find answer
    const answerHTML = document.getElementById(`answer-${ answerIndex }`);
    // add indicator
    answerHTML.innerHTML = "- " + answerHTML.innerHTML;
  }

  public static hideAnswerIndicator(answerIndex: number): void {
    // find answer
    const answerHTML = document.getElementById(`answer-${ answerIndex }`)
    // remove indicator
    answerHTML.innerHTML = answerHTML.innerHTML.substring(2);
  }
  //#endregion

}
