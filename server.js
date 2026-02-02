const cors = require("cors");
const express = require("express");
const { enrichMoviesWithApiData } = require("./src/movieService.js");
const { movieSearch } = require("./src/movieLogic.js");
const { movieSorter } = require("./src/movieLogic.js");
const { movieFilter } = require("./src/movieLogic.js");

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
  console.log("Status: ", status, "; Sort: ", sort);
  movies = title != undefined ? movieSearch(movies, title) : movies;
  movies = status != undefined ? movieFilter(movies, status) : movies;
  movies = sort != undefined ? movieSorter(movies, sort) : movies;
  res.send(movies);
});

