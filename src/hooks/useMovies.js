import with_results from "../mocks/resultados.json";
import without_results from "../mocks/no-resultados.json";

function useMovies() {
  const movies = with_results.Search;

  const listMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));

  return { movies: listMovies };
}

export default useMovies;
