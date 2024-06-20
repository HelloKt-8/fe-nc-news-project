import React from "react";
import { Link } from "react-router-dom";

const UsersNav = () => {
  return (
    <Link to={"/users"}>
      <p className="users">Hello Users</p>
    </Link>
  );
};

export default UsersNav;
