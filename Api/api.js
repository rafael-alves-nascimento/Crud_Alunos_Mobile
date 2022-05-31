import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:3010/alunos"
})

export default api;