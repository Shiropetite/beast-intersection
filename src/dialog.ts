import { cameraHTML } from '.';

export class Dialog {
  private choice: string | null;

  //#region Constructor
  constructor() { 
    this.create();
    this.choice = null;
  }
  //#endregion

  //#region Method
  create() {
    const element = document.createElement("div");
    element.id = "dialog"
    element.classList.add('dialog');
    element.style.display = 'none';
    cameraHTML.appendChild(element);
  }

  update(text: string) {
    const element = document.getElementById('dialog');
    element.innerHTML = text;
    this.choice = null;
  }

  addChoice() {
    const element = document.getElementById('dialog');
    element.innerHTML += "<div id='oui'>- Oui</div>";
    element.innerHTML += "<div id='non'>Non</div>";
    this.choice = 'yes';
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
    const element = document.getElementById('dialog');
    element.style.display = 'block';
  }

  hide() {
    const element = document.getElementById('dialog');
    element.style.display = 'none';
    element.innerHTML = "";
  }

  isVisible() { 
    const element = document.getElementById('dialog');
    return element.style.display === 'block';
  }
  //#endregion
}