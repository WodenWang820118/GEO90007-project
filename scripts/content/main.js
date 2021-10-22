const content = document.getElementById('main')
content.innerHTML +=
`
<div class="introduction">
  <p class="intorduction-header">CBD</p>
  <p>
    Almost all the major theatres in Melbourne are located in the CBD or its fringes. Historic theatres including the Princess Theatre, Regent Theatre, Forum Theatre, Comedy Theatre, Athenaeum Theatre, Her Majesty's Theatre, and the Capitol Theatre are all located within the Hoddle Grid. The Arts Centre Melbourne (which includes the State Theatre, Hamer Hall, the Playhouse and the Fairfax Studio), and the Melbourne Recital Centre are located just to the south of the CBD, with the Sidney Myer Music Bowl in parklands to the east.
    The Federation Square arts complex occupies a prime site on the corner of Flinders and Swanston Streets, and includes the Australian Centre for the Moving Image, the Australian art galleries of the National Gallery of Victoria, the Koorie Heritage Trust, and the Deakin Edge auditorium.
  </p>
  <p>
    The CBD is home to many small independent galleries, often in the upper floors of older buildings or down laneways, and some of the most commercial galleries in Victoria are also in 'the city'.
  </p>
</div>
`

function setText(e) {
  let area = e.currentTarget.id
  content.innerHTML = ''
  if (area == 'central') {
    content.innerHTML +=
    `
    <div class="introduction">
      <p class="intorduction-header">CBD</p>
      <p>
        Almost all the major theatres in Melbourne are located in the CBD or its fringes. Historic theatres including the Princess Theatre, Regent Theatre, Forum Theatre, Comedy Theatre, Athenaeum Theatre, Her Majesty's Theatre, and the Capitol Theatre are all located within the Hoddle Grid. The Arts Centre Melbourne (which includes the State Theatre, Hamer Hall, the Playhouse and the Fairfax Studio), and the Melbourne Recital Centre are located just to the south of the CBD, with the Sidney Myer Music Bowl in parklands to the east.
        The Federation Square arts complex occupies a prime site on the corner of Flinders and Swanston Streets, and includes the Australian Centre for the Moving Image, the Australian art galleries of the National Gallery of Victoria, the Koorie Heritage Trust, and the Deakin Edge auditorium.
      </p>
    </div>
    `
  }
  else if (area == 'east') {
    content.innerHTML +=
    `
    <div class="introduction">
      <p class="intorduction-header">East Melbourne</p>
      <p>
        The Parliamentary and Cathedral precincts are located on a gentle hill, known as Eastern Hill. Jolimont railway station is at the top of a ridge, which extends towards Bridge Road in Richmond, from which Jolimont slopes downwards towards the Yarra River and the residential section to the north slopes gradually towards the flatter areas of Fitzroy and Collingwood to the north and Richmond to the south.
      </p>
      <p>
      East Melbourne is served by major tramlines on Wellington Parade and Victoria Parade, both connecting with the CBD in the western edge of the suburb.
      </p>
    </div>
    `
  }
  else if (area == 'north') {
    content.innerHTML +=
    `
    <div class="introduction">
      <p class="intorduction-header">North Melbourne</p>
      <p>
      North Melbourne is due to have a new underground railway station featuring the new “”metro tunnel”” project in Melbourne. There is expected to be a new station on Arden Street which would allow street upgrades.
      </p>
      <p>
        The main shopping strip of Errol Street is located around the old North Melbourne Town Hall.
        Since the 1990s it has become something of an upmarket strip, home to a number of popular cafes and boutiques.
      </p>
    </div>
    `
  }
  else if (area == 'south') {
    content.innerHTML +=
    `
    <div class="introduction">
      <p class="intorduction-header">South Melbourne</p>
      <p>
      South Melbourne is served by tram routes 1, 12, 58, and 96. Route 96 runs along the former St Kilda railway line, which was converted to light rail in 1987.
      In 2006 there were strong calls by a joint council project and the Inner Melbourne Action Group to provide an inner south tram link between the City of Port Phillip and the City of Stonnington, by connecting route 112 with route 8 via Park Street. This would have required less than 100 metres of track to be laid along the Park Street gap to create the new route.
      </p>
    </div>
    `
  }
  else if (area == 'west') {
    content.innerHTML +=
    `
    <div class="introduction">
      <p class="intorduction-header">West Melbourne</p>
      <p>
      West Melbourne lays claim to the southern side of Victoria Street, meaning that a small range of restaurants and shops lie within its boundaries. Otherwise it has no shopping area of its own. However the Direct Factory Outlet development on Spencer Street in the CBD, and Errol Street, North Melbourne are just outside the boundary of West Melbourne.
      </p>
      <p>
      401 North Melbourne – University of Melbourne via Royal Melbourne Hospital, University of Melbourne (Monday to Friday). Operated by Transit Systems Victoria.
      </p>
    </div>
    `
  }
  loadContentCSS()
}

function loadContentCSS() {
  // load up external CSS file
  var link = document.createElement('link');

  // set properties of link tag
  // the CSS path must be the relative path of the root directory
  link.href = 'scripts/content/main.css';
  link.rel = 'stylesheet';
  link.type = 'text/css';

  // append link element to html
  document.getElementById("main").appendChild(link);
}

loadContentCSS()