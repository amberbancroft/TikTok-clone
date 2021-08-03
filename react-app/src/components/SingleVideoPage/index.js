// Imports
import { getVideo, deleteVideo } from '../../store/video'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
// import EditVideoForm from '../EditVideoForm';
import EditVideoForm from "./Edit_form"


// {setResults}
function SingleVideoPage() {
    // Data being pulled from store
    const { videoId } = useParams()
    const videos = useSelector(state => state.videos)
    const [showEditForm, setShowEditForm] = useState(false)

    // Variables
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVideo(videoId))
    }, [dispatch])

    const editHelperFunction = (e) => {
        // e.preventDefault();

        // always the opposite of the original state
        setShowEditForm(prev => !prev)
    }

    // Helping function for delete
	const deleteHelperFunction = (e) => {
		// e.preventDefault();
		dispatch(deleteVideo(videoId));
		history.push(`/`);
	}

    return (
        <Grid container>
            <Grid item md={7} xs={10}>
                {Object.values(videos)?.map((video,i) =>
                    <div key={i} >
                        <video src={video.single_video.video_url} alt='not-working' style={{width: '60%'}} controls></video>
                    </div>
                )}      
            </Grid>

            <Grid item md={5} xs={2}>
                <button onClick={() => editHelperFunction()}>Edit</button>
                   {showEditForm && (
                        <EditVideoForm/>
                    )}
                <div className="Edit-bar-container">
                    <button onClick={() => deleteHelperFunction()}>Delete</button>
                    {Object.values(videos)?.map((video,i) =>
                            <div key={i} >
                                <div>{`${video.single_video.description}`} </div>
                            </div>
                    )}
                </div>
                <div> comments here </div>
            </Grid>
        </Grid>
    )
}


export default SingleVideoPage