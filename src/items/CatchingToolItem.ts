import { Item } from ".";

export class CatchingToolItem extends Item {

  private readonly power: number;
  private readonly catchRadius: number; // radius for catching bugs to start minigame
  private readonly directionDurationBonus: number; // time added between direction changes during minigame

  constructor(name: string, power: number, catchRadius: number, directionDurationBonus: number) {
    super(name);
    this.power = power;
    this.catchRadius = catchRadius;
    this.directionDurationBonus = directionDurationBonus;
  }

  public getPower(): number { return this.power; }

  public getCatchRadius(): number { return this.catchRadius; }

  public getDirectionDurationBonus(): number { return this.directionDurationBonus; }

}