// Type
const GET_VIDEOS = "videos/GET_VIDEOS"
// const ADD_VIDEO = "videos/ADD_VIDEO"
// const UPDATE_VIDEO = "videos/UPDATE_VIDEO"
// const DELETE_VIDEO = "videos/DELETE_VIDEO"

// Action
const loadVideos = (videos) => ({
    type: GET_VIDEOS,
    payload: videos
})

// const addVideos = (video) => ({
//     type: ADD_VIDEO,
//     video
// })

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
        console.log('************************************', videos)
        dispatch(loadVideos(videos))
    }
}

// Reducer
const initialState = {}

export default function reviews(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_VIDEOS:{
            const newState = {}
            // action.videos.forEach(video => {
            //     newState[video.id] = video
            // })
            // const dict = action.videos
            // console.log('*************************************', dict)
            // let i = 0
            
            // while (i < dict.length()) {
            //     newState[dict[i].id] = dict[i];
            //     i++;
            // }
            
            return newState
        }  
        // case ADD_VIDEO:
        //     updatedState[action.video.id] = action.video
        //     return updatedState
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