
const content = document.getElementById('main')
content.innerHTML +=
`
<div class="introduction">
  <div class="splide">
    <div class="splide__track">
      <div class="splide__list">
        <p class="splide__slide">
          The City Centre is the core central activities district (CAD) of Greater Melbourne. It encompasses a number of places of significance, which include the, Federation Square, Melbourne Aquarium, Melbourne Town Hall, State Library of Victoria, State Parliament of Victoria and Supreme Court of Victoria. It is also the main terminus for the Melbourne metropolitan and Victorian regional passenger rail networks–being Flinders Street and Southern Cross stations respectively, as well as the most dense section of the Melbourne tram network.
          Bordering its north-east perimeter is the World Heritage-listed Royal Exhibition Building and Carlton Gardens as well as the Melbourne Museum. Just to the south are the Melbourne Convention & Exhibition Centre, Melbourne Casino, Arts Centre Melbourne, and the National Gallery of Victoria.
          It also serves as the main administrative centre for the City of Melbourne as well as the State Government of Victoria – the latter with the suburb of East Melbourne. Two universities have major campuses in the area: the main city campus RMIT University (city campus), and three campuses for Victoria University (City King, Queen, Flinders campuses). The Victorian College of the Arts campus of the University of Melbourne lies just to the south.
        </p>
        <p class="splide__slide">
          Almost all the major theatres in Melbourne are located in the CBD or its fringes. Historic theatres including the Princess Theatre, Regent Theatre, Forum Theatre, Comedy Theatre, Athenaeum Theatre, Her Majesty's Theatre, and the Capitol Theatre are all located within the Hoddle Grid. The Arts Centre Melbourne (which includes the State Theatre, Hamer Hall, the Playhouse and the Fairfax Studio), and the Melbourne Recital Centre are located just to the south of the CBD, with the Sidney Myer Music Bowl in parklands to the east.
          The Federation Square arts complex occupies a prime site on the corner of Flinders and Swanston Streets, and includes the Australian Centre for the Moving Image, the Australian art galleries of the National Gallery of Victoria, the Koorie Heritage Trust, and the Deakin Edge auditorium.
          The CBD is home to many small independent galleries, often in the upper floors of older buildings or down laneways, and some of the most commercial galleries in Victoria are also in 'the city'.
        </p>
      </div>
    </div>
  </div>
</div>
`

new Splide('.splide').mount()

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/content/main.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("main").appendChild(link);