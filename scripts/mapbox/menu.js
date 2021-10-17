const menu = document.getElementById("menu")

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/mapbox/menu.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("menu").appendChild(link);