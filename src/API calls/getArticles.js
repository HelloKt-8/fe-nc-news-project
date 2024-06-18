import axios from "axios";

const getArticles = () => {
  let baseURL =
    "https://nc-news-backend-project-5kc8.onrender.com/api/articles";

  return axios
    .get(baseURL)
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err, "error from getting articles");
    });
};

export {getArticles}