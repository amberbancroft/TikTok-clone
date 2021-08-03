// Imports
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import SideBar from '../SideBar/index';
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
                   <SideBar/>
               </div>
            </Grid>
            <Grid item md={5} xs={10}>
                {Object.values(videos)?.map((video,i) => (
                    <div key={i}>
                        <a href={`/videos/${video.id}`}>
                            <div className='profile-header-container'>
                                <img src={video.user.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                                <div>{`${video.user.username}`}</div>
                                <button className='Comment-button'> Comment </button>
                            </div>
                            <video src={video.video_url} alt='not-working' style={{width: '60%'}} controls></video>
                            <hr />
                        </a>
                    </div>
                ))}
            </Grid>
            <Grid item md={2}/>
        </Grid>
    )
}

export default HomePage