import React from 'react';
import classes from "./Massage.module.css";

const Massage = (props) => {

    return (
        <div className={classes.massageContent}>
            <div className={classes.ava}><img src={props.ava} alt="ava"/></div>
            <div className={classes.massage}>{props.massage}</div>
        </div>
    )
}
export default Massage;