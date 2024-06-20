import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ArticlePage from './Individual Article Page/ArticlePage'
import Homepage from './homepage/Homepage'
import Usercard from './Users/UserCards'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Homepage/>}/>
      <Route path ="/articles/:article_id" element={<ArticlePage/>}/>
      <Route path ="/users" element={<Usercard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
