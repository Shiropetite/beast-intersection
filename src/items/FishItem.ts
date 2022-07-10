import { Item } from "./Item";

export class FishItem extends Item {
  private healthPoints: number;
  private MAX_HEALTH_POINTS: number;
  private regenPoints: number; // regen per second
  private frenzyDuration: number;
  private frenzyFrequency: number;
  private pressureMultiplier: number; // pressure applied to fishing rod

  constructor(name: string, healthPoints: number, MAX_HEALTH_POINTS: number, regenPoints: number, frenzyDuration: number, frenzyFrequency: number, pressureMultiplier: number ) {
    super(name);
    this.healthPoints = healthPoints;
    this.MAX_HEALTH_POINTS = MAX_HEALTH_POINTS;
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
    return this.MAX_HEALTH_POINTS;
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
