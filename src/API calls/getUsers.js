
import axios from "axios";

const getUsers = () => {
    let baseURL = "https://nc-news-backend-project-5kc8.onrender.com/api/users"

    return axios.get(baseURL).then((response) => {
        return response.data
    }).catch((err)=> {
        console.log(err, "error from getting users")
    })
}

export {getUsers}