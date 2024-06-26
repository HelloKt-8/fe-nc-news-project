# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../homepage/Header";
import UsersNav from "../homepage/UsersNav";
import NavBar from "../homepage/NavBar";
import SearchBar from "../homepage/SearchBar";
import { getArticles, patchArticle } from "../API calls/getArticles";
import { getComments, postNewComments } from "../API calls/getComments";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [newComment, setNewComment] = useState("");

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
    patchArticle(article_id, voteValue).then((data) => {
      setVotes(data.article.votes);
    });
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = "username_placement";

    const comment = {
      username: username,
      body: newComment,
    };

    console.log("COMMENT TO ADD >>>", comment);

    postNewComments(comment, article_id)
      .then((newCommentFromApi) => {
        setNewComment("");
        setComments((currentComments) => {
          return [newCommentFromApi, ...currentComments];
        });
      })
      .catch((err) => {
        console.log(err, "error posting comment");
      });
  };

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
        <form
          className="CommentAdder"
          onSubmit={handleSubmit}
          id="commentAdder"
        >
          <label htmlFor="newComment">Add a comment:</label>
          <textarea
            id="newComment"
            aria-multiline="true"
            onChange={handleChange}
            value={newComment}
          ></textarea>
          <button>Add Comment</button>
        </form>
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
