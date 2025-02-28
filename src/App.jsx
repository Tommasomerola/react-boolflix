import {useState} from 'react'

// import globalContext from './context/GlobalContext'
import GlobalContext from './context/GlobalContext'

// import HomePage
import HomePage from './pages/HomePage'

function App() {

 const [movies, setMovies] = useState([])

//  function to search movies
const searchMovies = (query) => {
  const APP_KEY = "c0003c38b81b61f4f7861a8395f5c76d"
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}`)
  .then(res => res.json())
  // import movies from the response
  .then(data => setMovies(data.results))
  .catch(err => console.log(err));
};

  return (

    <GlobalContext.Provider value={{ movies, searchMovies }}>
      <HomePage />
    </GlobalContext.Provider>

  )
}

export default App
