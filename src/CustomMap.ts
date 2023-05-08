export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId);
    const element: Element = mapElement as Element;

    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
