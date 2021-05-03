import axios from 'axios'

const getSubscriptions = (config) => {
    return axios.get("http://localhost:8000/api/subscriptions/", config)
}

const getSubscription = (id, config) => {
    return axios.get("http://localhost:8000/api/subscriptions/" + id, config)
}

const addSubscription = (obj, config) => {
    return axios.post("http://localhost:8000/api/subscriptions/", obj, config)
}

export default { getSubscriptions, getSubscription, addSubscription }
