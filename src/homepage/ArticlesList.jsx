import { React, useEffect, useState } from "react";
import {getArticles} from "../API calls/getArticles";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div className="articleList">
        {articles.map((article) => 
        <figure key={article.article_id}>
            <img src={article.article_img_url} alt={article.title}/>
            <figcaption key={article.article_id}>{article.title}</figcaption>
        </figure>)}
    </div>
  )
  ;
};

export default ArticlesList;

//connect to api and return a list of all articles
