const cors = require("cors");
const express = require("express");
const { enrichMoviesWithApiData } = require("./src/movieService.js");

function movieFilter(movies, status) {
  console.log(status);
  movies = movies.filter((movie) => {
    return movie.status === status;
  });
  return movies;
}

function movieSorter(movies, sort) {
  if (sort === "rating") {
    movies.sort((a, b) => b.rating - a.rating);
  }
  return movies;
}

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/api/movies", async (_req, res) => {
  const movies = await enrichMoviesWithApiData();
  res.send(movies);
});

app.get("/api/movies/search", async (_req, res) => {
  let movies = await enrichMoviesWithApiData();
  const { status, sort } = _req.query;
  console.log(status, sort);
  movies = status != undefined ? movieFilter(movies, status) : movies;
  movies = sort != undefined ? movieSorter(movies, sort) : movies;
  res.send(movies);
});

