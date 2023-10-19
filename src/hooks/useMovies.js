// import with_results from "../mocks/resultados.json";
// import without_results from "../mocks/no-resultados.json";
import { useState } from "react";
import { searchMovies } from "../services/fetchMovies";

function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // toma la busqueda 'search', la realiza 'searchMovies' y actualiza 'movies' con 'newMovies'
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  };

  return { movies, getMovies };
}

export default useMovies;
