//load map from mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXAxMy1pdiIsImEiOiJja3VqYWdxMHgxZXY5MnZ0NGR6MHcyajcyIn0.JYGckVyFytw5iPy6um8vcw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/group13-iv/ckutkaoq4437117pih94cjm9n'
});


map.on('load', () => {

    //HOVER EFFECTS for cafes and restaurants layer #hover
    map.on('mousemove', 'Dining-Out', e => {
      let dininginfo = map.queryRenderedFeatures(e.point, {
        layers: ['Dining-Out']
      
      });
  
      if (dininginfo.length > 0) {
       
        document.querySelector('#info').innerHTML = 
        `
        <p><span class="type">Type : ${dininginfo[0].properties.industry}</span>
        <br><b>${dininginfo[0].properties.name}</b>
        <br><b>Address:</b> ${dininginfo[0].properties.address}
        <br><b>Seating Capasity: </b> ${dininginfo[0].properties.indoor + dininginfo[0].properties.outdoor} 
        <br> ${(dininginfo[0].properties.outdoor == 0) ? "No outdoor dining space" : "Outdoor dining space available"}
        </p>
  
        `
      }
      else {
        document.querySelector('#info').innerHTML = '<p>Move your mouse to view venue details.</p>';
      }
  
    });

    //HOVER EFFECTS for Live-Music layer
    map.on('mousemove', 'Live-Music', e => {
      let musicinfo = map.queryRenderedFeatures(e.point, {
        layers: ['Live-Music']
      
      });
  
      if (musicinfo.length > 0){
  
        document.querySelector('#info').innerHTML = 
        `
        <lmu><b> Live music venue :</b>  
        <a href=${musicinfo[0].properties.website } target="_blank">
        <b>${musicinfo[0].properties.venue_name}</b>
        </a> 
        <br> ${(musicinfo[0].properties.venue_address == "Null") ? "" : "<b>Address: </b><p id='vadd'></p>"} 
        ${(musicinfo[0].properties.space_type == "Null") ? "" : "<b>Live Music in: </b><p id='typev'></p>"} 
        </lmu>
        `
        var x=musicinfo[0].properties.venue_address;
        var y=musicinfo[0].properties.space_type
        document.getElementById("vadd").innerHTML=x;
        document.getElementById("typev").innerHTML=y;
      }
      else {
        document.querySelector('#info').innerHTML = '<p>Move your mouse over a building to view details.</p>';
      }
  
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
    
    
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(('<venue>' + venueName + '</venue>'))
    .addTo(map)
   
    //add effects when click on a venue
    map.flyTo({
      center: e.lngLat,
      zoom: 16
    });
  });

  //Click effects for live music dataset 
  map.on('click', 'Live-Music', e => {
    let feature = e.features[0]
    const m_address = feature.properties.venue_address
    const venueName = feature.properties.venue_name
    //const wbsite = feature.properties.website
    const type_v = feature.properties.space_type
    const long = feature.properties.lon
    const lati = feature.properties.lat
    const coordin = [long, lati]

    new mapboxgl.Popup()
      .setLngLat(coordin)
      .setHTML(('<venue>' + venueName + '</venue>'))
      .addTo(map)

      map.flyTo({
        center: e.lngLat,
        zoom: 16
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
function flytoCentral(e) {
  map.flyTo({
    center: [144.9632386,-37.8166373],
    zoom: 14.19,
    essential: true
  });
}

function flytoNorth(e) {
  map.flyTo({
    center: [144.9381133, -37.7968057],
    zoom: 14.19,
    essential: true
  });
}

function flytoEast(e) {
  map.flyTo({
    center: [144.972592, -37.815423],
    zoom: 14.19,
    essential: true
  });
}

function flytoSouth(e) {
  map.flyTo({
    center: [144.9473004,-37.8340578],
    zoom: 14.19,
    essential: true
  });
}

function flytoWest(e) {
  map.flyTo({
    center: [144.9221958,-37.8105382,],
    zoom: 14.19,
    essential: true
  });
}
