import { player } from "../..";
import { ToolType, BugItem, CatchingToolItem } from "../../items";
import { TalkingService, CatchingService, CatchingState } from "../../services";
import { PersonState } from "../persons";
import { ResourceEntityBehaviour, TriggerResourceEntity } from "./TriggerResourceEntity";

export class BugResourceEntity extends TriggerResourceEntity {

  constructor(name: string, spriteTop: number, spriteLeft: number, item: BugItem) {
    super(name, spriteTop, spriteLeft, item, ResourceEntityBehaviour.CATCHING);
  }

  public act(): void {
    // destroy entity after win
    if (player.getState() === PersonState.TALKING) { super.destroy(); return; }

    // Catching net not equipped
    // TODO: When UI for equipment is done
    // if (player.getToolEquiped().getToolType() !== ToolType.CATCHING) { return; }

    // minigame start
    if (player.getState() === PersonState.IDLE) {
      CatchingService.getInstance().start(this, player.getToolEquiped() as CatchingToolItem);
    }
    // minigame ongoing
    else {
      const minigameState = CatchingService.getInstance().catch();

      // minigame won
      if (minigameState === CatchingState.WIN) {
        super.act();
      }

      // minigame lost
      else if (minigameState === CatchingState.LOSE) {
        TalkingService.getInstance().start([{ sentence: `L'insecte s'est enfui...`, notSkip: true }]);
      }
    }
  }
}