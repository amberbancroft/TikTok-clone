// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { getVideos } from '../../store/video';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getUsers } from '../../store/user';
import SideBar from '../SideBar/index';
import DemoUser from '../DemoUser/index'
import ForYou from '../SideBar/foryou.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './HomePage.css';


function HomePage() {

    const videos = useSelector(state => state.videos)
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Grid container >
            <Grid item md={2} />
            <Grid item md={3} xs={2} className='flex-section'>
                {user ?
                    <SideBar/>
                    :
                    <div style={{position: 'sticky', top: 30, left: 30}}>
                        <div>
                            <a className='individual-container' id='foryou-container' href={`/`}>
                                <img src={ForYou} alt='ForYouLogo' />
                            </a>
                            <hr className='sidebar--hr'/>
                        </div>
                        
                        <div>
                            {!user && <h5> Log in to follow creators, like videos, and view comments. </h5>}
                            {!user && <DemoUser  user={user} />}
                            {!user && <hr className='sidebar--hr'/>}
                        </div>

                        <h3 className='line-div'>Suggested Accounts</h3>
                        <div>
                            {Object.values(users).map(user => (
                                <div key={user.id}>
                                    <div className='userProfiles-container'>
                                        <img src={user.profile_url} id='profile-icon' alt='suggested_user_photo'></img>
                                        <Link to={`/users/${user.username}`}>{user.username}</Link>
                                    </div>
                                </div>
                            ))}
                            <hr className='sidebar--hr'/>
                        </div>
                        <div className='individual-container' id='about-container'>
                            <h4> Created by: Amber Bancroft </h4>
                            <a className= 'link--icon' href={`https://www.linkedin.com/in/amber-bancroft/`}>
                                <LinkedInIcon />
                            </a>
                            <a className= 'link--icon' href={`https://github.com/amberbancroft`}>
                                <GitHubIcon />
                            </a>
                        </div>
                        <hr className='sidebar--hr'/>
                    </div>
                }
            </Grid>
            <Grid item md={5} xs={10}>

                {Object.values(videos)?.map((video, i) => (

                    <div key={i}>

                        <div className='profile-header-container'>
                            <div className='profile-info-containerz'>
                                <Link to={`/users/${video.user?.username}`}>
                                    <img src={video.user?.profile_url} id='profile-icon' alt='user_profile_photo' />
                                </Link>
                                <div className='video-description-container'>
                                    <Link to={`/users/${video.user?.username}`}> {`${video.user?.username}`} </Link>
                                    <div> {`${video.description}`} </div>
                                </div>
                            </div>
                            <a href={`/videos/${video.id}`}>
                                <button className='Comment-button'> Comment </button>
                            </a>
                        </div>

                        <div id='home-video'>
                            <a href={`/videos/${video.id}`} >
                                <video id='home-page-video' src={video.video_url} alt='home-page-video' controls></video>
                            </a>
                        </div>

                        <hr />
                    </div>
                )).reverse()}
            </Grid>
            <Grid item md={2} />
        </Grid>
    )
};

export default HomePage