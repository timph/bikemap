const createWriteStream = require('fs').createWriteStream
const pipeline = require('stream').pipeline
const promisify = require('util').promisify
const rideData = require('./ride-simple.json')
const fetch = require('node-fetch');

const streamPipeline = promisify(pipeline);

function getCoordinates() {
  const coord = rideData.features[0].geometry.coordinates;
  const markers = [];
  for (let i = 0; i < coord.length; i++) {
    const newCoord = { coord: {} }
    let store = false

    if (i % 30 === 0) {
      newCoord.color = "red";
      store = true
    }
    if (i === 0) {
      newCoord.color = "white";
      newCoord.label = "Start";
      store = true
    }
    if (i === coord.length - 1) {
      newCoord.color = "blue";
      newCoord.label = "Stripe";
      store = true
    }

    if (store) {
      newCoord.coord.lat = coord[i][1];
      newCoord.coord.lon = coord[i][0];
      markers.push(newCoord)
    }
  }
  return markers;
}

function getMap() {
  const allMarkers = getCoordinates();

  let markers = {
    "center": {
      "lat": 47.579,
      "lon": -122.31
    },
    "width": 400,
    "height": 600,
    "zoom": 13,
    "markers": allMarkers
  }

  console.log(JSON.stringify(markers, null, 2))

  const response = fetch('https://stripe-bikemap.appspot.com/map.png', {
    method: 'post',
    body: JSON.stringify(markers)
  })
    .then(response => {
      streamPipeline(response.body, createWriteStream('./bikemap3.png'));
    })
}

getMap()
