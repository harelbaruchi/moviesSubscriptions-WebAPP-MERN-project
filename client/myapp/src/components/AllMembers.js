import React, { useState, useEffect } from 'react'
import membersUtils from '../membersUtils'
import Member from './Member'

function AllMembers(props) {

    const [ members, setMembers ] = useState([])

    const [ error, setError ]     = useState("")
   
    useEffect(async () => {
      const  fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        }

        try {
          let resp = await membersUtils.getMembers()
          setMembers(resp.data)
        }
        catch (error) {
          localStorage.removeItem("authToken")
          setError("You are not authorized please login")
        }
     }
      fetchPrivateDate()
    }, [])

    // const getmembers = async () => {
    //   let resp = await membersUtils.getMembers()
    //     alert(resp.data)
    // }

    return(
      <div className="App">
        <h3>Members</h3> 
        {/* <button onClick={getmembers}>get members</button> */}
        {
            members.map(item => {
                return(<div key={item._id}>     
                <Member key={item._id} memberData={item} /><br/>
                </div>)
            })
        }
        <br />
      </div>
  )
}

export default AllMembers

