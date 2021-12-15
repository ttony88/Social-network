const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_PROFILE_USER = 'SET_PROFILE_USER'

let initialState = {
    postsData: [
        {id: 1, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'Hi, how are you?', like: '4'},
        {id: 2, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'My first post', like: '9'},
        {id: 3, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'post 1', like: '5'},
        {id: 4, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'post 2', like: '1'}
    ],
    textPost: 'Hello!!!',
    profile: null
}

let reducerProfile = (state=initialState, action) => {
    switch (action.type) {
        case (ADD_POST):{
            let newPost = {
                id: 5,
                img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg",
                post: state.textPost,
                like: '0'
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                textPost: ''
            }
        }
        case (UPDATE_POST_TEXT):{
            return {
                ...state,
                textPost: action.newText
            }
        }
        case (SET_PROFILE_USER):{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}
export const actionCreatorAddPost = () =>
    ({type: ADD_POST})

export const actionCreatorUpdatePostText = (text) =>
    ({type: UPDATE_POST_TEXT, newText: text})

export const setProfileUser = (profile) =>
    ({type: SET_PROFILE_USER, profile})
    
export default reducerProfile