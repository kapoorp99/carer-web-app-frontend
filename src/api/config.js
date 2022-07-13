import axios from "axios"

const instance = axios.create({
    baseURL: "https://carer-web-app-backend-server.herokuapp.com/api/v1",
})

export default instance