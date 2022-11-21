import { Item } from ".";

export class FishingToolItem extends Item {

  private readonly power: number; // damage inflicted when reeling
  private readonly maxPressure: number;
  private readonly pressureFactor: number; // how much pressure goes up or down during minigame

  private pressure: number; // limit before fishing rod breaks during minigame

  constructor(name: string, power: number, maxPressure: number, pressureFactor: number) {
    super(name);
    this.power = power;
    this.maxPressure = maxPressure;
    this.pressureFactor = pressureFactor;

    this.pressure = 0;
  }

  public applyPressure(pressure: number = 0) { this.pressure += this.pressureFactor + pressure }

  public getPower(): number { return this.power; }

  public getMaxPressure(): number { return this.maxPressure; }

  public getPressureFactor(): number { return this.pressureFactor; }

  public getPressure(): number { return this.pressure; }

  public setPressure(durability: number): void { this.pressure = durability; }

}
