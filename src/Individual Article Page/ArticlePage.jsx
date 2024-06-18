import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../homepage/Header";
import UsersNav from "../homepage/UsersNav";
import NavBar from "../homepage/NavBar";
import SearchBar from "../homepage/SearchBar";
import { getArticles } from "../API calls/getArticles";
import { getComments } from "../API calls/getComments";

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    getArticles(article_id).then((data) => {
      setArticle(data.article);
    });
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);
  console.log(article)
  console.log(comments);

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
      <div className="comments">
        {comments.map((comment) => {
          return (
            <>
              <h4>{comment.author} said: </h4>
              <p>{comment.body}</p>
              <p>at: {comment.created_at.slice(0,10)}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlePage;
