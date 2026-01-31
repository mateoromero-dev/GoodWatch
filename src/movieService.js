import fs from "fs";
import axios from "axios";

const movies = JSON.parse(fs.readFileSync("data/movies.json"));

export function getMovies() {
  return movies;
}

console.log("Movie service loaded with", movies.length, "movies");
console.log(movies);


axios.defaults.baseURL = "http://www.omdbapi.com/";

