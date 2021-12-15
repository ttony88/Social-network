import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const  Friends = (props) => {
    
    let friendsElement = props.friendsData.map(f => <Friend name={f.name} img={f.img} />)
        
        return (
            <div className={classes.friendsContent}>
                <h3 className={classes.title}>FRIENDS</h3>
                <div className={classes.friends}>
                    {friendsElement}
                </div>
            </div>
                
    )
}
export default Friends;