import axios from "axios"

const getTopics = () => {
    const url = `https://nc-news-backend-project-5kc8.onrender.com/api/topics`

    return axios.get(url).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err, "error from get topics")
    })
}

export {getTopics}