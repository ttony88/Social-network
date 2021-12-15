import React from "react";
import Forma from "./Forma";
import {actionCreatorAddPost, actionCreatorUpdatePostText} from "../../../redux/reducer-profile";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        textPost: state.profilePage.textPost, 
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(actionCreatorAddPost())
        },
        onPostChange: (text) => {
            dispatch(actionCreatorUpdatePostText(text))
        }
    }
}
const FormaContainer =  connect(mapStateToProps, mapDispatchToProps)(Forma)

export default FormaContainer;