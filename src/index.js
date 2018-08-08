// Fix import
import { initMap } from './map';

ymaps.ready(() => {
  initMap(ymaps, 'map');
  // Remove console.log
});
