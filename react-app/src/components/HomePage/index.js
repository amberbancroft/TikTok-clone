// Imports
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DemoUser from '../DemoUser/index';
import ForYou from './foryou.png'
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
        <Grid container>
            <Grid item md={2}/>
            <Grid item md={3} xs={2}>
               <div className="sidebar-container">
                   <div className="foryou-container">
                       <a href={`/`}>
                            <img src={ForYou} alt="ForYouLogo"></img>
                        </a>
                   </div>
                   <div>
                       <h4>Log in to follow creators, like videos, and view comments.</h4>
                       <DemoUser/>
                   </div>
                   <div className="userList-container">
                       <h5>Suggested Accounts</h5>
                   </div>
                   <div className="about-container">
                       <h5>Created by: Amber Bancroft</h5>
                        <a href={`https://www.linkedin.com/in/amber-bancroft/`}>
                            <LinkedInIcon/>
                        </a>
                        <a href={`https://github.com/amberbancroft`}>
                            <GitHubIcon/>
                        </a>
                   </div>
               </div>
            </Grid>
            <Grid item md={5} xs={10}>
                {Object.values(videos)?.map((video,i) => (
                    <div key={i}>
                        <a href={`/videos/${video.id}`}>
                            <video src={video.video_url} alt='not-working' style={{width: '60%'}} controls></video>
                        </a>
                    </div>
                ))}
            </Grid>
            <Grid item md={2}/>
        </Grid>
    )
}


export default HomePage