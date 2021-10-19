const pic_list = document.getElementById('pic-list')

lst = ['bourke', 'CBD_Melbourne', 'laneway_art', 'Cricket_Ground']
lst.forEach(element => {
  pic_list.innerHTML += `<img src="assets/central/${element}.jpg" class="img-fluid splide__slide" style="width:600px;">`
});
var splide = new Splide('.splide')
splide.mount()

/**
 * The function returns the id of the area
 * @param {*} event
 * @returns the name of the area
 */
function setAreaPic(e) {
  // check the event id, which is the name of the area
  // reference: https://stackoverflow.com/questions/55811892/event-target-id-returns-an-empty-string
  console.log(e.currentTarget.id)
  // reset the innerHTML to append the new set of images, again
  pic_list.innerHTML = ''
  splide.destroy()
  let area = e.currentTarget.id
  let lst = []
  if (area == 'central') {
    lst = ['bourke', 'CBD_Melbourne', 'laneway_art', 'Cricket_Ground']
  }
  else if (area == 'north') {
    lst = ['Abandoned_wool_store', 'Flemington-Bridge-Station', 'North_Melbourne']
  }
  else if (area == 'east') {
    lst = ['Patrick’s_Cathedral_Court', 'Queens_Bess', 'Victoria_Parliament_House']
  }
  else if (area == 'south') {
    lst = ['South_Melbourne_Townhall', 'South_Melbourne', 'south_melbourne_market']
  }
  else if (area == 'west') {
    lst = ['west_mel', "St_Mary's_Star_of_the_Sea", 'West-Melbourne-Primary-School-now']
  }

  lst.forEach(element => {
    pic_list.innerHTML += `<img src="assets/${area}/${element}.jpg" class="img-fluid splide__slide" style="width:600px;">`
  });
  splide.mount()
}
