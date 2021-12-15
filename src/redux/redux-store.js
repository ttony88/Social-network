import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerNavbar from "./reducer-navbar";
import reducerUsers from "./reducer-users"

let reducers = combineReducers ({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    navBar: reducerNavbar,
    usersPage: reducerUsers
})

let store = createStore(reducers)

export default store