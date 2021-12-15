import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post"

const Posts = (props) => {
    let postsData = props.postsData
    return(
        <div className={classes.posts}>
            {postsData.map(p => <Post post={p.post} like={p.like} img={p.img} id={p.id} />)}
        </div>
    )
}
export default Posts;