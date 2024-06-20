import {React, useEffect, useState} from "react";
import Header from "../homepage/Header";
import UsersNav from "../homepage/UsersNav";
import NavBar from "../homepage/NavBar";
import SearchBar from "../homepage/SearchBar";

const Usercard = () => {
return(
    <div>
    <div className="header-components">
        <UsersNav />
        <Header />
        <NavBar />
        <SearchBar />
      </div>
<p>clicked</p>

      </div>
)
}

export default Usercard