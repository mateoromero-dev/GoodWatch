const cors = require("cors");
const express = require("express");
const { enrichMoviesWithApiData } = require("./src/movieService.js");
const {
  movieSearch,
  movieSorter,
  movieFilter,
} = require("./src/movieLogic.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/api/movies", async (_req, res) => {
  const movies = await enrichMoviesWithApiData();
  res.send(movies);
});

app.get("/api/movies/search", async (_req, res) => {
  let movies = await enrichMoviesWithApiData();
  const { title, status, sort } = _req.query;
  console.log('Title: "', title, '"; Status: ', status, "; Sort: ", sort);
  movies = title ? movieSearch(movies, title) : movies;
  movies = status ? movieFilter(movies, status) : movies;
  movies = sort ? movieSorter(movies, sort) : movies;
  res.send(movies);
});

