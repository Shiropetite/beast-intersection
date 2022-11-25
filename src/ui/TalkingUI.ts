import { CameraUI } from ".";
import { NpcEntity } from '../entities';

export class TalkingUI {

  private static instance: TalkingUI;

  private textBox: HTMLElement | null = null;
  private speakerName: HTMLElement | null = null;
  private dialogSprite: HTMLElement | null = null;
  private text: HTMLElement | null = null;

  //#region Singleton
  private constructor() {}

  public static get(): TalkingUI {
    if (!TalkingUI.instance) {
      TalkingUI.instance = new TalkingUI();
    }

    return TalkingUI.instance;
  }
  //#endregion

  //#region Methods
  public create(): void {
    // create textbox HTML
    const textBoxHTML = document.createElement("div");
    textBoxHTML.id = "textbox"
    textBoxHTML.classList.add('textbox');
    CameraUI.get().add(textBoxHTML);

    // create dialog sprite HTML
    const dialogSpriteHtml = document.createElement("div");
    dialogSpriteHtml.id = "textbox-sprite"
    dialogSpriteHtml.classList.add('textbox-sprite');
    CameraUI.get().add(dialogSpriteHtml);

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
    this.textBox = document.getElementById('textbox');
    this.textBox.appendChild(dialogSpriteHtml);
    this.textBox.appendChild(containerHTML);

    const textBoxContainer = document.getElementById('textbox-container');
    textBoxContainer.appendChild(nameHTML);
    textBoxContainer.appendChild(textHTML);

    this.speakerName = document.getElementById('textbox-name');
    this.text = document.getElementById('textbox-text');
    this.dialogSprite = document.getElementById('textbox-sprite');

    this.hide();
  }

  public show(npc?: NpcEntity): void {
    this.textBox.style.display = 'flex';
    
    if (npc) {
      this.setSpeakerName(npc.getName()); 
      this.setSpriteDialog();
    }
  }

  public hide(npc?: NpcEntity): void {
    if (npc) {
      this.setSpeakerName('');
      this.setText('');
    }

    this.textBox.style.display = 'none';
    this.dialogSprite.style.display = 'none';
  }

  public setSpeakerName(name: string): void { this.speakerName.innerHTML = name; }

  public setSpriteDialog(): void { this.dialogSprite.style.display = 'block'; }

  public setText(text: string): void { this.text.innerHTML = text; }

  public showAnswer(text: string, index: number): void { this.text.innerHTML += `<div id="answer-${ index }">${ text }</div>`; }

  public showAnswerIndicator(answerIndex: number): void {
    const answerHTML = document.getElementById(`answer-${ answerIndex }`);
    answerHTML.innerHTML = "- " + answerHTML.innerHTML;
  }

  public hideAnswerIndicator(answerIndex: number): void {
    const answerHTML = document.getElementById(`answer-${ answerIndex }`)
    answerHTML.innerHTML = answerHTML.innerHTML.substring(2);
  }
  //#endregion

}