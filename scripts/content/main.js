
const content = document.getElementById('main')
// TODO: set the text according to the area
// TODO: resize the image; bigger but align with the map above
content.innerHTML +=
`
<div class="introduction">
  <p>
    The City Centre is the core central activities district (CAD) of Greater Melbourne. It encompasses a number of places of significance, which include the, Federation Square, Melbourne Aquarium, Melbourne Town Hall, State Library of Victoria, State Parliament of Victoria and Supreme Court of Victoria. It is also the main terminus for the Melbourne metropolitan and Victorian regional passenger rail networks–being Flinders Street and Southern Cross stations respectively, as well as the most dense section of the Melbourne tram network.
    Bordering its north-east perimeter is the World Heritage-listed Royal Exhibition Building and Carlton Gardens as well as the Melbourne Museum. Just to the south are the Melbourne Convention & Exhibition Centre, Melbourne Casino, Arts Centre Melbourne, and the National Gallery of Victoria.
    It also serves as the main administrative centre for the City of Melbourne as well as the State Government of Victoria – the latter with the suburb of East Melbourne. Two universities have major campuses in the area: the main city campus RMIT University (city campus), and three campuses for Victoria University (City King, Queen, Flinders campuses). The Victorian College of the Arts campus of the University of Melbourne lies just to the south.
  </p>
</div>
`

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/content/main.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("main").appendChild(link);