import "./App.css";
import with_results from "./mocks/resultados.json";
import without_results from "./mocks/no-resultados.json";

function App() {
  const movies = with_results.Search;
  const hasMovies = movies?.length > 0;

  const listMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year
  }));
  return (
    <div className="page">
      <header>
        <h1>Busca busca</h1>
        <input placeholder="Interstellar, The Martian, ..." />
        <button type="submit">Buscar</button>
      </header>
      <main>
        {hasMovies ? (
          <ul className="movies">
            {listMovies.map((movie) => (
              <li className="movie" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <span>{movie.year}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron películas.</p>
        )}
      </main>
    </div>
  );
}

export default App;
