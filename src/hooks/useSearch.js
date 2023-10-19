import { useEffect, useRef, useState } from "react";

function useSearch() {
  const [search, updatedSearch] = useState("");
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar películas vacias.");
      return;
    }

    if (search.length < 2) {
      setError("La búsqueda debe tener al menos 2 caracteres.");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updatedSearch, error };
}

export default useSearch;
