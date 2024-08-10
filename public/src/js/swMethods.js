

window.onload = function () {
  fetchRes();
};

function fetchRes() {
  let fetchRes = fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=51"); fetchRes.then(res =>
      res.json()).then(d => {
        if (d.results.length > 0) {
          var temp = "";
          d.results.forEach(itemData => {
            temp += "<div class='card'>";
            temp += " <img loading='lazy' alt=" + itemData.name + " width='100%' height='auto' src='https://img.pokemondb.net/artwork/large/" + itemData.name + ".jpg'>";
            temp += "<h3>" + itemData.name + "</h3> </div>"

          });

          document.getElementById('card-list').innerHTML = temp;
        }
      })
}

// document.getElementById('inputSearch').addEventListener('keyup' ,(event)=>{
//   debugger;
//   console.log(event)

// })

function msg() {
  let value = document.getElementById("inputSearch").value;
  console.log(value);

}
function filterREsults(e) {
  let str = document.getElementById('inputSearch').value;
  let fetchRes = fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=51"); fetchRes.then(res =>
      res.json()).then(d => {
        if (d.results.length > 0) {
          var temp = "";
          d.results.filter(x => x.name.includes(str)).forEach(itemData => {
            temp += "<div class='card'>";
            temp += " <img loading='lazy' alt=" + itemData.name + " width='100%' height='auto' src='https://img.pokemondb.net/artwork/large/" + itemData.name + ".jpg'>";
            temp += "<h3>" + itemData.name + "</h3> </div>"

          });

          document.getElementById('card-list').innerHTML = temp;
        }
      })
}


// var title = document.querySelector('.title');
// var courseFeatureElements = document.querySelectorAll('.course-feature');
// var button = document.querySelector('button');


// function animate() {
//   title.classList.remove('animate-in');
//   for (var i = 0; i < courseFeatureElements.length; i++) {
//     courseFeatureElements[i].classList.remove('animate-in');
//   }
//   button.classList.remove('animate-in');

//   setTimeout(function () {
//     title.classList.add('animate-in');
//   }, 1000);

//   setTimeout(function () {
//     courseFeatureElements[0].classList.add('animate-in');
//   }, 3000);

//   setTimeout(function () {
//     courseFeatureElements[1].classList.add('animate-in');
//   }, 4500);

//   setTimeout(function () {
//     courseFeatureElements[2].classList.add('animate-in');
//   }, 6000);

//   setTimeout(function () {
//     courseFeatureElements[3].classList.add('animate-in');
//   }, 7500);

//   setTimeout(function () {
//     courseFeatureElements[4].classList.add('animate-in');
//   }, 9000);

//   setTimeout(function () {
//     courseFeatureElements[5].classList.add('animate-in');
//   }, 10500);

//   setTimeout(function () {
//     courseFeatureElements[6].classList.add('animate-in');
//   }, 12000);

//   setTimeout(function () {
//     button.classList.add('animate-in');
//   }, 13500);
// }

// animate();

// button.addEventListener('click', function() {
//   animate();
// });