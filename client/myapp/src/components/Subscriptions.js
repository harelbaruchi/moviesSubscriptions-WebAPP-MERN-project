import React from 'react'
import{ Switch, Route, Link, BrowserRouter as Router} from "react-router-dom"
import AddMember from './AddMember'
import AllMembers from './AllMembers'
import EditMember from './EditMember'
import AllMoviesPage from './AllMoviesPage'
import { Card } from 'antd';

function Subscriptions(props) {

    return (
<Card  style={{ width: 300, 
  backgroundColor: '#e6f7ff',
  marginLeft: 50}}>
       <div>
        <h3>Subscriptions</h3>
        <br />
        <Router>
          <Link to="/AllMembers">
            <button>
              All Members
            </button>
          </Link>  
          <Link to="/AddMember">
            <button>
              Add Member
            </button>
            </Link><br />
        <Switch>
          <Route path="/AddMember"           component={AddMember} />
          <Route path="/AllMembers"          component={AllMembers} />
          {/* <Route path="/Subscriptions"       component={AllMembers} /> */}
          <Route path="/EditMember/:id"      component={EditMember} />
          <Route path="/AllMoviesPage/:name" component={AllMoviesPage} />
        </Switch>
        </Router>   
    </div>
    </Card>
    )
}

export default Subscriptions
