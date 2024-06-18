import axios from "axios";

const getArticles = (article_id) => {
  let baseURL =
    "https://nc-news-backend-project-5kc8.onrender.com/api/articles";

    if(article_id){
        baseURL += `/${article_id}`
    }

  return axios
    .get(baseURL)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, "error from getting articles");
    });
};

export {getArticles}