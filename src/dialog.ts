import { cameraHTML } from '.';
import { PNJ } from './pnj';

export class Dialog {
  private readonly htmlElement: HTMLElement;
  private choice: string | null;

  constructor() { 
    this.create();

    this.htmlElement = document.getElementById("dialog");
    this.htmlElement.style.display = 'none';
    this.choice = null;
  }

  create() {
    const element = document.createElement("div");
    element.id = "dialog"
    element.classList.add('dialog');
    cameraHTML.appendChild(element);
  }

  update(text: string) {
    this.htmlElement.innerHTML = text;
    this.choice = null;
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

  getChoice() { return this.choice }

  haveChoice() { return this.choice !== null }

  show() {
    this.htmlElement.style.display = 'block';
  }

  hide() {
    this.htmlElement.style.display = 'none';
    this.htmlElement.innerHTML = "";
  }

  isVisible() { 
    return this.htmlElement.style.display === 'block';
  }
}