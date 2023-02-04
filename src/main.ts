import './style/base.css'

import { TitleScreenService } from './services/title-screen-service';
import { ParameterScreenService } from './services';
import { KeydownSignalSender, KeypressSignalSender, KeyupSignalSender } from './signals';

export const app = document.getElementById("app")!;

// TODO: Create a function to load the game

// TODO: Try to create a function to a cinematic

//TitleScreenService.get().load();
ParameterScreenService.get().load();

window.addEventListener('keypress', KeypressSignalSender.get().raise);
window.addEventListener('keyup', KeyupSignalSender.get().raise);
window.addEventListener('keydown', KeydownSignalSender.get().raise);

// loadTitleScreen();

// openPopupToAcceptMusic();

//loadParameterScreen();