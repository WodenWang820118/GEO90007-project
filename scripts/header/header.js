const header = document.getElementById("header")
header.innerHTML +=
`
<div class="header">
  <img id="header-pic" src="assets/flinder_railway.jpg" alt="header-image" />
  <div class="header-text-block">
    <div class="header-text">
      <p>Sweet queen-city of the golden south</p>
      <p>You have known nothing though</p>
      <p>Find the truth by your own</p>
      <p>through the finger type what you thought<p>
      <p>and thus you will see the soul.</p>
    </div>
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