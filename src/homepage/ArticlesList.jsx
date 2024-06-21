import { React, useEffect, useState } from "react";
import { getArticles } from "../API calls/getArticles";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <div className="articleList">
      {articles.map((article) => {
        return (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <figure key={article.article_id} >
              <img src={article.article_img_url} alt={article.title} />
              <figcaption key={article.article_id}>{article.title}</figcaption>
            </figure>
          </Link>
        );
      })}
      ;
    </div>
  );
};

export default ArticlesList;
