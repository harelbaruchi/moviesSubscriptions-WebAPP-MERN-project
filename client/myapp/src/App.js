import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import MoviesPage from './components/MoviesPage'
import AllMoviesPage from './components/AllMoviesPage'
import AddMoviePage from './components/AddMoviePage'
import EditMovie from './components/EditMovie'
import MainPage from './components/MainPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  const [ user,  setUser  ]  =  useState({ username: '', password: '', fullname: '' })//fullname added
  const [ error, setError ]  =  useState('')

  const Logout = () => {
     setUser({ username: '', password: '', fullname: '' })
  //   history.push("/")
  }

  const onLoginSuccess = (_user) => {
    setUser(_user) 
  }

  return (
    <div className="App"> 
    <h1>Movies - Subscriptions Web Site</h1>        
        <Router>
          <Switch>
            <Route path="/login" component={() => <LoginForm  onSuccess={onLoginSuccess} />} />
            {/* <Route path="/"      component={() => <MoviesPage user={user} onLogout={Logout} />} /> */}
             <Route path="/"  component={() => <MainPage user={user} onLogout={Logout} />} /> 
          </Switch>
        </Router>   
        
    </div>  
  )
}

export default App


