import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import {Switch,  Route,  Link} from "react-router-dom"
import BrowserRouter from 'react-router-dom'
import moviesUtils from '../moviesUtils'
import EditMovie from './EditMovie'
import Subscribed from './Subscribed'
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from 'antd';
import '../App.css';




function Movie(props) {

    const [ id ] = useState(props.movieData._id)
    const [ link, setLink ] = useState("")
    const [img, setImg ] = useState("")

    

    useEffect(() => {
      setLink("/movies/EditMovie/" + id)
      setImg(props.movieData.imageurl)
    }, [img][id])

    const deleteData = async () => {
      let resp = await moviesUtils.deleteMovie(id)
        alert(resp.data)
    }
    
     
 
 
    return (
      <Card style={{ width: 300, backgroundColor: '#e6f7ff', marginLeft: 30}}>
        <div>
            Name: {props.movieData.name}<br />
            Generes: {props.movieData.genres}<br />
            Year Premiered: {props.movieData.yearpremiered}<br />
            Image:
            <img className="photo"
            src={props.movieData.imageurl}
            alt="new"
            /> 
            <br /> 
            Subscribed: <br />
             <Subscribed movieData={id} />

           
            <Link to={link}>Edit</Link>
            <button onClick={deleteData} >
              Delete
            </button>
        </div>
        </Card>
    )
}

export default Movie
