import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MoviesWatched from './MoviesWatched'
import membersUtils from '../membersUtils'

function Member(props) {

    const [ id ] = useState(props.memberData._id)
    const [ link, setLink ] = useState("")

    const [ error, setError ] = useState("")

    useEffect(() => {
    setLink("/EditMember/" + id)
    }, [id])

    const deleteMember = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }

      try {
        let resp = await membersUtils.deleteMember(id, config)
        alert(resp.data)
      } catch (error) {
        localStorage.removeItem("authToken")
        setError("You are not logged in, please login")
      }
    }

    

    //const classes = useStyles()

    return (<div className="App">
            {props.memberData.name}<br /><br />
            Email:{props.memberData.email}<br />
            City:{props.memberData.city}
            <Link to={link}>Edit</Link>
            <button onClick={deleteMember}>Delete</button>
            
            <MoviesWatched mData={props.memberData} />
        </div>
        )
    }

export default Member
