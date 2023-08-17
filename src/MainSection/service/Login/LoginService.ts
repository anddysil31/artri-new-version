import axios from "axios";
const baseUrl = "http://localhost:8081/api/v1/auth/authenticate"

const loginService = async (credentials:any) =>{
    const response = await axios.post(baseUrl, credentials)
    const {token} = response.data 
}

export default { loginService }