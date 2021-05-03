import React, { useState, useEffect } from 'react'
import moviesUtils from '../moviesUtils'
import { Link, useHistory } from 'react-router-dom'

function EditMovie(props) {

    const [ movie, setMovie ] = useState({})
    const [ id, setId ] = useState('')

    const history = useHistory()

    useEffect(async () => {
      setId(props.match.params.id)
      let resp = await moviesUtils.getMovie(id)
      setMovie(resp.data)
    }, [id, props.match.params.id])

    const update = async (e) => {
      e.preventDefault()
      let resp = await moviesUtils.updateMovie(id, movie)
      alert(resp.data)
      history.push("/AllMoviesPage")
    }
    
    return (
        <div>
        <h3>Edit Movie</h3>
        {movie.name} 
        <form onSubmit={e => update(e)}> 
            Name:       <input type="text" value={movie.name}      onChange={e => setMovie({...movie, name: e.target.value } ) } /> <br/>
            Genres:     <input type="text" value={movie.genres}    onChange={e => setMovie({...movie, genres: e.target.value } ) }/> <br/>
            Image Url:  <input type="text" value={movie.imageurl}     onChange={e => setMovie({...movie, image: e.target.value } ) }/> <br/>
            Premiered:  <input type="date" value={movie.yearpremiered} onChange={e => setMovie({...movie, premiered: e.target.value } ) }/> <br/>
                 <input type="submit" value="Update" />
            <Link to="/AllMoviesPage">Cancel</Link>
        </form>       
        </div>
    )
}

export default EditMovie
