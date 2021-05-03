import React, { useState, useEffect } from 'react'
import membersUtils from '../membersUtils'
import { Link, useHistory } from 'react-router-dom'

function EditMember(props) {

    const [ member, setMember ] = useState({})
    const [ id, setId ] = useState("")
    const [ error, setError ] = useState("")

    const history = useHistory()

    useEffect(() => {
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }

        try {
          setId(props.match.params.id)
          let resp = await membersUtils.getMember(id,config)
          setMember(resp.data)
        } catch (error) {
          localStorage.removeItem("authToken")
          setError("You are not authorized please login")
        }
    }
        fetchPrivateDate()
    }, [id, props.match.params.id])

    const update = async (e) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
      e.preventDefault()

      try {
      let resp = await membersUtils.updateMember(id ,member, config)//diif utils??
      alert(resp.data)
      history.push("/AllMembers")
      } catch (error) {
        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    return  error ? (
      <span className="error-message">{error}</span>
      ) : ( <div>
              <h3>Edit Member</h3>
              {member.name}
                 <form onSubmit={e => update(e)}> 
                    Name:  <input type="text" value={member.name} onChange={e => setMember({...member, name : e.target.value } ) } /> <br/>
                    Email: <input type="text" value={member.email} onChange={e => setMember({...member, email : e.target.value } ) }/> <br/>
                    City:  <input type="text" value={member.city} onChange={e => setMember({...member, city : e.target.value } ) }/> <br/>
                    <input type="submit" value="Update" />
                    <Link to= "/AllMembers">Cancel</Link>
                  </form>
            </div>)
}

export default EditMember
