const FOLLOWE = 'FOLOWE'
const UNFOLLOWE = 'UNFOLLOWE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCaunt: 0,
    currentPage: 1,
    isFetching: false
}

let reducerUsers = (state=initialState, action) => {
    switch(action.type) {
        case FOLLOWE: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return  {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOWE: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }   
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCaunt: action.totalUsersCaunt
            }  
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }  
        default:
            return state    
    }   
    
}
export const follow = (userId) => ({type: FOLLOWE, userId})

export const unfollow = (userId) => ({type: UNFOLLOWE, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCaunt = (totalUsersCaunt) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCaunt})
 
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default reducerUsers