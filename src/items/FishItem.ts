import { Item } from "./Item";

export class FishItem extends Item {
  private healthPoints: number;
  private readonly maxHealthPoints: number;
  private readonly regenPoints: number; // regen per second
  private readonly frenzyDuration: number;
  private readonly frenzyFrequency: number;
  private readonly pressureMultiplier: number; // pressure applied to fishing rod

  constructor(name: string, healthPoints: number, maxHealthPoints: number, regenPoints: number, frenzyDuration: number, frenzyFrequency: number, pressureMultiplier: number ) {
    super(name);
    this.healthPoints = healthPoints;
    this.maxHealthPoints = maxHealthPoints;
    this.regenPoints = regenPoints;
    this.frenzyDuration = frenzyDuration;
    this.frenzyFrequency = frenzyFrequency;
    this.pressureMultiplier = pressureMultiplier;
  }

  public getHealthPoints(): number {
    return this.healthPoints;
  }

  public setHealthPoints(healthPoints: number): void {
    this.healthPoints = healthPoints;
  }

  public getMaxHealthPoints(): number {
    return this.maxHealthPoints;
  }

  public getRegenPoints(): number {
    return this.regenPoints;
  }

  public getFrenzyDuration(): number {
    return this.frenzyDuration;
  }

  public getFrenzyFrequency(): number {
    return this.frenzyFrequency;
  }

  public getPressureMultiplier(): number {
    return this.pressureMultiplier;
  }

}
