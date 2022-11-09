import { ToolItem, ToolType } from './ToolItem';

export class CatchingToolItem extends ToolItem {
  private readonly power: number;
  private readonly catchRadius: number;
  private readonly directionDurationBonus: number;

  constructor(name: string, power: number, catchRadius: number, directionDurationBonus: number) {
    super(name, ToolType.CATCHING);
    this.power = power;
    this.catchRadius = catchRadius;
    this.directionDurationBonus = directionDurationBonus;
  }

  public getPower(): number { return this.power; }

  public getCatchRadius(): number { return this.catchRadius; }

  public getDirectionDurationBonus(): number { return this.directionDurationBonus; }
}