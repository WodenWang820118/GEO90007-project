// TODO: import CSS file into the JS file since it's hard to debug
// the CSS file only applies to the html in this JS file

// const url = "/content.css"
// document.head.innerHTML += `<link type="text/css" href=${url}">`

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
    <li><a href="#"><i class="fas fa-coffee"></i></a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
    <li><a href="#">item</a></li>
  </ul>
</div>

<div class="introduction">
  <p>Travel the way well-planned</p>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante mauris, mollis non ante in, ornare vehicula libero. Aenean dictum quis dui eget fringilla. Etiam porta vel ligula at laoreet. Aenean sed turpis elementum, volutpat lacus rutrum, commodo sem. Donec lacus orci, consectetur vel lectus ac, pellentesque viverra odio. Sed bibendum porta lectus, ac ultrices leo aliquam dapibus. Fusce congue scelerisque ipsum, sed vulputate ipsum sodales non. Nunc placerat suscipit massa et interdum. Vivamus rhoncus condimentum sem, in condimentum erat malesuada vitae. Integer dictum, metus in feugiat convallis, eros orci pretium lectus, ut pharetra metus dui et turpis. Aliquam cursus dui in velit posuere elementum. Morbi sit amet molestie neque. Nam eget leo sed risus bibendum fermentum. Sed luctus, neque at lacinia condimentum, leo diam auctor enim, nec facilisis est eros id dolor.

  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec maximus nisi. Vivamus sit amet ipsum tortor. Donec convallis, dolor at consectetur blandit, magna lacus bibendum dolor, porttitor elementum augue tellus sit amet turpis. Suspendisse non tortor in nisi scelerisque congue ac ut nisl. Ut sit amet commodo quam. Pellentesque et tortor ut est posuere volutpat. Donec gravida fermentum purus, vitae fermentum leo pulvinar eget. Pellentesque ut erat lorem. Aenean pulvinar nulla augue, eget pellentesque diam tempor nec. Fusce non ex dui. Sed tellus purus, mollis ac rutrum sit amet, posuere sit amet sapien. Quisque sagittis at felis vitae ornare. Etiam varius luctus leo. Vivamus eu venenatis quam. Vivamus consectetur sem a justo posuere pretium.
  </p>
</div>

<style scoped>
body {
  font-family: 'Roboto Slab', sans-serif;
  background: #c7cce2b0;
}

.introduction {
  padding: 0 15%;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.sidebar {
  position: absolute;
  left: -250px;
  width: 250px;
  height:100%;
  background: #042331;
  transition: all 0.5s ease;
}

.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
}

.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;
}

ul li:hover a {
  padding-left: 50px;
}

.sidebar ul a i {
  margin-right: 16px;
}

#check {
  display: none;

}

label #btn, label #cancel {
  position: relative;
  cursor: pointer;
  background: #042331;
  border-radius: 3px;
}

label #btn {
  left: 40px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 6px 12px;
  transition: all 0.5s;
}

label #cancel {
  z-index: 11;
  left: -195px;
  top:17px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all 0.5s ease;
}

#check:checked ~ .sidebar {
  left: 0;
}

#check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}

#check:checked ~ label #cancel {
  left: 195px;
}

</style>


`