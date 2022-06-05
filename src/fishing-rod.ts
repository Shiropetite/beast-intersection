export class FishingRod {
  private readonly DAMAGE : number; // dommage ingligé au poisson par "seconde"
  private readonly REELING_DAMAGE : number; // dommage critique infligé lorsque le joueur ferre un poisson
  private readonly MAX_TENSION : number; // Tension maximale supportée par la canne à pêche
  private tension : number; // tension actuelle de la canne à pêche

  //#region Constructor
  constructor(damage: number, reelingDamage: number, maxTension: number) {
    this.DAMAGE = damage;
    this.REELING_DAMAGE = reelingDamage;
    this.MAX_TENSION = maxTension;
    this.tension = 0;
  }
  //#endregion
  
  //#region Getters & Setters
  getDamage(): number {
    return this.DAMAGE;
  }

  getReelingDamage(): number {
    return this.REELING_DAMAGE;
  }

  getMaxTension(): number {
    return this.MAX_TENSION;
  }

  getTension(): number {
    return this.tension;
  }

  setTension(tension: number): void {
    this.tension = tension
  }
  //#endregion

}