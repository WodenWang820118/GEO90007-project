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


  // to add the pop-up effect when clicking on one of the murder location on map
  map.on('click', 'cafes-restaurants_info', e => {
    var date = e.features[0].properties.reported_date.toString();
    var year = date.slice(0, 4);
    var month = MonthNameMapping[date.slice(4, 6)];
    var day = date.slice(6, 8);

    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<p style="font-weight: bold;">' + 'Killed: ' + month + ' ' + day + ', ' + year + 
      '</p><p><em>' + "Address " + e.features[0].properties.Street + '</em></p>')
      .addTo(map);
  });

    //add control to the map

});