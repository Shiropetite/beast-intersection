import './style/base.css'

import { AllowSoundScreenService, SettingsScreenService, TitleScreenService } from './services';
import { KeypressSignalSender, KeydownSignalSender, KeyupSignalSender } from './signals';

export const app = document.getElementById("app")!;

// TODO: Create a function to load the game
// TODO: Try to create a function to a cinematic

AllowSoundScreenService.get().start();
//TitleScreenService.get().start();
//SettingsScreenService.get().start();

window.addEventListener('keypress', KeypressSignalSender.get().raise);
window.addEventListener('keyup', KeyupSignalSender.get().raise);
window.addEventListener('keydown', KeydownSignalSender.get().raise);
