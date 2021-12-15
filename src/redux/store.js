import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerNavbar from "./reducer-navbar";

let store = {
    _state: {
        dialogsPage: {
            massagesData: [
                {id: 1, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Hello'},
                {id: 2, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Hi, my friend!'},
                {id: 3, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'How are you?'},
                {id: 4, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Yo!'}

            ],
            dialogData: [
                {id: 1, name: 'Anton', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
                {id: 2, name: 'Dasha', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
                {id: 3, name: 'Sava', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
                {id: 4, name: 'Rita', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
                {id: 5, name: 'Masha', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
            ],
            textMassage: 'HI'
        },
        profilePage: {
            postsData: [
                {id: 1, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'Hi, how are you?', like: '4'},
                {id: 2, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'My first post', like: '9'},
                {id: 3, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'post 1', like: '5'},
                {id: 4, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", post: 'post 2', like: '1'}
            ],
            textPost: 'Hello!!!'
        },
        navBar: {
            friendsData: [
                {id: 1, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", name: 'Anton'},
                {id: 2, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", name: 'Dasha'},
                {id: 3, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", name: 'Sava'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('change ')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    addPost ()  {
        let newPost = {
            id: 5,
            img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg",
            post: this._state.profilePage.textPost,
            like: '0'
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.textPost = ''
        this._callSubscriber(this._state)
    },
    updatePostText (newText) {
        this._state.profilePage.textPost = newText
        this._callSubscriber(this._state)

    },
    addMassage () {
        let newMassage = {
            id: 5,
            img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg",
            massage: this._state.dialogsPage.textMassage
        }
        this._state.dialogsPage.massagesData.push(newMassage)
        this._state.dialogsPage.textMassage = ''
        this._callSubscriber(this._state)
    },
    updateMassageText  (newText) {
        this._state.dialogsPage.textMassage = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action)
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action)
        this._state.navBar = reducerNavbar(this._state.navBar,action)
        this._callSubscriber(this._state)
    }

}
export default store;
