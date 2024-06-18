import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ArticlesList from './ArticlesList'
import NavBar from './NavBar'
import UsersNav from './UsersNav'



function Homepage() {

  return (
    <>
     <UsersNav />
    <Header />
    <NavBar />
    <SearchBar />
    <ArticlesList />
    </>
  )
}

export default Homepage
