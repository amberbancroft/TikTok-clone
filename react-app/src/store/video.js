// Type
const GET_VIDEOS = "videos/GET_VIDEOS"
const ADD_VIDEO = "videos/ADD_VIDEO"
// const UPDATE_VIDEO = "videos/UPDATE_VIDEO"
// const DELETE_VIDEO = "videos/DELETE_VIDEO"

// Action
const loadVideos = (videos) => ({
    type: GET_VIDEOS,
    videos
})

const addVideo = (video) => ({
    type: ADD_VIDEO,
    video
})

// const updateSingleVideo = (video) => ({
//         type: UPDATE_VIDEO,
//         video
    
// })

// const deleteSingleVideo = (video) => ({
//     type: DELETE_VIDEO,
//     video
// })

// thunk
export const getVideos = () => async (dispatch) => {
    const response = await fetch(`/api/videos/`)
    

    if (response.ok) {
        const videos = await response.json()
        // console.log('************************************', videos)
        dispatch(loadVideos(videos))
    }
}

export const createVideo = video => async (dispatch) => {
    // const response = await fetch(`/api/venues/reviews/${review.venue_id}`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(review)
    // })
    // if (response.ok) {
    //     const data = await response.json()
    //     console.log("!!!!!!!!!!!!", data)
    //     dispatch(addReview(data))
    //     console.log("++++++++++", data)
    // }

    const response = await fetch(`/api/videos/${video.video_Id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(video)
    })
    if (response.ok) {
        const newVideo = await response.json()
        dispatch(addVideo(newVideo))
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', newVideo)
    }
    // console.log('from store in reviews', review)
    // return review
}

// Reducer
const initialState = {}

export default function reviews(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_VIDEOS:{
            const newState = {}
            action.videos.all_videos.forEach(video => {
                newState[video.id] = video
            })
            return newState
        }  
        case ADD_VIDEO:
            updatedState[action.video.id] = action.video
            return updatedState
        // case UPDATE_VIDEO: {
        //     updatedState[action.video.id] = action.video
        //     return updatedState
        // }
        // case DELETE_VIDEO: {
        //     delete updatedState[action.video]
        //     return updatedState
        // }
        default:
            return state
    }
}