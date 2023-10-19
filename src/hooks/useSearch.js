import { useEffect, useRef, useState } from "react";

function useSearch() {
  const [searchMovies, updatedSearchMovies] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = searchMovies === "";
      return;
    }

    if (searchMovies === "") {
      setError("No se puede buscar películas vacias.");
      return;
    }

    if (searchMovies.length < 2) {
      setError("La búsqueda debe tener al menos 2 caracteres.");
      return;
    }

    setError(null);
  }, [searchMovies]);

  return { searchMovies, updatedSearchMovies, error };
}

export default useSearch;
