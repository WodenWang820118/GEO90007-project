//load map from mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXAxMy1pdiIsImEiOiJja3VqYWdxMHgxZXY5MnZ0NGR6MHcyajcyIn0.JYGckVyFytw5iPy6um8vcw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/group13-iv/ckutkaoq4437117pih94cjm9n'
});

map.on('load', e => {
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
    {
      "name": "Live music Venue",
      "color":"#99ad8a"
    }
 
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
  //?????????not sure, maybe we do not need this function
  map.on('mousemove', e => {
    let venueinfo = map.queryRenderedFeatures(e.point, {
      layers: ['data-cafes-restaurants-dq0100ver3']
    });
    
    if (venueinfo.length > 0) {
      document.querySelector('#info').innerHTML = '<p>' + venueinfo[0].properties.indoor + 
        '</p><p><em>' + venueinfo[0].properties.outdoor + '</em></p>';
    } else {
      document.querySelector('#info').innerHTML = '<p>Move your mouse over a building to view details.</p>';
    }
  });
  // Change the icon to a pointer icon when you mouse over a DOT
  map.on('mouseenter', 'data-cafes-restaurants-dq0100ver3', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pan icon when it leaves.
  map.on('mouseleave', 'data-cafes-restaurants-dq0100ver3', e => {
    map.getCanvas().style.cursor = '';
  });

  // TODO: the click event doesn't work
  // TODO: the hover effect doesn't work
  
  // to add the pop-up effect when clicking on one of the murder location on map
  map.on('click', 'data-cafes-restaurants-dq0100ver3', e => {
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
      '<br><b>Seating Capacity: </b>' + seat_total + '<br><b>Type: </b>' + industry + '</h6>'))
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
      zoom: 14
    });
  });


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