const defaultView = [20, 0];
const defaultZoom = 2;

const map = L.map('map', {
  worldCopyJump: true,
  minZoom: 2,
}).setView(defaultView, defaultZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

const places = [
  { name: 'New York', coords: [40.7128, -74.006], note: 'USA' },
  { name: 'London', coords: [51.5072, -0.1276], note: 'United Kingdom' },
  { name: 'Tokyo', coords: [35.6762, 139.6503], note: 'Japan' },
  { name: 'Nairobi', coords: [-1.2864, 36.8172], note: 'Kenya' },
  { name: 'Sydney', coords: [-33.8688, 151.2093], note: 'Australia' },
  { name: 'Rio de Janeiro', coords: [-22.9068, -43.1729], note: 'Brazil' },
];

const placesList = document.getElementById('placesList');
const coordReadout = document.getElementById('coordReadout');

places.forEach((place) => {
  const marker = L.marker(place.coords)
    .addTo(map)
    .bindPopup(`<strong>${place.name}</strong><br/>${place.note}`);

  const li = document.createElement('li');
  const button = document.createElement('button');
  button.className = 'place-btn';
  button.innerHTML = `${place.name}<small>${place.note}</small>`;
  button.addEventListener('click', () => {
    map.flyTo(place.coords, 10, { duration: 1.2 });
    marker.openPopup();
  });

  li.append(button);
  placesList.append(li);
});

map.on('mousemove', (event) => {
  const { lat, lng } = event.latlng;
  coordReadout.textContent = `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
});

map.on('mouseout', () => {
  coordReadout.textContent = 'Lat: --, Lng: --';
});

document.getElementById('resetBtn').addEventListener('click', () => {
  map.flyTo(defaultView, defaultZoom, { duration: 1 });
});

document.getElementById('locateBtn').addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const current = [coords.latitude, coords.longitude];
      map.flyTo(current, 11, { duration: 1.1 });
      L.marker(current).addTo(map).bindPopup('You are here').openPopup();
    },
    () => {
      alert('Unable to access your location. Please check browser permissions.');
    }
  );
});
