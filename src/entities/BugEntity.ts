export class BugEntity {

    private readonly maxHealthPoints: number;
    private readonly directionDuration: number; // time between change of direction

    private healthPoints: number;
    
    public constructor(maxHealthPoints: number, directionDuration: number) {
        this.maxHealthPoints = maxHealthPoints;
        this.directionDuration = directionDuration;

        this.healthPoints = maxHealthPoints;
    }

    public getHealthPoints(): number { return this.healthPoints; }

    public setHealthPoints(healthPoints: number): void { this.healthPoints = healthPoints; }
  
    public getMaxHealthPoints(): number { return this.maxHealthPoints; }
  
    public getDirectionDuration(): number { return this.directionDuration; }

}