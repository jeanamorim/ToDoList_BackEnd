import axios from 'axios'

const Api = axios.create({
baseURL: "http://localhost:7071"
})

export default Api