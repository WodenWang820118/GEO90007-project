const intro = document.getElementById('main')
intro.innerHTML +=
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
    <li><a>item</a></li>
    <li><a>item</a></li>
    <li><a>item</a></li>
    <li><a>item</a></li>
  </ul>
</div>

<div class="introduction">
  <p>Travel the way well-planned</p>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante mauris, mollis non ante in, ornare vehicula libero. Aenean dictum quis dui eget fringilla. Etiam porta vel ligula at laoreet. Aenean sed turpis elementum, volutpat lacus rutrum, commodo sem. Donec lacus orci, consectetur vel lectus ac, pellentesque viverra odio. Sed bibendum porta lectus, ac ultrices leo aliquam dapibus. Fusce congue scelerisque ipsum, sed vulputate ipsum sodales non. Nunc placerat suscipit massa et interdum. Vivamus rhoncus condimentum sem, in condimentum erat malesuada vitae. Integer dictum, metus in feugiat convallis, eros orci pretium lectus, ut pharetra metus dui et turpis. Aliquam cursus dui in velit posuere elementum. Morbi sit amet molestie neque. Nam eget leo sed risus bibendum fermentum. Sed luctus, neque at lacinia condimentum, leo diam auctor enim, nec facilisis est eros id dolor.

  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec maximus nisi. Vivamus sit amet ipsum tortor. Donec convallis, dolor at consectetur blandit, magna lacus bibendum dolor, porttitor elementum augue tellus sit amet turpis. Suspendisse non tortor in nisi scelerisque congue ac ut nisl. Ut sit amet commodo quam. Pellentesque et tortor ut est posuere volutpat. Donec gravida fermentum purus, vitae fermentum leo pulvinar eget. Pellentesque ut erat lorem. Aenean pulvinar nulla augue, eget pellentesque diam tempor nec. Fusce non ex dui. Sed tellus purus, mollis ac rutrum sit amet, posuere sit amet sapien. Quisque sagittis at felis vitae ornare. Etiam varius luctus leo. Vivamus eu venenatis quam. Vivamus consectetur sem a justo posuere pretium.
  </p>
</div>
`

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = '/scripts/content/content.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// Loaded successfully
// link.onload = function() {
// 	console.log('success');
// };

// Loading failed
// link.onerror = function() {
// 	console.log('error');
// };

// append link element to html
document.getElementById("main").appendChild(link);