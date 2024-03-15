import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { default as view } from "./view";

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: "map",
  view,
});
