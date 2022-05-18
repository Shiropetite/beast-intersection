import { cameraHTML } from '.';
import { PNJ } from './pnj';

export class Dialog {
  private readonly htmlElement: HTMLElement;
  private pnj: PNJ;
  private currentLine: number;
  private choice: string | null;

  constructor() { 
    this.create();

    this.htmlElement = document.getElementById("dialog");
    this.htmlElement.style.display = 'none';
    this.currentLine = 0;
    this.choice = null;
  }

  create() {
    const element = document.createElement("div");
    element.id = "dialog"
    element.classList.add('dialog');
    cameraHTML.appendChild(element);
  }

  interact(pnj: PNJ) {
    this.pnj = pnj;
    const currentDialog = this.pnj.getAction().dialog;

    if(currentDialog) {
      if(!this.isVisible()) this.show();
      if(this.currentLine === currentDialog.length) {
        this.hide();
        return;
      }

      const line = currentDialog[this.currentLine];
      if(this.haveChoice()) {
        this.htmlElement.innerHTML = line[this.choice];
        this.choice = null;
        this.currentLine++;
        return
      }
      else {
        this.htmlElement.innerHTML = line.text;
      }

      if(line.choice) {
        this.addChoice();
      }
      else {
        this.currentLine++;
      }
    }
    else {
      if(this.isVisible()) {
        this.hide();
      }
    }
  }

  addChoice() {
    this.htmlElement.innerHTML += "<div id='oui'>- Oui</div>"
    this.htmlElement.innerHTML += "<div id='non'>Non</div>"
    this.choice = 'yes'
  }

  updateChoice(key: string) {
    const yes = document.getElementById('oui');
    const no = document.getElementById('non');
  
    if(key === 'z') { 
      yes.innerHTML = '- Oui';
      no.innerHTML = 'Non';
      this.choice = 'yes'
    }
    else {
      yes.innerHTML = 'Oui';
      no.innerHTML = '- Non';
      this.choice = 'no'
    }
  }

  haveChoice() { return this.choice !== null }

  show() {
    this.htmlElement.style.display = 'block';
  }

  hide() {
    this.htmlElement.style.display = 'none';
    this.pnj = null;
    this.currentLine = 0;
  }

  isVisible() { 
    return this.htmlElement.style.display === 'block';
  }
}