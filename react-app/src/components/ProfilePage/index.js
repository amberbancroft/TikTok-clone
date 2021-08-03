import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <img src={user.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
      </li>
      <li>
        <strong></strong> {user.username}
      </li>
      <li>
        <strong>Username</strong> {user.bio}
      </li>
    </ul>    
  );
}
export default User;
