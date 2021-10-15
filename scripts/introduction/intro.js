const intro = document.getElementById("intro")

intro.innerHTML += 
`
<div class="text-container">
  <div class="text">
    <p>The soul of Melbourne</p>
    <p>Music and cafe.</p>
  </div>
</div>
`

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/introduction/intro.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("intro").appendChild(link);