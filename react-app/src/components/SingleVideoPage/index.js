// Imports
import { getVideo, deleteVideo } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
// import EditVideoForm from '../EditVideoForm';
import EditVideoForm from "./Edit_form"
import './SingleVideoPage.css';


function SingleVideoPage() {
    // Data being pulled from store
    const { videoId } = useParams()
    const videos = useSelector(state => state.videos)
    const user = useSelector(state => state.session.user)
    const [showEditForm, setShowEditForm] = useState(false)

    // Variables
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVideo(videoId))
    }, [dispatch])

    const editHelperFunction = (e) => {
        // always the opposite of the original state
        setShowEditForm(prev => !prev)
    }

	const deleteHelperFunction = (e) => {
		dispatch(deleteVideo(videoId));
		history.push(`/`);
	}

    return (
        <Grid container>
            <Grid item md={8} xs={10}>
                <div className='Video-container'>
                    <a href={'/'}>
                        <CancelIcon id='cancel-icon' ></CancelIcon>
                    </a>
                    {Object.values(videos)?.map((video,i) =>
                        <div id='single-video' key={i} >
                            <video src={video.single_video?.video_url} alt='not-working' controls></video>
                        </div>
                    )}      
                </div>
            </Grid>

            <Grid item md={4} xs={2}>
                <div>
                    <div className="Edit-bar-container">
                        {Object.values(videos)?.map((video,i) =>
                            <div className='profile-info-container' key={i} >
                                <img src={video.single_video?.user?.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                                <div className='video-description-container'>
                                    <div>{`${video.single_video?.user?.username}`}</div>
                                    <div>{`${video.single_video?.description}`} </div>
                                </div>
                                {user?.id === video.single_video?.poster_Id && (
                                    <>
                                        <button onClick={() => editHelperFunction()}>Edit</button>
                                        {showEditForm && (<EditVideoForm video_id={video?.single_video?.id}/>)}
                                        <button onClick={() => deleteHelperFunction()}>Delete</button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                <div className='Comments-container'> 
                    comments here 
                </div>
            </Grid>
        </Grid>
    )
}

export default SingleVideoPage