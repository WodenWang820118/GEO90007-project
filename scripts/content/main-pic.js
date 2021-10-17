const pic_list = document.getElementById('pic-list')

lst = ['bourke', 'CBD_Melbourne', 'laneway_art', 'Cricket_Ground', 'town-hall']
lst.forEach(element => {
  pic_list.innerHTML += `<img src="assets/central/${element}.jpg" class="img-fluid splide__slide">`
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
  console.log(e.target.id)
  // reset the innerHTML to append the new set of images, again
  pic_list.innerHTML = ''
  splide.destroy()
  let area = e.target.id
  let lst = []
  if (area == 'central') {
    lst = ['bourke', 'CBD_Melbourne', 'laneway_art', 'Cricket_Ground', 'town-hall']
  }
  else if (area == 'north') {
    lst = ['Abandoned_wool_store', 'Flemington-Bridge-Station', 'North_melbourne_air', 'North_Melbourne_Town_Hall', 'North_Melbourne']
  }
  else if (area == 'east') {
    lst = ['English_Elm_avenue', 'Patrick’s_Cathedral_Court', 'Queens_Bess', 'Victoria_Parliament_House']
  }
  else if (area == 'south') {
    lst = ['Old_lake_oval_grandstand', 'South_Melbourne_Townhall', 'South_Melbourne', 'Terrace_houses_in_fishley_street']
  }
  else if (area == 'west') {
    lst = ['Oldstjames', 'St_Mary_s_Star_of_the_Sea']
  }

  lst.forEach(element => {
    pic_list.innerHTML += `<img src="assets/${area}/${element}.jpg" class="img-fluid splide__slide">`
  });
  splide.mount()
}
