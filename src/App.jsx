import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

import "./App.css";
import Movies from "./components/Movies";

function App() {
  const { search, updatedSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handlerSubmit = (event) => {
    event.preventDefault();
    // console.log({ search });
    getMovies();
  };

  const handlerChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    updatedSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Busca busca</h1>
        <form className="form" onSubmit={handlerSubmit}>
          <input
            onChange={handlerChange}
            value={search}
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
