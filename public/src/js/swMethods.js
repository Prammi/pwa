

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

