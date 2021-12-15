import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={classes.post}>
            <div className={classes.ava}><img src={props.img} alt="ava"/></div>
            <div className={classes.massage}>{props.post}</div>
            <div className={classes.like}>Like: {props.like}</div>
        </div>

    )
}
export default Post;