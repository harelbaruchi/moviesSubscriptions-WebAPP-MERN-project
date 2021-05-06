import React, { useState } from 'react'
import membersUtils from '../membersUtils'
import { Link, useHistory } from "react-router-dom"

function AddMember(props) {

    const [ member, setMember ] = useState({})

    const history = useHistory()

    const [ error, setError ] = useState("")

    const save = async (e) => {
      e.preventDefault()
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }

      try {
        let resp = await membersUtils.addMember(member, config)//diff utils?
        alert(resp.data)
        history.push("/AllMembers")
      } catch (error) {
        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    return error ? (
        <span className="error-message">{error}</span>
        ) : (
        <div>
        <h3>Add New Member</h3> 
        <form onSubmit={e => save(e)}>  
            Name:  <input type="text" value={member.name} onChange={e => setMember({...member, name : e.target.value } ) } /> <br/>
            Email: <input type="text" value={member.email} onChange={e => setMember({...member, email : e.target.value } ) }/> <br/>
            City:  <input type="text" value={member.city} onChange={e => setMember({...member, city : e.target.value } ) }/> <br/>
            <input type="submit" value="Save" />
            <Link to= "/AllMembers">Cancel</Link>
        </form>
        </div>
      )
}

export default AddMember
