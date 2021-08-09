// Imports
import { getVideo, deleteVideo } from '../../store/video'
import { getComments } from '../../store/comment'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import EditVideoForm from "./Edit_form"
import EditCommentForm from "./Edit_comment_form"
import './SingleVideoPage.css';
import CommentForm from '../Comment/index';


function SingleVideoPage() {
    // Data being pulled from store
    const { videoId } = useParams()
    const videos = useSelector(state => state.videos)
    // const comments = useSelector(state => state.comments)
    const user = useSelector(state => state.session.user)
    const [showEditForm, setShowEditForm] = useState(false)
    // const [showEditCommentForm, setEditCommentForm] = useState(false)

    // Variables
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVideo(videoId))
    }, [dispatch, videoId])

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    const editHelperFunction = (e) => {
        setShowEditForm(prev => !prev) // always the opposite of the original state
    }

    // const editHelperFunction2 = (e) => {
    //     setEditCommentForm(prev => !prev)
    // }

	const deleteHelperFunction = (e) => {
		dispatch(deleteVideo(videoId));
		history.push(`/`);
	}

    return (
        <Grid container>
            {/* Video */}
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

            {/* Video poster information */}
            <Grid item md={4} xs={2}>
                <div>
                    <div className="Edit-bar-container">
                        {Object.values(videos)?.map((video,i) =>
                            <div key={i} >
                                <div className="profile-info-containerz">
                                    <img src={video.single_video?.user?.profile_url} id='profile-icon' alt="suggested_user_photo"></img>
                                    <div className='video-description-container'>
                                        <div>{`${video.single_video?.user?.username}`}</div>
                                        <div>{`${video.single_video?.description}`} </div>
                                    </div>
                                    {user?.id === video.single_video?.poster_Id && (
                                        <div className="btn-container">
                                            <button className='edit-delete-btn' onClick={() => editHelperFunction()}>Edit</button>
                                            {showEditForm && (<EditVideoForm content={video?.single_video?.description} video_id={video?.single_video?.id}/>)}
                                            <button className='edit-delete-btn' onClick={() => deleteHelperFunction()}>Delete</button>
                                        </div>
                                    )}
                                </div>
                                
                                <hr />
                                
                                {/* Comments on specific video */}
                                <div className='Comments-container'> 
                                    <EditCommentForm video_id={video?.single_video?.id}></EditCommentForm>
                                </div>

                                {/* to post a comment on a video */}
                                <hr />
                                <div>
                                    <CommentForm video_Id= {video?.single_video?.id}></CommentForm>
                                </div>
                            </div>
                        )}
                    </div>
                </div> 
            </Grid>
        </Grid>
    )
}

export default SingleVideoPage