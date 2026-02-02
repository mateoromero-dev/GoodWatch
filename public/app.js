// Links to HTML elements
const container = document.getElementById("movie-container");
const btnAll = document.getElementById("btn-all");
const btnWatched = document.getElementById("btn-watched");
const btnPending = document.getElementById("btn-pending");
const btnSearch = document.getElementById("btn-search");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");

// Save status to use with sorting
let currentStatus = ""; // '' = all, 'watched', 'pending'

// --- Obtain data from API ---
async function fetchMovies() {
  try {
    //Loading message
    container.innerHTML =
      '<p style="color:white; text-align:center;">Loading...</p>';

    // Building the URL
    // Get the Selector value
    const sortValue = sortSelect.value;
    // Gets Search bar value
    const searchValue = searchInput.value;

    if (!(currentStatus || sortValue || searchValue)) {
      const response = await fetch("http://localhost:3000/api/movies");
      console.log("Final URL: http://localhost:3000/api/movies"); // Debugging to see the final URL
      const movies = await response.json();
      renderMovies(movies);
      return;
    }
    // Base URL
    let url = `http://localhost:3000/api/movies/search?`;

    if (searchValue) {
      url += `title=${searchValue}&`;
    }
    // If theres a status selected we add it to the URL
    if (currentStatus) {
      url += `status=${currentStatus}&`;
    }

    // Same thing with the sort
    if (sortValue) {
      url += `sort=${sortValue}`;
    }

    console.log("Final URL:", url); // Debugging to see the final URL

    const response = await fetch(url);
    const movies = await response.json();

    // Sends the movie list to the HTML Renderer
    renderMovies(movies);
  } catch (error) {
    console.error("Error when retrieving movies:", error);
    container.innerHTML =
      "<p>Error while loading data. Make sure the server is up and running!.</p>";
  }
}

// --- Dinamically creates the HTML based on the movies received---
function renderMovies(movies) {
  // Clears the container before adding new movies
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; width:100%">There are no movies that currently match these filters.</p>';
    return;
  }

  movies.forEach((movie) => {
    // Create card div
    const card = document.createElement("div");
    card.className = "movie-card"; // This links to the CSS file

    // Defines the color based on the status
    // If status is watched, uses class 'watched-tag', if not it uses 'pending-tag'
    const tagClass = movie.status === "watched" ? "watched-tag" : "pending-tag";

    // Fills the details inside of the card
    card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
            <div class="card-body">
                <h3 class="movie-title">${movie.Title}</h3>
                
                <div class="movie-info">
                    <span>📅 ${movie.Year}</span>
                    <span style="float:right;">⭐ ${movie.rating}/10</span>
                </div>

                <div style="margin-top: auto;">
                    <span class="tag ${tagClass}">
                        ${movie.status.toUpperCase()}
                    </span>
                </div>
            </div>
        `;

    // Adds card to main container
    container.appendChild(card);
  });
}

// --- Listeners for interaction ---

// "View All" button
btnAll.addEventListener("click", () => {
  currentStatus = ""; // Clears filter
  fetchMovies();
});

// "Watched" button
btnWatched.addEventListener("click", () => {
  currentStatus = "watched";
  fetchMovies();
});

// "Pending" button
btnPending.addEventListener("click", () => {
  currentStatus = "pending";
  fetchMovies();
});

//** Search bar listeners **/
btnSearch.addEventListener("click", () => {
  fetchMovies();
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchMovies();
  }
});

// Sorting selector
sortSelect.addEventListener("change", () => {
  // Just retrieves the movies, fetchMovies() already checks the selector value
  fetchMovies();
});

// Loads movies as soon as you open the page
fetchMovies();
// async function loadInitialMovies() {
//   const response = await fetch("http://localhost:3000/api/movies/");
//   const movies = await response.json();
//   console.log(movies);
//   renderMovies(movies);
// }

// loadInitialMovies();

