const recommendations = document.getElementById('recommendations')

var data = [
  {
    "image": "Industry Beans",
    "name": "Industry Beans",
    "location" : "3/62 Rose St. Fitzroy",
    "dietary Options": "Vegetarian-Friendly Gluten Free Options, Vegan Options"
  },
  {
    "image": "Tall Timber",
    "name": "Tall Timber",
    "location" : "60 Commercial Rd, Prahran",
    "dietary Options": "Vegetarian-Friendly, Vegan Options, Gluten Free Options"
  },
  {
    "image": "Fourth Chapter",
    "name": "Fourth Chapter",
    "location" : "385 High St, Prahran",
    "dietary Options": "Vegan Options"
  },
]

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
        <div class="col-lg-6">
          <p> <strong>${name}</strong> </p>
          <p> <strong>Location:</strong> ${location}</p>
          <p> <strong>Dietary Options:</strong> ${dietary}</p>
        </div>
      </div>
    </div>
    </br>
  `
});

// load up external CSS file
var link = document.createElement('link');

// set properties of link tag
// the CSS path must be the relative path of the root directory
link.href = 'scripts/recommendations/recommendations.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.getElementById("recommendations").appendChild(link);