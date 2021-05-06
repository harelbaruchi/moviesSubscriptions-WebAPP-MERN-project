import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function LoginForm(props) {
    const [ details, setDetails ] = useState({ username: '', password: '' })
    const [ error, setError ] = useState('')

    const history = useHistory()
   
    const submitHandler = async (e) => {
        e.preventDefault() //because i dont want the page to re render
        const res = await axios.post("http://localhost:8000/api/users/login", details)///details that inserted by the user  
        if (res.data.loggedIn) {
            props.onSuccess(res.data.user)
            history.push("/MainPage")
        } else {
            setError('Details do not match!')
        }
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* {user.username} */}
                {error}
                <div className="form-group">
                    <label htmlFor="username">
                        username:
                    </label>
                    <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        password:
                    </label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />    
            </div>
        </form>
    )
}

export default LoginForm
