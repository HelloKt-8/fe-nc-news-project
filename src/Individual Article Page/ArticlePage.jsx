import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../homepage/Header";
import UsersNav from "../homepage/UsersNav";
import NavBar from "../homepage/NavBar";
import SearchBar from "../homepage/SearchBar";
import { getArticles, patchArticle } from "../API calls/getArticles";
import { getComments } from "../API calls/getComments";

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticles(article_id).then((data) => {
      setArticle(data.article);
      setVotes(data.article.votes);
    });
    getComments(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);

  const upVote = (article_id, voteValue) => {
    setVotes((beforeVotes) => beforeVotes + voteValue);
    patchArticle(article_id, voteValue).catch((err) => {
      setVotes((beforeVotes) => beforeVotes - voteValue);
      console.log(err, "error patching like");
    });
  };

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
        <button onClick={() => upVote(article.article_id, 1)}>
          {votes > 0 && votes}
          <span aria-label="votes for this article"> 👍</span>
        </button>
        <button onClick={() => upVote(article.article_id, -1)}>
          {votes < 0 && votes}
          <span aria-label="votes for this article">👎</span>
        </button>
        <br></br>
        <img src={article.article_img_url} alt={article.topic} />
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <h4>{comment.author} said: </h4>
              <p>{comment.body}</p>
              <p>at: {comment.created_at.slice(0, 10)}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlePage;
