const GET_ALL_USERS = 'users/GET_ALL_USERS'

const loadUsers = (users) => ({
    type: GET_ALL_USERS,
    users
})

export const getUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`)
    

    if (response.ok) {
        const users = await response.json()
        // console.log('************************************', videos)
        dispatch(loadUsers (users))
    }
}


// Reducer
const initialState = {}

export default function users(state = initialState, action) {
    // let updatedState = {...state}
    switch (action.type) {
        case GET_ALL_USERS:{
            const newState = {}
            action.users.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        }  
        default:
            return state
    }
}