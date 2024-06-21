import { React, useEffect, useState } from "react";
import { getUsers } from "../API calls/getUsers";

const UsersPage = ({setChangeUser}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.users);
    });
  }, []);

  const handleClick = (event) => {
    setChangeUser(event.target.alt)
  }

  return (
    <div>
        <h2>Change user here:</h2>
      <div className="user-cards">
        {users.map((user) => {
          return (
            <figure key={user.username} className="avatar-container" onClick={handleClick}>
              <img src={user.avatar_url} alt={user.username} className="avatar-imgs"/>
              <h3>Username: {user.username}</h3>
              <p>Name: {user.name}</p>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
