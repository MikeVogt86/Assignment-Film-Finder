RadioButton = document.getElementsByName("filter-button");
ListMovieHere = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
  ListAllMovies(movies);
});

for (let i of RadioButton) {
  i.addEventListener("change", (event) => {
    target = event.target;
    selector = target.id;
    HandleOnChangeEvent(target, selector);
  });
}

document.getElementById("search-movies").addEventListener("search", MyFunction);
function MyFunction() {
  let a = document.getElementById("search-movies");

  value = a.value;

  selector = "search-movies";
  HandleOnChangeEvent(selector, value);
}

function HandleOnChangeEvent() {
  switch (selector) {
    case "latest":
      ByLatest = movies
        .filter((movies) => movies.year > "2014")
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByLatest);
      console.log(ByLatest);
      break;
    case "avenger":
      ByAvenger = movies
        .filter((movies) => movies.title.includes("Avengers"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByAvenger);
      console.log(ByAvenger);
      break;
    case "x-men":
      ByXmen = movies
        .filter((movies) => movies.title.includes("X-Men"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByXmen);
      console.log(ByXmen);
      break;
    case "princess":
      ByPrincess = movies
        .filter((movies) => movies.title.includes("Princess", "princess"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByPrincess);
      console.log(ByPrincess);
      break;
    case "batman":
      ByBatMan = movies
        .filter((movies) => movies.title.includes("Batman"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByBatMan);
      console.log(ByBatMan);
      break;
    case "all-movies":
      ByAllmovies = movies;
      ResetAll();
      ListAllMovies(ByAllmovies);
      console.log(ByAllmovies);
      break;
    case "search-movies":
      BySearchMovies = movies
        .filter(
          (movies) =>
            movies.title.includes(value) +
            movies.year.includes(value) +
            movies.type.includes(value)
        )
        .map((movies) => movies);
      ResetAll();

      if (BySearchMovies.length == 0) {
        search_movies.value = "No results found";
        console.log(search_movies.value);
        return;
      } else ListAllMovies(BySearchMovies);
      console.log(BySearchMovies);
      break;
  }
}

const ResetAll = function () {
  var nodes = document.getElementById("container").getElementsByTagName("img");
  for (var i = 0, len = nodes.length; i != len; ++i) {
    nodes[0].parentNode.removeChild(nodes[0]);
  }
};

const ListAllMovies = function (movies) {
  movies.forEach((movies) => {
    let List1 = document.createElement("a");
    let ListImg = document.createElement("img");

    List1.href = "https://www.imdb.com/title/" + movies.imdbID;
    ListImg.src = movies.poster;
    ListMovieHere.appendChild(List1);
    List1.appendChild(ListImg);
  });
};
