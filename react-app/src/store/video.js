// Type
const GET_VIDEOS = "videos/GET_VIDEOS"
const GET_SINGLE_VIDEO ="videos/GET_SINGLE_VIDEO"
const ADD_VIDEO = "videos/ADD_VIDEO"
const UPDATE_VIDEO = "videos/UPDATE_VIDEO"
const DELETE_VIDEO = "videos/DELETE_VIDEO"

// Action
const loadVideos = (videos) => ({
    type: GET_VIDEOS,
    videos
})

const loadSingleVideo= (video) => ({
    type: GET_SINGLE_VIDEO,
    video
})

const addVideo = (video) => ({
    type: ADD_VIDEO,
    video
})

const updateVideo = (video) => ({
    type: UPDATE_VIDEO,
    video
    
})

const deleteSingleVideo = (video) => ({
    type: DELETE_VIDEO,
    video
})

// thunk
export const getVideos = () => async (dispatch) => {
    const response = await fetch(`/api/videos/`)
    

    if (response.ok) {
        const videos = await response.json()
        // console.log('************************************', videos)
        dispatch(loadVideos(videos))
        return response
    }
}

export const getVideo = (videoId) => async dispatch => {
    const response = await fetch(`/api/videos/${videoId}`);
  
    if (response.ok) {
      const videoData = await response.json();
    //   console.log("single video", videoData);
      dispatch(loadSingleVideo(videoData));
    }
};

export const createVideo = (poster_Id, description, video_url) => async (dispatch) => {

    const formdata = new FormData()

    formdata.append('poster_Id', poster_Id)
    formdata.append('description', JSON.stringify(description))
    if (video_url){
        formdata.append('video', video_url)
    }

    const response = await fetch(`/api/videos/new`, {
        method: "POST",
        headers: {
            "enctype": "multipart/form-data"
        },
        body: formdata
    })

    const data = await response.json()
    // console.log('getting to the thunk', video_url, description, poster_Id, data)
    if (data.errors){
        return data
    }
    dispatch(addVideo(data))
    // console.log('thunk after dispatch', video_url, description, poster_Id, data)
}

export const update_Video = (description) => async (dispatch) => {
    const response = await fetch(`/api/videos/${description.video_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(description)
    })
    if (response.ok) {
        const updatedVideo = await response.json()
        dispatch(updateVideo(updatedVideo))
        // console.log('THIS WILL PRINT ONLY IF THE RESPONSE IS OK', updatedVideo)
    }
    // console.log('THIS WILL PRINT EVEN IF THE RESPONSE IS NOT OKAY', description)
}

export const deleteVideo = videoId => async (dispatch) => {
    const response = await fetch(`/api/videos/${videoId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteSingleVideo(videoId))
        // console.log('deleted a review response.ok')
    }
    // console.log('THis is from the deleteReview in store', reviewId)
}


// Reducer
const initialState = {}

export default function videos(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_VIDEOS:{
            const newState = {}
            action.videos.all_videos.forEach(video => {
                newState[video.id] = video
            })
            return newState
        }  
        case GET_SINGLE_VIDEO: {
            const singleVideo = {...state};
            singleVideo[action.video.id] = action.video;
            return singleVideo
        }
        case ADD_VIDEO: {
            updatedState[action.video.id] = action.video
            return updatedState
        }
        case UPDATE_VIDEO: {
            updatedState[action.video.id] = action.video
            return updatedState
        }
        case DELETE_VIDEO: {
            delete updatedState[action.video]
            return updatedState
        }
        default:
            return state
    }
}