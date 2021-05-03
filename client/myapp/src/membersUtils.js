import axios from 'axios'

const getMembers = (config) => {
    return axios.get("http://localhost:8000/api/members", config)
}

const getMember = (id ,config) => {
    return axios.get("http://localhost:8000/api/members/" + id, config)
}

const addMember = (obj ,config) => {
    return axios.post("http://localhost:8000/api/members/", obj, config)
}

const deleteMember = (id ,config) => {
    return axios.delete("http://localhost:8000/api/members/" + id, config)
}

const updateMember = (id, obj, config) => {
    return axios.put("http://localhost:8000/api/members/" + id, obj, config)
}

export default { getMembers, getMember, addMember, deleteMember, updateMember }