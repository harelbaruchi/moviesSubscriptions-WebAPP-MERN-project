import axios from 'axios'

const getMovies = (config) => {
    return axios.get("http://localhost:8000/api/movies/", config)
}

const getMovie = (id, config) => {
    return axios.get("http://localhost:8000/api/movies/" + id, config)
}

const addMovie = (obj, config) => {
    return axios.post("http://localhost:8000/api/movies/", obj, config)
}

const updateMovie = (id ,obj, config) => {
    return axios.put("http://localhost:8000/api/movies/" + id, obj, config)
}

const deleteMovie = (id, config) => {
    return axios.delete("http://localhost:8000/api/movies/" + id, config)
}

const searchMovies = async(search, config) => {
    let resp   =  await axios.get("http://localhost:8000/api/movies", config)
    let respd  =  resp.data
    let chars  =  search.toLowerCase()
    let result =  []
    result     = respd.filter(x => x.name.toLowerCase().includes(chars))
    return result
}

export default  { getMovies, getMovie, addMovie, deleteMovie, updateMovie, searchMovies }