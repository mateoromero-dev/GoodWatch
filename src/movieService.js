import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const movies = JSON.parse(fs.readFileSync("data/movies.json"));

export function getMovies() {
  return movies;
}

console.log("Movie service loaded with", movies.length, "movies");
axios.defaults.baseURL = "http://www.omdbapi.com/";
async function enrichMoviesWithApiData() {
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

enrichMoviesWithApiData().then((enrichedMovies) => {
  console.log("\nEnriched movies with API data:");
  console.log(enrichedMovies);
});

