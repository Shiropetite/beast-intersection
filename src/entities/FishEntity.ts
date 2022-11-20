export class FishEntity {

    private readonly maxHealthPoints: number;
    private readonly regenPoints: number; // regen per second
    private readonly regenSpeed: number;
    private readonly frenzyDuration: number;
    private readonly frenzyFrequency: number; // time between each frenzy
    private readonly frenzyMultiplier: number; // damage reduction multiplier on frenzy

    private healthPoints: number;
    private onFrenzy: boolean;

    constructor(maxHealthPoints: number, regenPoints: number, regenSpeed: number, frenzyDuration: number, frenzyFrequency: number, frenzyMultiplier: number) {
        this.maxHealthPoints = maxHealthPoints;
        this.regenPoints = regenPoints;
        this.regenSpeed = regenSpeed;
        this.frenzyDuration = frenzyDuration;
        this.frenzyFrequency = frenzyFrequency;
        this.frenzyMultiplier = frenzyMultiplier;

        this.healthPoints = maxHealthPoints;
        this.onFrenzy = false;
    }

    public takeDamage(damage: number) { this.healthPoints -= damage; }
  
    public getMaxHealthPoints(): number { return this.maxHealthPoints; }
  
    public getRegenPoints(): number { return this.regenPoints; }
  
    public getRegenSpeed(): number { return this.regenSpeed }
  
    public getFrenzyDuration(): number { return this.frenzyDuration; }
  
    public getFrenzyFrequency(): number { return this.frenzyFrequency; }
  
    public getFrenzyMultiplier(): number { return this.frenzyMultiplier; }
  
    public getHealthPoints(): number { return this.healthPoints; }

    public setHealthPoints(healthPoints: number): void { this.healthPoints = healthPoints; }

    public isOnFrenzy(): boolean { return this.onFrenzy; }

    public setOnFrenzy(): void { this.onFrenzy = !this.onFrenzy; }

}