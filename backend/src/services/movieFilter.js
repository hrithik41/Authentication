import movies from "../movies/movieDetails.js";

export const filterMovies = (userId) => {
    let filteredMovies;

    if (userId % 2 === 0) {
        filteredMovies = movies.filter(movie => movie.id % 2 === 0);
    }
else {
    filteredMovies = movies.filter(movie => movie.id % 2 !== 0);
}

return {
    userId,
    accessType: userId % 2 === 0 ? "Even" : "Odd",
    movies: filteredMovies
}
}