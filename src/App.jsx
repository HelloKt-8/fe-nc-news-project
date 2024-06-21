import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ArticlePage from './Individual Article Page/ArticlePage';
import Homepage from './homepage/Homepage';
import UsersPage from './Users/UsersPage';
import ArticlesList from './homepage/ArticlesList';
import TopicsPage from './Topics/TopicsPage';

function App() {
  const [changeUser, setChangeUser] = useState("");
  const [articles, setArticles] = useState([]);

  return (
    <>
      <BrowserRouter>
      <Homepage changeUser={changeUser}/>
        <Routes>
          <Route path="/" element={<ArticlesList articles={articles} setArticles={setArticles} />} />
          <Route path="/users" element={<UsersPage setChangeUser={setChangeUser} />} />
          <Route path="/articles/:article_id" element={<ArticlePage changeUser={changeUser} />} />
          <Route path="/topics/:topic_slug" element={<TopicsPage articles={articles} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
