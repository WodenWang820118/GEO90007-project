//const map = document.getElementById("map")
var link = document.createElement('link');
// the CSS path must be the relative path of the root directory
link.href = 'scripts/mapbox/legend.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("legend").appendChild(link);
document.getElementById("filters").appendChild(link);
document.getElementById("buttons").appendChild(link);