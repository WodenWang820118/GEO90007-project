//load map from mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXAxMy1pdiIsImEiOiJja3VqYWdxMHgxZXY5MnZ0NGR6MHcyajcyIn0.JYGckVyFytw5iPy6um8vcw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/group13-iv/ckujan42s62yl17qm7o5ve1hg'
});

map.on('load', e => {
  let layers = [{
      "name": "Cafes & Restaurants",
      "color": "#fbb32d"
    },
    {
      "name": "Pubs, Taverns & Bars",
      "color": "#10bc83"
    },
    {
      "name": "Takeaway Food Services",
      "color": "#2a7cef"
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

  // Change the icon to a pointer icon when you mouse over a DOT
  map.on('mouseenter', 'cafes-restaurants_info', e => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pan icon when it leaves.
  map.on('mouseleave', 'cafes-restaurants_info', e => {
    map.getCanvas().style.cursor = '';
  });

  // TODO: the click event doesn't work
  // TODO: the hover effect doesn't work
  
  // to add the pop-up effect when clicking on one of the murder location on map
  map.on('click', 'cafes-restaurants_info', e => {
    // console.log(e.features[0])
    let feature = e.features[0]
    console.log(feature.properties)
    const lng = feature.properties.longitude
    const lat = feature.properties.latitude
    const coordinates = [lng, lat]
    const industry = feature.properties.Industry

    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(industry)
    .addTo(map)
  });
});