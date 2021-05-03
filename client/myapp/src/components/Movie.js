import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import {Switch,  Route,  Link} from "react-router-dom"
import BrowserRouter from 'react-router-dom'
import moviesUtils from '../moviesUtils'
import EditMovie from './EditMovie'
import Subscribed from './Subscribed'

function Movie(props) {

    const [ id ] = useState(props.movieData._id)
    const [ link, setLink ] = useState("")

    useEffect(() => {
      setLink("/movies/EditMovie/" + id)
    }, [id])

    const deleteData = async () => {
      let resp = await moviesUtils.deleteMovie(id)
        alert(resp.data)
    }
 
    return (
        <div>
            Name: {props.movieData.name}<br />
            Generes: {props.movieData.genres}<br />
            Year Premiered: {props.movieData.yearpremiered}<br />
            Image: {props.movieData.imageurl}<br />
            Subscribed: <br />
             <Subscribed movieData={id} />

           
            <Link to={link}>Edit</Link>
            <button onClick={deleteData} >
              Delete
            </button>
        </div>
    )
}

export default Movie
