import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar/index';
import { getVideos } from '../../store/video'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const videos = useSelector(state => state.videos)

  // Variables
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getVideos())
  }, [dispatch])

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
    <Grid container>
      <Grid item md={2}/>
      <Grid item md={3} xs={2}>
          <div className="sidebar-container">
              <SideBar/>
          </div>
      </Grid>
      <Grid item md={5} xs={10}>
        {Object.values(videos)?.map((video,i) => (
          <div key={i}>
            <button onClick={() => console.log(video)}>poop</button>
          </div>
        ))}
      </Grid>
      <Grid item md={2}/>
    </Grid>
  );
};

export default User;