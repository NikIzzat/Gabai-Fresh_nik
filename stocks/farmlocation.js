var latitude = 3.162000;
var longitude = 101.899353;

// Display the map container
const mapDiv = document.getElementById('map');
mapDiv.style.display = 'block';

// Initialize the map at the user's location
const map = L.map('map').setView([latitude, longitude], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at the user's location
L.marker([latitude, longitude]).addTo(map)
    .bindPopup('Here we are!')
    .openPopup();

//show coords
const coords = document.getElementById("coords");
coords.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;