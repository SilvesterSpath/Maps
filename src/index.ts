/// <reference types="@types/googlemaps" />

const mapElement = document.getElementById('map');
const element: Element = mapElement as Element;

console.log(element);

new google.maps.Map(element, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
