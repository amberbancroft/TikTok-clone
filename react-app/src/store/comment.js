// Type
const GET_COMMENTS = "comments/GET_COMMENTS"
// const GET_SINGLE_COMMENT ="comments/GET_SINGLE_COMMENT"
// const ADD_COMMENT = "comments/ADD_COMMENT"
// const UPDATE_COMMENT = "comments/UPDATE_COMMENT"
// const DELETE_COMMENT = "comments/DELETE_COMMENT"

// Action
const loadComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

// const loadSingleComment= (comment) => ({
//     type: GET_SINGLE_COMMENT,
//     comment
// })

// const addComment = (comment) => ({
//     type: ADD_COMMENT,
//     comment
// })

// const updateComment = (comment) => ({
//     type: UPDATE_COMMENT,
//     comment
    
// })

// const deleteSingleComment = (comment) => ({
//     type: DELETE_COMMENT,
//     comment
// })

// thunk
export const getComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`)
    
    if (response.ok) {
        const comments = await response.json()
        console.log('************************************', comments)
        dispatch(loadComments(comments))
        return response
    }
}

// Reducer
const initialState = {}

export default function comments(state = initialState, action) {
    let updatedState = {...state}
    switch (action.type) {
        case GET_COMMENTS:{
            const newState = {}
            action.comments.all_comments.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }  
        // case GET_SINGLE_VIDEO: {
        //     const singleVideo = {...state};
        //     singleVideo[action.video.id] = action.video;
        //     return singleVideo
        // }
        // case ADD_VIDEO: {
        //     updatedState[action.video.id] = action.video
        //     return updatedState
        // }
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