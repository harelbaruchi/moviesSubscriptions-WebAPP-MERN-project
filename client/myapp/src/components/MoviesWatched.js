import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import subscriptionsUtils from '../subscriptionsUtils'
import moviesUtils from '../moviesUtils'
import FormControl from '@material-ui/core/FormControl'///
import Select from '@material-ui/core/Select'///
import { TextField } from '@material-ui/core'///
import 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import {Card} from 'antd'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function MoviesWatched(props) {

    const [ movies, setMovies ] = useState([])
    const [ subs, setSubs ] = useState([])
    const [ sub, setSub ] = useState({})

    const [ isVisible, setIsVisible ] = useState(false)
    const [ error, setError ] = useState("")

    const classes = useStyles()


    useEffect( () => {
      const fetchDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }

        try {
        let resp = await subscriptionsUtils.getSubscriptions(config)//utils diff?
        setSubs(resp.data)
        let resp2 = await moviesUtils.getMovies(config)
        setMovies(resp2.data)
        } catch (error) {
        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }   
    }
    fetchDate()
    }, [])

    const save = async (e) => {
      e.preventDefault()
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      
        try {
          let resp = await subscriptionsUtils.addSubscription(sub, config)//utils diff?
          alert(resp.data)
        } catch(error) {
          localStorage.removeItem("authToken")
          setError("You are not authorized please login")
        }
    }

    return error ? (
        <span className="error-message">{error}</span>
        ) : (
          <Card style={{ width: 258, 
          backgroundColor: '#3c9ae8'
           }}>
            <div>
          <h3>Movies Watched</h3> 
          <button onClick={() => {
              if (isVisible === true) {
               setIsVisible(false) 
              } else {
                  setIsVisible(true) 
              }
            }}>Subscribe to new movie</button><br />
        <div style={{ display: isVisible ? "block" : "none" }}>
          <h4>Add new movie</h4>
        <form action="./allMembers" onSubmit={e => save(e)} className={classes.container} noValidate>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Movie</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="moviename"
            value={sub.movieid} 
            onChange={e => setSub({...sub, movieid: e.target.value}) }
            label="Movie">
                <MenuItem>
                <em>None</em>
                </MenuItem> {
              movies.map(item => {
                  return (
                      <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                  )
              })
          } 
          </Select>
          </FormControl>
            <TextField 
                label="ID" 
                id="memberid" 
                type="text" 
                value={sub.memberid = props.mData._id}  
                onChange={e => setSub({...sub , memberid : e.target.value}) } 
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                    }} /><br />
            <TextField
                id="date"
                label="Watched"
                type="date"
                defaultValue=""
                value={sub.date}
                onChange={e => setSub({...sub, date: e.target.value } ) }
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }} /><br/>
            <input type="submit" value="Subscribe" />
            </form>
            <br/>
          </div>
          <ul>
          { 
          subs.map(item => {
                      if(item.memberid === props.mData._id) {
                          return (
                           <li key={item._id}>  Movie: {movies.map(x => { 
                                if (x._id === item.movieid) {
                                return ( <Link key={x._id} to= {"/AllMoviesPage/" + x.name}>{x.name}</Link>)
                                } else {
                                return null
                              }  
                            })}, Date:{item.date.split("T00:00:00.000Z")}</li>
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
          </Card>
        
    )
  }

export default MoviesWatched
