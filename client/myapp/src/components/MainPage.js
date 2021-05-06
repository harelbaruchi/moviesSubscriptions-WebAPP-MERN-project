import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, BrowserRouter as Router, useHistory } from 'react-router-dom'
import MoviesPage from './MoviesPage'
import Subscriptions from './Subscriptions'
import { Menu, Divider } from 'antd'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import { darken } from '@material-ui/core'
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
      const [theme]=useState('dark')

    
    return (
        <div className="App">
            <h3>Welcome,
            <span>{props.user && props.user.fullname}</span>
            </h3>
           
          <br/>
         <Router>
         <Menu
        style={{ width: 256}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme={theme}>

             <Menu.Item>
           <Link to="/movies">
                <button>Movies</button>
            </Link>  
            </Menu.Item>
           
           <Menu.Item>
             <Link to="/subscriptions">
                <button>Subscriptions</button>
              </Link>   
            </Menu.Item>
              
              <Menu.Item>
                <button onClick={Logout}>Log Out</button>
              </Menu.Item>
           </Menu>
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
