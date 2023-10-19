import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

import "./App.css";
import Movies from "./components/Movies";

function App() {
  const { movies } = useMovies();
  const { searchMovies, updatedSearchMovies, error } = useSearch();

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log({ searchMovies });
  };

  const handlerChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    updatedSearchMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Busca busca</h1>
        <form className="form" onSubmit={handlerSubmit}>
          <input
            onChange={handlerChange}
            value={searchMovies}
            placeholder="Interstellar, The Martian, ..."
            style={{
              borderColor: error ? "red" : "#e9e9e9",
              outline: "none",
            }}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
