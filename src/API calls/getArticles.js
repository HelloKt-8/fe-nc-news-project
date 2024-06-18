import axios from "axios";

const getArticles = (article_id) => {
  let baseURL =
    "https://nc-news-backend-project-5kc8.onrender.com/api/articles";

  if (article_id) {
    baseURL += `/${article_id}`;
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

const patchArticle = (article_id, voteValue) => {
  const patchBody = { inc_votes: voteValue };
  const articleUrl = `https://nc-news-backend-project-5kc8.onrender.com/api/articles/${article_id}`;

  return axios.patch(articleUrl, patchBody).then(({ data }) => {
    return data.article;
  });
};

export { getArticles, patchArticle };
