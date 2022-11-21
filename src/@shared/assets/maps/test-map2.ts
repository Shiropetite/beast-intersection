import { MapTeleporter } from "../../../map/MapTeleporter";
import { MapService } from "../../../services";
import { testMap } from "./test-map";

export const testMap2 = {
  map: [
    ['W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'W', 'W', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'W', 'G', 'W', 'G', 'W'],
    ['W', 'W', 'G', 'G', 'G', 'W'],
    ['W', 'W', 'G', 'G', 'G', 'W'],
    ['W', 'W', 'G', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'G', 'G', 'W'],
  ],
  initMap: () => {
    MapService.get().addTeleporter(new MapTeleporter(testMap, 1, 12), 8, 3)
    MapService.get().addTeleporter(new MapTeleporter(testMap, 1, 13), 8, 4)
  }
}