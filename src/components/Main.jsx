import {useContext} from 'react';
import GlobalContext from '../context/GlobalContext';

export default function Main() {

    // use context to get movies and searchMovies
    const {movies} = useContext(GlobalContext);
    return (
        <main>

            <h2>search result</h2>

        {movie.lenght > 0 ? (
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}
                        <h3>{movie.title}</h3>
                        <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
                        <p><strong>Lingua:</strong> {movie.original_language}</p>
                        <p><strong>Voto:</strong> {movie.vote_average}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Nessun film trovato</p>
    )}
    </main>
     )
}