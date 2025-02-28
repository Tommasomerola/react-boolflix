import {useState} from 'react'

// import components (Header, Main)
import Header from './components/Header'
import Main from './components/Main'

export default function HomePage() {
    
        // state to store movies
        const [movies, setMovies] = useState([])
    
        return (
            <>
        
                <Header setMovies={setMovies} />
                <Main movies={movies} />
                
            </>
        )
}