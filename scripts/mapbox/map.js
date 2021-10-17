//load map from mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXAxMy1pdiIsImEiOiJja3VqYWdxMHgxZXY5MnZ0NGR6MHcyajcyIn0.JYGckVyFytw5iPy6um8vcw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/group13-iv/ckutkaoq4437117pih94cjm9n'
});


map.on('load', () => {
  let layers = [{
      "name": "Cafes & Restaurants",
      "color": "#f3afaf"
    },
    {
      "name": "Pubs, Taverns & Bars",
      "color": "#f9b22f"
    },
    {
      "name": "Takeaway Food Services",
      "color": "#88b5d3"
    },
    // {
    //   "name": "Live music Venue",
    //   "color":"#99ad8a"
    // }
  ];


  //add legend to the map
  let legend = document.querySelector('#legend');

  for (let layer of layers) {
    let item = document.createElement('div');

    let key = document.createElement('span');
    key.classList.add('legend-key');
    key.style.backgroundColor = layer.color;

    let value = document.createElement('span');
    value.innerHTML = layer.name;

    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }

  //HOVER EFFECTS
  //?????????not sure, maybe we do not need this function:'mousemove'
  map.on('mousemove', e => {

  });
  // Change the icon to a pointer icon when you mouse over a DOT
  map.on('mouseenter', 'Dining-Out', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pan icon when it leaves.
  map.on('mouseleave', 'Dining-Out', e => {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseenter', 'Live-Music', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pan icon when it leaves.
  map.on('mouseleave', 'Live-Music', e => {
    map.getCanvas().style.cursor = '';
  });
  
  ////Click effects for cafes and restaurants dataset
  map.on('click', 'Dining-Out', e => {
    // console.log(e.features[0])
    let feature = e.features[0]
    console.log(feature.properties)
    const lng = feature.properties.longitude
    const lat = feature.properties.latitude
    const coordinates = [lng, lat]
    const industry = feature.properties.industry
    const address = feature.properties.address
    const venueName = feature.properties.name
    const seat_in = feature.properties.indoor
    const seat_out = feature.properties.outdoor
    const seat_total = seat_in + seat_out
    
    if (industry == 'Cafes and Restaurants'){
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(('<cafe>' + venueName + '</cafe><h6><br> <b>Address: </b>' + address + 
      '<br><b>Seating Capacity: </b>' + seat_total + '<br><b>Type</b>' + industry + '</h6>'))
      .addTo(map)
    }
    else if (industry == 'Pubs, Taverns and Bars'){
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(('<ptb>' + venueName + '</ptb><h6><br> <b>Address: </b>' + address + 
      '<br><b>Seating Capacity: </b>' + seat_total + '<br><b>Type: </b>' + industry + '</h6>'))
      .addTo(map)
    }
    else if (industry == 'Takeaway Food Services'){
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(('<tw>' + venueName + '</tw><h6><br> <b>Address: </b>' + address + 
      '<br><b>Seating Capacity: </b>' + seat_total + '<br><b>Type: </b>' + industry + '</h6>'))
      .addTo(map)
    }
    //add effects when click on a venue
    map.flyTo({
      center: e.lngLat,
      zoom: 13
    });
  });

  //Click effects for live music dataset 
  map.on('click', 'live-music-venues', e => {
    let feature = e.features[0]
    const m_address = feature.properties.venue_address
    const venueName = feature.properties.venue_name
    const wbsite = feature.properties.website
    const type_v = feature.properties.space_type
    const long = feature.properties.lon
    const lati = feature.properties.lat
    const coordin = [long, lati]

    new mapboxgl.Popup()
      .setLngLat(coordin)
      .setHTML(('<mu>' + venueName + '</mu><h6><br> <b>Address: </b>' + m_address + 
      '<br><b>Live Music in: </b>' + type_v + '</h6>'))
      .addTo(map)

      map.flyTo({
        center: e.lngLat,
        zoom: 13
      });
  });

  //TODO: Layers ? 
  //https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer

  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })
  );

  const scale = new mapboxgl.ScaleControl({
    maxWidth: 100,
    unit: 'imperial'
  });
  
  map.addControl(scale);
  scale.setUnit('metric');

  map.addControl(new mapboxgl.NavigationControl());

});

map.on('idle', () => {
  // If these two layers were not added to the map, abort
  if (!map.getLayer('Dining-Out') || !map.getLayer('Live-Music')) {
    return;
  }

  // Enumerate ids of the layers.
  const toggleableLayerIds = ['Dining-Out', 'Live-Music'];
  for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
    if (document.getElementById(id)) {
      continue;
    }

    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
    link.className = 'active';

    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {
      const clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
      );

      // Toggle layer visibility by changing the layout object's visibility property.
      if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
      } else {
          this.className = 'active';
          map.setLayoutProperty(
          clickedLayer,
          'visibility',
          'visible'
        );
      }
    }
    const layers = document.getElementById('menu');
    layers.appendChild(link);

  }
})

//The following function defines the button effects.
//when click on 'central', 'north'...etc. the map will adjust the coordinates to that suburb
function flytoCentral() {
  
  map.flyTo({
    center: [144.9632386,-37.8166373],
    zoom: 14.19,
    essential: true
  });
}

function flytoNorth() {
  
  map.flyTo({
    center: [144.9381133, -37.7968057],
    zoom: 14.19,
    essential: true
  });
}

function flytoEast() {
 
  map.flyTo({
    center: [144.972592, -37.815423],
    zoom: 14.19,
    essential: true
  });
}

function flytoSouth() {
  
  map.flyTo({
    center: [144.9473004,-37.8340578],
    zoom: 14.19,
    essential: true
  });
}

function flytoWest() {
  
  map.flyTo({
    center: [144.9221958,-37.8105382,],
    zoom: 14.19,
    essential: true
  });
}