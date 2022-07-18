import { Item } from "./Item";

export class FishItem extends Item {
  private healthPoints: number;
  private readonly maxHealthPoints: number;
  private readonly regenPoints: number; // regen per second
  private readonly regenSpeed: number;
  private readonly frenzyDuration: number;
  private readonly frenzyFrequency: number; // time between each frenzy
  private readonly frenzyMultiplier: number; // damage reduction multiplier on frenzy
  private readonly pressureMultiplier: number; // pressure multiplier applied to fishing rod

  constructor(
    name: string,
    maxHealthPoints: number,
    regenPoints: number,
    regenSpeed: number,
    frenzyDuration: number,
    frenzyFrequency: number,
    frenzyMultiplier: number,
    pressureMultiplier: number
  ) {
    super(name);
    this.healthPoints = maxHealthPoints;
    this.maxHealthPoints = maxHealthPoints;
    this.regenPoints = regenPoints;
    this.regenSpeed = regenSpeed;
    this.frenzyDuration = frenzyDuration;
    this.frenzyFrequency = frenzyFrequency;
    this.frenzyMultiplier = frenzyMultiplier;
    this.pressureMultiplier = pressureMultiplier;
  }

  public getHealthPoints(): number { return this.healthPoints; }

  public setHealthPoints(healthPoints: number): void { this.healthPoints = healthPoints; }

  public getMaxHealthPoints(): number { return this.maxHealthPoints; }

  public getRegenPoints(): number { return this.regenPoints; }

  public getRegenSpeed(): number { return this.regenSpeed }

  public getFrenzyDuration(): number { return this.frenzyDuration; }

  public getFrenzyFrequency(): number { return this.frenzyFrequency; }

  public getFrenzyMultiplier(): number { return this.frenzyMultiplier; }

  public getPressureMultiplier(): number { return this.pressureMultiplier; }
}
