import React from "react";
import { Link } from "react-router-dom";

const UsersNav = ({ changeUser }) => {
  return (
    <Link to={"/users"}>
      <p className="users">Hello {changeUser}</p>
    </Link>
  );
};

export default UsersNav;
