import React, { useState, useEffect } from 'react'
import moviesUtils from '../moviesUtils'
import Movie from './Movie'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom"
import MoviesPage from './MoviesPage'

function AllMoviesPage(props) {

    const history = useHistory()

    const [ movies, setMovies ] = useState([])
    const [ search, setSearch ] = useState("")
    const [ error,  setError  ] = useState("")

    const getData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
      try {
        if (search !== null) {
          let resp = await moviesUtils.searchMovies(search, config)
          setMovies(resp)
        } else {
          let resp = await moviesUtils.getMovies(config)
          setMovies(resp.data)
        }
      } catch (error) {
          localStorage.removeItem("authToken")
          setError("You are not authorized please login")
        }
      }

      useEffect(() => {
        const fetchPrivateDate = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization:  `Bearer ${localStorage.getItem("authToken")}`,
            },
          }

          try {
              if (props.match.params.name != null) {
                let name = props.match.params.name
                name.replace(/%20/g, "")
                setSearch(name)
                getData()
              } else {
                let resp = await moviesUtils.getMovies(config)
                setMovies(resp.data)
              }
          } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
          }
        }
          fetchPrivateDate()
      }, [search])
  
    const Logout = () => { 
        // props.onLogout() 
        history.push("/")
      }

      return error ? (
        <span className="error-message">{error}</span> ) : (
        <div className="App">
          Search: <input type="text" value={search} onChange={e => setSearch(e.target.value)} /> 
          <input type="button" value="Get Data" onClick={getData} /><br /><br /><br />
          <h3>Movies List</h3> 
          {
              movies.map(item => {
                  return (
                  <div key={item._id}>      
                  <Movie key={item._id} movieData={item} /><br/>
                  </div>)
              })
          }
          <br />
    </div>
    )
  }

export default AllMoviesPage

