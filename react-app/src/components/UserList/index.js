import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./UserList.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <div key={user.id}>
        <div className="userProfiles-container">
          <img src={user.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
          <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{userComponents}</div>
    </>
  );
}

export default UsersList;