import { MapTeleporter } from "../../../map/MapTeleporter";
import { MapService } from "../../../services";
import { testMap2 } from "./test-map2";

export const testMap = {
  map: [
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G', 'W', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'W', 'W', 'G', 'G', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ],
  initMap: () => {
    MapService.get().addTeleporter(new MapTeleporter(testMap2, 7, 2), 0, 12)
    MapService.get().addTeleporter(new MapTeleporter(testMap2, 7, 3), 0, 13)
  }
}