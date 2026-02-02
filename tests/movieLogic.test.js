const {
  movieSearch,
  movieSorter,
  movieFilter,
} = require("../src/movieLogic.js");

// Mock Data
const mockMovies = [
  { Title: "The Godfather", status: "watched", rating: 10, Year: 1972 },
  { Title: "Avatar", status: "pending", rating: 0, Year: 2009 },
  { Title: "Batman Begins", status: "watched", rating: 8, Year: 2005 },
];

describe("Movie processing logic", () => {
  test("Must filter by watched", () => {
    const result = movieFilter(mockMovies, "watched");

    // The Godfather - Batman begins
    expect(result.length).toBe(2);
    expect(result[0].status).toBe("watched");
  });

  test("Must search by title (case insensitive)", () => {
    const result = movieSearch(mockMovies, "Batman");

    expect(result.length).toBe(1);
    expect(result[0].Title).toBe("Batman Begins");
  });

  test("Must order by rating", () => {
    const result = movieSorter(mockMovies, "rating");

    // The Godfather -> Batman Begins -> Avatar
    expect(result[0].Title).toBe("The Godfather");
    expect(result[1].Title).toBe("Batman Begins");
    expect(result[2].Title).toBe("Avatar");
  });
  test("Must order by release year", () => {
    const result = movieSorter(mockMovies, "release");

    // Avatar -> Batman Begins -> The Godfather
    expect(result[0].Title).toBe("Avatar");
    expect(result[1].Title).toBe("Batman Begins");
    expect(result[2].Title).toBe("The Godfather");
  });
});

