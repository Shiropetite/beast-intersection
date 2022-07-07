import { cameraHTML } from "..";

export class DialogElement {
  private static dialogHTML: HTMLElement;
  private static nameHTML: HTMLElement;
  private static textHTML: HTMLElement;

  //#region Methods
  public static createHtmlElement(): void {
    // Create div for dialog
    const dialogElement = document.createElement("div");
    dialogElement.id = "dialog"
    dialogElement.classList.add('dialog');
    cameraHTML.appendChild(dialogElement);

    // Create div for speaker name in dialog
    const nameElement = document.createElement("div");
    nameElement.id = "dialog-name"
    nameElement.classList.add('dialog-name');
    
    // Create div for text in dialog
    const textElement = document.createElement("div");
    textElement.id = "dialog-text"
    textElement.classList.add('dialog-text');

    // Store html
    DialogElement.dialogHTML = document.getElementById('dialog');

    this.dialogHTML.appendChild(nameElement);
    this.dialogHTML.appendChild(textElement);

    DialogElement.nameHTML = document.getElementById('dialog-name');
    DialogElement.textHTML = document.getElementById('dialog-text');

    DialogElement.hide();
  }

  public static show(): void {
    DialogElement.dialogHTML.style.display = 'block';
  }

  public static setName(name: string): void {
    DialogElement.nameHTML.innerHTML = name;
  }

  public static setText(text: string): void {
    DialogElement.textHTML.innerHTML = text;
  }

  public static addChoice(text: string, index: number): void {
    DialogElement.textHTML.innerHTML += `<div id="choice-${ index }">${text}</div>`;
  }

  public static removeIndicator(choice: number): void {
    const choiceHTML = document.getElementById(`choice-${ choice }`)
    choiceHTML.innerHTML = choiceHTML.innerHTML.substring(2);
  }

  public static addIndicator(choice: number): void {
    const choiceHTML = document.getElementById(`choice-${ choice }`);
    choiceHTML.innerHTML = "- " + choiceHTML.innerHTML;
  }

  // todo set avatar

  public static hide(): void {
    DialogElement.dialogHTML.style.display = 'none';
  }
  //#endregion

}