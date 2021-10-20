const recommendations = document.getElementById('recommendations')

// default recommendations
// prototype; information not real
// data from the global variable from data-recommendation.js
data.forEach(element => {
  let name = element.name
  let location = element.location
  let dietary = element["dietary Options"]

  recommendations.innerHTML+=
  `
    <div class="container card">
      <div class="row">
        <div class="col-lg-6">
          <img src="assets/recommendations/${name}.jpg" class="img-fluid" style="width:600px;">
        </div>
        <div class="col-lg-6 information">
          <p> <strong>${name}</strong> </p>
          <p> <strong>Location:</strong> ${location}</p>
          <p> <strong>Dietary Options:</strong> ${dietary}</p>
        </div>
      </div>
    </div>
    </br>
  `
});

/**
 * The function get the event from the area button
 * and bring the recommendation dynamically
 * @param {*} e 
 */
function setRecommend(e) {
  console.log(e.currentTarget.id)
  let area = e.currentTarget.id
  // reset the innerHTML; list of pictures
  recommendations.innerHTML=''
  let lst = []

  if (area == 'central') {
    lst = ['EauDeVie', 'Maha', 'TipoOO']
  }
  else if (area == 'east') {
    lst = ['LuneCroissant', 'RicePaperScissors', 'VueDeMonde']
  }
  else if (area == 'north') {
    lst = ['Dexter', 'HalfMoonCafe', 'LaksaKing']
  }
  else if (area == 'south') {
    lst = ['Amaru', 'attica', 'LEFTFIELD']
  }
  else if (area == 'west') {
    lst = ['Fourth Chapter', 'Industry Beans', 'Tall Timber']
  }

  lst.forEach(pic_name => {
    recommendations.innerHTML+=
    `
      <div class="container card">
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/recommendations/${area}/${pic_name}.jpg" class="img-fluid" style="width:600px;">
          </div>
          <div class="col-lg-6 information">
            <p> <strong>Industry Beans</strong> </p>
            <p> <strong>Location:</strong> 3/62 Rose St. Fitzroy</p>
            <p> <strong>Dietary Options:</strong> Vegetarian-Friendly Gluten Free Options, Vegan Options</p>
          </div>
        </div>
      </div>
      </br>
    `
  })
  loadRecommendCSS()
}

/**
 * The function to reload the CSS dynamically
 */
function loadRecommendCSS() {
  // load up external CSS file
  var link = document.createElement('link');

  // set properties of link tag
  // the CSS path must be the relative path of the root directory
  link.href = 'scripts/recommendations/recommendations.css';
  link.rel = 'stylesheet';
  link.type = 'text/css';

  // append link element to html
  document.getElementById("recommendations").appendChild(link);
}

loadRecommendCSS()