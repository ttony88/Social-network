import React from "react";
import { connect } from "react-redux";
import Posts from "./Posts";


let mapStateToProps = (state) => {
    return{ 
        postsData: state.profilePage.postsData
    }    
}

const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer;