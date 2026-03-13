import { filterMovies } from "../services/movieFilter.js";

const movieController = (req, res) => {
    const userId = req.user.id;
    const filteredMovies = filterMovies(userId);
    res.json({
        userId,
        accessType: userId % 2 === 0 ? "Even" : "Odd",
        movies: filteredMovies
    })
}

export default movieController;
