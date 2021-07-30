// Imports
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./HomePage.css";

// {setResults}
function HomePage() {
    // Data being pulled from store
    const videos = useSelector(state => state.videos)

    // Variables
    const dispatch = useDispatch()
    // const history = useHistory()

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <Grid container>
            <Grid item md={2} >
                {/* <Paper>1</Paper> */}
            </Grid>
            <Grid item md={3} xs={2}>
                {/* <Paper>1</Paper> */}
            </Grid>
            <Grid item md={5} xs={10}>
                <Paper>
                    {Object.values(videos)?.map((video,i) => (
                        <div key={i}>
                            {/* {Object.values(videos)?.map(video => (
                                <div class='video-container'>
                                    <img src={video.profile_url}></img>
                                    {/* <h2>{`${video.username}`}</h2> */}
                                    {/* <a href={`/videos/${video.id}`}> 
                                        <video src={video.video_url} alt='not-working' style={{width: '20%'}} controls></video>
                                    </a>
                                </div>
                            ))}  */}
                            
                            <a href={`/videos/${video.id}`}>
                                <video src={video.video_url} alt='not-working' style={{width: '60%'}} controls></video>
                            </a>
                        </div>
                    ))}
                </Paper>
            </Grid>
            <Grid item md={2}>
                {/* <Paper>4</Paper> */}
            </Grid>
        </Grid>
    )
}


export default HomePage