const sidebar = document.getElementById('sidebar')
sidebar.innerHTML += 
`
<input type="checkbox" id="check"></input>
<label for="check">
  <i class="fas fa-compass" id="btn"></i>
  <i class="fas fa-times" id="cancel"></i>
</label>

<div class="sidebar">
  <header>Filters</header>
  <ul>
    <li><a><i class="fas fa-coffee"></i></a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
  </ul>
</div>
`

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/content/sidebar.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("sidebar").appendChild(link);