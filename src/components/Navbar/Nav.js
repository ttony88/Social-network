import React from "react";
import classes from "./Nav.module.css";


const Nav = () => {
    return ( <nav className={classes.nav}>
                 <div className={classes.item}><a href={'/profiles'}>Profiles</a></div>
                 <div className={classes.item}><a href={'/massages'}>Massages</a></div>
                 <div className={classes.item}><a href={'/news'}>News</a></div>
                 <div className={classes.item}><a href={'/music'}>Music</a></div>
                 <div className={classes.item}><a href={'/setting'}>Settings</a></div>
            </nav>
    );
}
export default Nav;