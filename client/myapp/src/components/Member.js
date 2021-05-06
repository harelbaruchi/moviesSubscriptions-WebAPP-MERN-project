import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MoviesWatched from './MoviesWatched'
import membersUtils from '../membersUtils'
import { Card } from 'antd';

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

    return (
      <Card  style={{ width: 300,
       backgroundColor: '#e6f7ff',
       padding: 20,
       border: 'solid',
       marginLeft: 30}}>
    <div>
      <h3>{props.memberData.name}</h3>
            <br /><br />
            Email:{props.memberData.email}<br />
            City:{props.memberData.city}
            <Link to={link}>Edit</Link>
            <button onClick={deleteMember}>Delete</button>
            
            <MoviesWatched mData={props.memberData} />
        </div>
        </Card>
        )
    }

export default Member
