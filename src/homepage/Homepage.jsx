import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import UsersNav from './UsersNav';

function Homepage({ changeUser }) {
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
