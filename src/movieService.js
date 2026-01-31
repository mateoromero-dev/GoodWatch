const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
axios.defaults.baseURL = "http://www.omdbapi.com/";

function readData() {
  const movies = JSON.parse(fs.readFileSync("data/movies.json"));
  console.log("Movie service loaded with", movies.length, "movies");
  return movies;
}

async function enrichMoviesWithApiData(movies = readData()) {
  const enrichedMovies = await Promise.all(
    movies.map(async (movie) => {
      try {
        const response = await axios.get(
          `?apikey=${process.env.OMDB_API_KEY}&i=${movie.imdbID}`,
        );
        return {
          ...movie,
          ...response.data,
        };
      } catch (error) {
        console.error(
          `Failed to fetch data for ${movie.imbdID}:`,
          error.message,
        );
        return movie;
      }
    }),
  );
  return enrichedMovies;
}

module.exports = { enrichMoviesWithApiData };

