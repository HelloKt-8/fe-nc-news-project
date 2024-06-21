import {React, useState} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import UsersNav from './UsersNav';

function Homepage({ changeUser, setTopics, topics}) {
  return (
    <>
      <UsersNav changeUser={changeUser} />
      <Header />
      <NavBar />
      <SearchBar />
    </>
  );
}

export default Homepage;
