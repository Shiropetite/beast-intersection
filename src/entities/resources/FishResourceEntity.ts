import { player } from "../..";
import { FishingToolItem, ToolType, FishItem } from "../../items";
import { FishingService, FishingState, TalkingService } from "../../services";
import { PersonState } from "../persons";
import { ResourceEntityBehaviour, TriggerResourceEntity } from "./TriggerResourceEntity";

export class FishResourceEntity extends TriggerResourceEntity {

  constructor(name: string, spriteTop: number, spriteLeft: number, item: FishItem) {
    super(name, spriteTop, spriteLeft, item, ResourceEntityBehaviour.FISHING);
  }

  public act(): void {
    // destroy entity after win
    if (player.getState() === PersonState.TALKING) { super.destroy(); return; }

    // fishing rod not equipped
    if (player.getToolEquiped().getToolType() !== ToolType.FISHING) { return; }

    // minigame start
    if (player.getState() === PersonState.IDLE) {
      FishingService.start(this, player.getToolEquiped() as FishingToolItem);
    }
    // minigame ongoing
    else {
      const minigameState = FishingService.fish(player.getToolEquiped() as FishingToolItem);

      // minigame won
      if (minigameState === FishingState.WIN) {
        super.act();
      }

      // minigame lost
      else if (minigameState === FishingState.LOSE) {
        TalkingService.start([{ sentence: `Le poisson s'est enfui...`, notSkip: true }]);
      }
    }
  }
}