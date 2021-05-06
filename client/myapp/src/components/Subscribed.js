import React, { useState, useEffect } from 'react'
import moviesUtils from '../moviesUtils'
import membersUtils from '../membersUtils'
import { Link } from 'react-router-dom'
import subscriptionsUtils from '../subscriptionsUtils'
import 'date-fns'

function Subscribed(props) {

    const [ members, setMembers ] = useState([])
    const [ subs, setSubs ] = useState([])

    const [ error, setError ] = useState("")

    useEffect(async () => {
      const fetchDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }

      try {
        let resp = await subscriptionsUtils.getSubscriptions(config)//
        setSubs(resp.data)

        let resp2 = await membersUtils.getMembers(config)
        setMembers(resp2.data)
        } catch (error) {
          localStorage.removeItem("authToken")
          setError("You are not authorized please login")
        }
      }
      fetchDate()
    }, [])

    // return error ? (
    //     <span className="error-message">{error}</span>
    //     ) : 
 return (
        <div>
          <h5>Subscriptions Watched:</h5> 
          <ul> {
          subs.map(item => {       
               if(item.movieid === props.movieData) {
                  return (
                     <li key={item._id}>Member: {members.map(x => { 
                        if(x._id === item.memberid) {
                           return (<Link key={x._id} to={"/AllMembers/" + x.name} >{x.name}</Link> )
                        } else {
                           return null
                        }      
                })}, Date: {item.date.split("T00:00:00.000Z")}</li>
                       )
                      } else {
                           return null
                      }    
                  }   
             )
          }
          </ul>
          <br/>
    </div>
    )
  }
  
export default Subscribed
