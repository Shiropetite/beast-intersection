import { app } from "../main";
import { parameter } from "../parameter";

/**
 * Open a popup that ask the user if he want to listen to the game music
 */
export const openPopupToAcceptMusic = (): void => {
  const popupHtml = 
  `<div class="popup-container">
    <div class="popup popup">
      <div class="mb-16">Cette page utilise de la musique. Voulez vous activer le son ?</div>
      <div class="row justify-center gap-12 ">
        <div id="yes" class="button">Oui</div>
        <div id="no" class="button">Non</div>
      </div>
    </div>
  </div>`;

  app.innerHTML += popupHtml;

  document.getElementById("no")!.addEventListener("click", () => {
    parameter.music = 0;
    parameter.sound = 0;

    //loadTitleScreen();
  });
}
