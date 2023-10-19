// import with_results from "../mocks/resultados.json";
// import without_results from "../mocks/no-resultados.json";
import { useCallback, useRef, useState } from "react";
import { searchMovies } from "../services/fetchMovies";

function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  //se recibe 'search' para crear una unica vez la función 'getMovies'
  const getMovies = useCallback(async (search) => {
    //comprueba que 'search' no sea igual a 'previousSearch', de lo contrario ignora la busqueda
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      //actualiza 'previousSearch' con 'search' actual
      previousSearch.current = search;
      // toma la busqueda 'search', la realiza 'searchMovies' y actualiza 'movies' con 'newMovies'
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading, error };
}

export default useMovies;
