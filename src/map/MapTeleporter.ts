import { MapConfig, MapService } from "../services";

export class MapTeleporter {

  private readonly destinationMap: MapConfig;
  private readonly playerTop: number;
  private readonly playerLeft: number;

  constructor(destinationMap: MapConfig, playerTop: number, playerLeft: number) {
    this.destinationMap = destinationMap;
    this.playerTop = playerTop;
    this.playerLeft = playerLeft;
  }

  teleport(): void {
    MapService.getInstance().buildMap(this.destinationMap);
    MapService.getInstance().initPlayerMapCell(this.playerTop, this.playerLeft);
  } 

}