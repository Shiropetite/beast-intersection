import { ToolItem, ToolType } from '.';

export class FishingToolItem extends ToolItem {
  private power: number;
  private durability: number;
  private maxDurability: number;
  private resistance: number;

  constructor(name: string, power: number, maxDurability: number, resistance: number) {
    super(name, ToolType.FISHING);
    this.power = power;
    this.durability = 0;
    this.maxDurability = maxDurability;
    this.resistance = resistance;
  }

  public getDurability(): number {
    return this.durability;
  }

  public getMaxDurability(): number {
    return this.maxDurability;
  }

  public getPower(): number {
    return this.power;
  }

  public getResistance(): number {
    return this.resistance;
  }

  public setDurability(durability: number): void {
    this.durability = durability;
  }

}
