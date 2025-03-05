import {useState} from 'react'

// import globalContext from './context/GlobalContext'
import GlobalContext from './context/GlobalContext'

// import HomePage
import HomePage from './pages/HomePage'

function App() {

 const [movies, setMovies] = useState([])

//  function to search movies
// const searchMovies = (query) => {
//   const APP_KEY = "c0003c38b81b61f4f7861a8395f5c76d"
//   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}`)
//   .then(res => res.json())
//   // import movies from the response
//   .then(data => setMovies(data.results))
//   .catch(err => console.log(err));
// };

const searchMoviesAndTv = (query) => {
  const APP_KEY = "c0003c38b81b61f4f7861a8395f5c76d"

  // chiamata per i film 
  const moviePromise = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}`)
  .then(res => res.json())
  .then(data => data.results)

  // chiamata per le serie tv
  const tvPromise = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${APP_KEY}&query=${query}`)
  .then(res => res.json())
  .then(data => data.results)

  // aspettiamo che entrambe le chiamate siano completate
  Promise.all([moviePromise, tvPromise])
  .then(([moviesData, tvData]) => {
    const combinedResults = [
      ...moviesData.map(item => ({ ...item, type: 'movie' })),
      ...tvData.map(item => ({ ...item, type: 'tv' }))
    ];
    setMovies(combinedResults); // Impostiamo i risultati combinati
  })
  .catch(err => console.log(err));
};

  return (

    <GlobalContext.Provider value={{ movies, searchMoviesAndTv }}>
      <HomePage />
    </GlobalContext.Provider>

  )
}

export default App
