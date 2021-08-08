// Imports
import React from "react";
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { Grid } from '@material-ui/core';
// import SideBar from '../SideBar/index';
import "./HomePage.css";


function HomePage() {
    // Data being pulled from store
    const videos = useSelector(state => state.videos)

    // Variables
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <div >
            <Grid container >
                <Grid item md={2}/>
                <Grid item md={3} xs={2} className="flex-section">
                    {/* <SideBar /> */}
                </Grid>
                <Grid item md={5} xs={10}>
                    {Object.values(videos)?.map((video,i) => (
                        <div key={i}>
                            <div className='profile-header-container'>
                                <div className='profile-info-containerz'>
                                    <img src={video.user?.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                                    <div className='video-description-container'>
                                        <div>{`${video.user?.username}`}</div>
                                        <div>{`${video.description}`}</div>
                                    </div>
                                </div>
                                <a href={`/videos/${video.id}`}>
                                    <button className='Comment-button'> Comment </button>
                                </a>
                            </div>
                            <div id='home-video'>
                                <a  href={`/videos/${video.id}`}>
                                    <video  id='home-page-video' src={video.video_url} alt='not-working' controls></video>
                                </a>
                            </div>
                            <hr />   
                        </div>
                    ))}
                </Grid>
                <Grid item md={2}/>
            </Grid>
        </div>
    )
}

export default HomePage