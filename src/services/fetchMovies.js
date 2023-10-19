const API_KEY = "f346abf1";

 //fetching de datos
export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await response.json();

    const movies = data.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  } catch (e) {
    throw new Error("Error al buscar películas.");
  }
};


