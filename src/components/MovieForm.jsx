// react Hooks to manage state and context
import {useState,useContext} from 'react'
// import globalContext
import GlobalContext from './../context/GlobalContext'

// recive setMovies from props
const MovieForm = ( ) => {

    // get searchMovies from globalContext
    const { searchMovies } = useContext(GlobalContext);

    // state to store query
    const [formData, setFormData] = useState({title: ''})

    function handleFormData(e) {
        setFormData({...formData, [e.target.name]: e.target.value})

    }
    // function to handle form submit
    function handleSubmit(e) {
        e.preventDefault()
        // search movies with formData
        searchMovies(formData.title)

        // reset form
        setFormData({title: ''})
    }

    return (
        <>
        <form action="#" onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='title'
            onChange={handleFormData}
            value={formData.title}
            placeholder='Cerca film'
            />
            <button type='submit'>Cerca</button>
        </form>
        </>
    )
}

export default MovieForm