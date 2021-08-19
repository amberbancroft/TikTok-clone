// Type
const GET_COMMENTS = "comments/GET_COMMENTS"
const ADD_COMMENT = "comments/ADD_COMMENT"
const UPDATE_COMMENT = "comments/UPDATE_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"

// Action
const loadComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment
    
})

const deleteSingleComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

// thunk
export const getComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`)
    
    if (response.ok) {
        const comments = await response.json()
        dispatch(loadComments(comments))
        return response
    }
}

export const addComments = (content, poster_Id, video_Id) => async (dispatch) => {

    const response = await fetch(`/api/comments/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content, poster_Id, video_Id),
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(addComment(data)) 
    }
}

export const update_comment = (comment_id, content ) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( { content })
    })
    if (response.ok) {
        const updatedComment = await response.json()
        dispatch(updateComment(updatedComment))
    }
}


export const deleteComment = commentId => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(deleteSingleComment(commentId))
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
        case ADD_COMMENT: {
            updatedState[action.comment.id] = action.comment
            return updatedState
        }
        case UPDATE_COMMENT: {
            updatedState[action.comment.id] = action.comment
            return updatedState
        }
        // case UPDATE_COMMENT: {
        //     return {
        //         ...state,
        //         updatedState[action.comment.id] = action.comment,
        //     }
        // }
        case DELETE_COMMENT: {
            delete updatedState[action.comment]
            return updatedState
        }
        default:
            return state
    }
}