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
          <img src="assets/recommendations/${name}.jpg" class="img-fluid">
        </div>
        <div class="col-lg-6">
          <p> ${name} </p>
          <p> Location: ${location}</p>
          <p> Dietary Options: ${dietary}</p>
        </div>
      </div>
    </div>
    </br>
  `
});