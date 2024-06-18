import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../homepage/Header";
import UsersNav from "../homepage/UsersNav";
import NavBar from "../homepage/NavBar";
import SearchBar from "../homepage/SearchBar";
import { getArticles } from "../API calls/getArticles";

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const {article_id} = useParams();
  useEffect(() => {
    getArticles(article_id).then((data) => {
      setArticle(data.article);
    });
  }, [article_id]);
  return (
    <div>
      <div className="header-components">
        <UsersNav />
        <Header />
        <NavBar />
        <SearchBar />
      </div>
      <div className="item-details">
        <h2>{article.title}</h2>
        <p>Author: {article.author}</p>
        <h3>on: {article.topic}</h3>
        <img src={article.article_img_url} alt={article.topic} />
        
      </div>
    </div>
  );
};

export default ArticlePage;
