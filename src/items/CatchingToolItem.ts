export class CatchingToolItem {

  private readonly name: string;

  private power: number;
  private catchRadius: number; // radius for catching bugs to start minigame
  private directionDurationBonus: number; // time added between direction changes during minigame

  constructor(name: string, power: number, catchRadius: number, directionDurationBonus: number) {
    this.name = name;
    this.power = power;
    this.catchRadius = catchRadius;
    this.directionDurationBonus = directionDurationBonus;
  }

  public getName(): string { return this.name; }

  public getPower(): number { return this.power; }

  public getCatchRadius(): number { return this.catchRadius; }

  public getDirectionDurationBonus(): number { return this.directionDurationBonus; }

}