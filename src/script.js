require('dotenv').config();

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

fetch(scriptUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load Google Maps API script');
    }
    return response.text();
  })
  .then((script) => {
    const scriptElement = document.createElement('script');
    console.log(scriptElement);
    scriptElement.textContent = script;
    document.head.append(scriptElement);
    console.log('Google Maps API script loaded');
  })
  .catch((error) => {
    console.error(error);
  });

/* const googleMapsScript = document.querySelector(
  'script[src="https://maps.googleapis.com/maps/api/js?key="]'
);

console.log(googleMapsScript);

googleMapsScript.addEventListener('load', () => {
  googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
});

console.log(googleMapsScript); */
