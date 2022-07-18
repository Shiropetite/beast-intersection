import { Item } from ".";

export enum ToolType {
  FISHING,
  CATCHING,
  MINING
}

export class ToolItem extends Item {
  
  private toolType: ToolType;
  
  constructor(name: string, toolType: ToolType) {
    super(name);
    this.toolType = toolType;
  }

  getToolType(): ToolType {
    return this.toolType;
  }

}
