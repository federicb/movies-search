import "./App.css";
import with_results from "./mocks/resultados.json";
import without_results from "./mocks/no-resultados.json";
import Movies from "./components/Movies";

function App() {
  const movies = with_results.Search;

  const listMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));
  return (
    <div className="page">
      <header>
        <h1>Busca busca</h1>
        <input placeholder="Interstellar, The Martian, ..." />
        <button type="submit">Buscar</button>
      </header>
      <main>
        <Movies movies={listMovies} />
      </main>
    </div>
  );
}

export default App;
