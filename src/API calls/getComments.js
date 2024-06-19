import axios from "axios";

const getComments = (article_id) => {
  const url = `https://nc-news-backend-project-5kc8.onrender.com/api/articles/${article_id}/comments`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err, "error from get comments");
    });
};

const postNewComments = (newComment, article_id) => {
  const url = `https://nc-news-backend-project-5kc8.onrender.com/api/articles/${article_id}/comments`;

  return axios.post(url, newComment).then(({ data }) => {
    return data.comment;
  }).catch((err) => {
    console.log(err, "error from posting comments");
  });
};

export { getComments, postNewComments };
