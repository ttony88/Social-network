import React from 'react';
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div >
            <NavLink className={classes.dialog + ' ' + classes.active} to={'/massages/' + props.id}>
                <div className={classes.ava}>
                    <img src={props.ava} alt="ava"/>
                </div>
                <div className={classes.name}>
                    {props.name}
                 </div>
            </NavLink>
        </div>
    )
}
export default Dialog;