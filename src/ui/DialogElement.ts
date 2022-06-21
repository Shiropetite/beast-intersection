import { cameraHTML } from "..";

export class DialogElement {
  private static dialogHTML: HTMLElement;
  private static nameHTML: HTMLElement;
  private static textHTML: HTMLElement;

  static createHtmlElement(): void {
    // Create div for dialog
    const dialogElement = document.createElement("div");
    dialogElement.id = "dialog"
    dialogElement.classList.add('dialog');
    cameraHTML.appendChild(dialogElement);

    // Create div for speaker name in dialog
    const nameElement = document.createElement("div");
    nameElement.id = "dialog-name"
    nameElement.classList.add('dialog-name');
    DialogElement.dialogHTML.appendChild(nameElement);
    
    // Create div for text in dialog
    const textElement = document.createElement("div");
    textElement.id = "dialog-text"
    textElement.classList.add('dialog-text');
    DialogElement.dialogHTML.appendChild(textElement);

    // Store html elements
    DialogElement.dialogHTML = document.getElementById('dialog');
    DialogElement.nameHTML = document.getElementById('dialog-name');
    DialogElement.textHTML = document.getElementById('dialog-text');

    DialogElement.hide();
  }

  static show(): void {
    DialogElement.dialogHTML.style.display = 'block';
  }

  static setName(name: string): void {
    DialogElement.nameHTML.innerHTML = name;
  }

  static setText(text: string): void {
    DialogElement.textHTML.innerHTML = text;
  }

  // todo set avatar

  static hide(): void {
    DialogElement.dialogHTML.style.display = 'none';
  }

}