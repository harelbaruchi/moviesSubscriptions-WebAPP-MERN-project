import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom"
import AddMoviePage from './AddMoviePage'
import AllMoviesPage from './AllMoviesPage'
import EditMovie from './EditMovie'
// import MainPage from './MainPage'

function MoviesPage(props) {

    const history = useHistory()
    
    // useEffect(() => {
    //     if (!props.user.username) {
    //         history.push("/login")
    //     }
    // }, [])

    const Logout = () => {  
        // props.onLogout() 
        history.push("/login")   
      }

    return (
      
        <div>
        {/* <MainPage /> */}
        <div className="welcome">
         {/* <MainPage /> */}
          {/* <h3>Welcome,
            <span>{props.user && props.user.fullname}</span>
          </h3> */}
        </div>
        <Router>
          <Link to="/movies/AllMoviesPage">         
            <button>   
              All Movies
            </button>
          </Link>  
          <Link to="/movies/AddMoviePage">
            <button>
              Add Movies
            </button>
          </Link><br/>   
            <Switch>
                <Route           path="/movies/AddMoviePage"         component={AddMoviePage}  />
                <Route   exact   path="/movies/AllMoviesPage"        component={AllMoviesPage} />
                <Route           path="/movies/EditMovie/:id"        component={EditMovie}     />  
                {/* <Route path="/movies/EditMovie/:id"      component={EditMovie} /> */}
                <Route           path="/movies/AllMoviesPage/:name"  component={AllMoviesPage} /> 
            </Switch>
        </Router>           
        <button onClick={Logout}>Logout</button>
    </div>
    )
}

export default MoviesPage
