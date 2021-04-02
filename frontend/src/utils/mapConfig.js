import 'ol/ol.css';
import Map from "ol/Map";
import View from "ol/View";
import Feature from 'ol/Feature';
import {Icon, Style} from 'ol/style';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import * as proj from 'ol/proj';

const rasterLayer = new TileLayer({
  source: new TileJSON({
    url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
    crossOrigin: '',
  }),
});
const iconFeature0 = new Feature({
  geometry: new Point(proj.transform([-12.0704, 26.678], 'EPSG:4326', 'EPSG:3857')),
  name: '-12.0704, 26.678',
  population: 4000,
  rainfall: 500,
});

const iconFeature1 = new Feature({
  geometry: new Point(proj.transform([-22.0704, 16.628], 'EPSG:4326', 'EPSG:3857')),
  name: '-22.0704, 16.628',
  population: 4000,
  rainfall: 500,
});

const iconFeature2 = new Feature({
  geometry: new Point(proj.transform([-17.2341, 10.358], 'EPSG:4326', 'EPSG:3857')),
  name: '-17.2341, 10.358',
  population: 4000,
  rainfall: 500,
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'https://openlayers.org/en/latest/examples/data/icon.png'
  }),
});

iconFeature0.setStyle(iconStyle);
iconFeature1.setStyle(iconStyle);
iconFeature2.setStyle(iconStyle);

const vectorSource = new VectorSource({
  features: [iconFeature0, iconFeature1, iconFeature2],
});

export const vectorLayer = new VectorLayer({
  source: vectorSource,
});


export const olMap = new Map({
  layers: [rasterLayer],
  target: undefined, 
  view: new View({
    center: [0, 0],
    zoom: 3,
  }),
});
