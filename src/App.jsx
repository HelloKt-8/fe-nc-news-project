import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ArticlePage from './Individual Article Page/ArticlePage';
import Homepage from './homepage/Homepage';
import UsersPage from './Users/UsersPage';
import ArticlesList from './homepage/ArticlesList';

function App() {
  const [changeUser, setChangeUser] = useState(""); // Initialize as an empty string

  return (
    <>
      <BrowserRouter>
      <Homepage changeUser={changeUser} />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/users" element={<UsersPage setChangeUser={setChangeUser} />} />
          <Route path="/articles/:article_id" element={<ArticlePage changeUser={changeUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
