import React from "react";
import classes from "./Forma.module.css";


const Forma = (props) => {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return(
        <div className={classes.form}>
            <textarea onChange={onPostChange} ref={newPostElement} className={classes.textarea} name="text" value={props.textPost}/>
            <div className={classes.buttons}>
                <button onClick={addPost} className={classes.add}>add</button>
            </div>
        </div>
    )
}
export default Forma;