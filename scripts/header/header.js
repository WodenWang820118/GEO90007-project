const header = document.getElementById("header")
header.innerHTML +=
`
<div class="header">
  <img id="header-pic" src="assets/flinder_railway.jpg" alt="header-image" />
  <div class="header-text">
    <div>
    <p>City of Melbourne</p>
    <p>Cafes and restaurants</p>
    </div>
    <div>A guide to local tourists </div>
  </div>
</div>
`
// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/header/header.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("header").appendChild(link);