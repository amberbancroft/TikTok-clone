// Imports
import { getVideos } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
// import { useEffect, useState } from "react";
// import { Grid } from '@material-ui/grid';
import "./HomePage.css";

// {setResults}
function HomePage() {
    // Data being pulled from store
    const videos = useSelector(state => state.video)

    // Variables
    const dispatch = useDispatch()
    // const history = useHistory()

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <>
        {/* <Grid container spacing={1}>
        <Grid container item xs={12} spacing={2}>
            <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <FormRow />
        </Grid>
        </Grid> */}
            {Object.values(videos)?.map((video,i) => (
                <div key={i}>
                    {/* {Object.values(videos)?.map(video => (
                        <div class='video-container'>
                            {/* <img src={video.profile_url}></img> */}
                            {/* <h2>{`${video.username}`}</h2> */}
                            {/* <a href={`/videos/${video.id}`}>
                                <video src={video.video_url} alt='not-working' style={{width: '20%'}} controls></video>
                            </a>
                        </div>
                    ))}  */}
                    
                    <a href={`/videos/${video.id}`}>
                        <video src={video.video_url} alt='not-working' style={{width: '20%'}} controls></video>
                    </a>
                </div>
            ))}
        </>
    )
}


export default HomePage