import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
    return(
        <div>
            <div className={classes.ava}>
                <img src={props.img} alt="ava"/>
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    )
}
export default Friend;
