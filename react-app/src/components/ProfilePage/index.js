import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar/index';
import { getVideos } from '../../store/video'
import { getUserInfo } from '../../store/profile'

function User() {
  // const [user, setUser] = useState({});
  const { username } = useParams();
  const videos = useSelector(state => state.videos)
  const userVideos = Object.values(videos).filter((video => username === video.user.username))

  // Variables
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideos())
  }, [dispatch])

  useEffect(() => {
    dispatch(getVideos())
    dispatch(getUserInfo(username))
  }, [dispatch, username])

  return (
    <Grid container>
      <Grid item md= { 2 } />
      <Grid item md= { 3 } xs= { 2 }>
        <div className= 'sidebar-container'>
          <SideBar />
        </div>
      </Grid>

      {/* profile info and videos */}
      <Grid item md={5} xs={10}>
        {userVideos.length > 0 ?
          <>
            {userVideos.map((video, ind) => (
              <>
                <div className='profile-info-profile'>
                  <img src={video.user?.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                  <div>{video.user?.username} </div>
                  <div>{video.user?.bio} </div>

                </div>
                <a href={`/videos/${video.id}`}>
                  <video id='home-page-video' src={video.video_url} alt='not-working' controls></video>
                </a>
              </>
            ))}
          </>

          : <h1>No Posts Yet :(</h1>}
      </Grid>

      <Grid item md={2} />
    </Grid>
  )
};

export default User