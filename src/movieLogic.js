function movieFilter(movies, status) {
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

function movieSearch(movies, title) {
  movies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(title.toLowerCase()),
  );
  return movies;
}

module.exports = { movieFilter, movieSearch, movieSorter };

