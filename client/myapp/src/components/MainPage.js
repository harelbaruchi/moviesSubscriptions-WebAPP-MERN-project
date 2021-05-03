import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, BrowserRouter as Router, useHistory } from 'react-router-dom'
import MoviesPage from './MoviesPage'
import Subscriptions from './Subscriptions'
// import { makeStyles } from '@material-ui/core/styles'

function clear() {
  localStorage.removeItem("authToken")
  localStorage.removeItem("name")
  window.location.assign('/')
}



function MainPage(props) {

    const [ error, setError ] = useState("")
    const [ username, setUsername ] = useState([])

    const history = useHistory()

     useEffect(() => {
    //     
    if (!props.user.username) {
        history.push("/login")
    }
     }, [])

    const Logout = () => {  
        props.onLogout() 
        history.push("/")   
      }

    
    return (
        <div className="App">
            <h3>Welcome,
            <span>{props.user && props.user.fullname}</span>
            </h3>
           
          <br/>
         <Router>
            <Link to="/movies">
                <button>Movies</button>
            </Link>  
              <Link to="/subscriptions">
                <button>Subscriptions</button>
              </Link> 
                <br/>
            <Switch>
              <Route exact path="/"              component={MoviesPage} />
              <Route exact path="/movies"        component={MoviesPage} />
              <Route exact path="/subscriptions" component={Subscriptions} />
            </Switch>
        </Router>
        </div>
      )
    }  

export default MainPage
