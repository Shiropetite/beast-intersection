import { Item } from "./Item";

export class BugItem extends Item {
  private healthPoints: number;
  private readonly maxHealthPoints: number;
  private readonly directionDuration: number; // time between change of direction

  constructor(
    name: string,
    maxHealthPoints: number,
    directionDuration: number,
  ) {
    super(name);
    this.healthPoints = maxHealthPoints;
    this.maxHealthPoints = maxHealthPoints;
    this.directionDuration = directionDuration;
  }

  public getHealthPoints(): number { return this.healthPoints; }

  public setHealthPoints(healthPoints: number): void { this.healthPoints = healthPoints; }

  public getMaxHealthPoints(): number { return this.maxHealthPoints; }

  public getDirectionDuration(): number { return this.directionDuration; }
}