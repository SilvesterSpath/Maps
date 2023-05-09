/// <reference types="@types/googlemaps" />
import { CustomMap } from './CustomMap';
import { User } from './User';

const user = new User();
console.log(user);
const customMap = new CustomMap('map');

customMap.addUserMarker(user);

/* if (typeof google === 'undefined') {
  console.error('Google Maps API not loaded');
} else {
  console.log('Google Maps API was loaded');
  const mapElement = document.getElementById('map');
  const element: Element = mapElement as Element;

  const map = new google.maps.Map(element, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  });
} */
