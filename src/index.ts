/// <reference types="@types/googlemaps" />
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);

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
