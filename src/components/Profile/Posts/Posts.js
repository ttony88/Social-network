import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = () => {
    return(
        <div className={classes.posts}>
            <Post massage='Hi, how are you?' />
            <Post massage='My first post' />
            <Post massage='post 1' />
            <Post massage='post 2' />
        </div>
    )
}
export default Posts;