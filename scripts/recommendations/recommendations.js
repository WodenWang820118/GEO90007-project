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
    lst = ['EauDeVie', 'Maha', 'Tipo00']
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
    lst = ['fresh-chilli-thai-restaurant', 'pho-hien', 'RoxyKebabCafe']
  }

  surburb_recommendations.forEach(element => {
    let pic_name = element.info.image
    if (lst.includes(pic_name)) {
      let bussiness_name = element.info.name
      let location = element.info.location
      let features = element.info.features
      recommendations.innerHTML+=
      `
        <div class="container card">
          <div class="row">
            <div class="col-lg-6">
              <img src="assets/recommendations/${area}/${pic_name}.jpg" class="img-fluid" style="width:600px;">
            </div>
            <div class="col-lg-6 information">
              <p> <strong>${bussiness_name}</strong> </p>
              <p> <strong>Location:</strong> ${location}</p>
              <p> <strong>Features:</strong> ${features}</p>
            </div>
          </div>
        </div>
        </br>
      `
    }
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