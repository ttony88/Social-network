import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Nav = (props) => {
    return (
        <nav className={classes.nav}>
             <div className={classes.item}><NavLink to={'/profiles'} activeClassName={classes.activeLink}>Profiles</NavLink></div>
             <div className={classes.item}><NavLink to={'/massages'} activeClassName={classes.activeLink}>Massages</NavLink></div>
             <div className={classes.item}><NavLink to={'/news'} activeClassName={classes.activeLink}>News</NavLink></div>
             <div className={classes.item}><NavLink to={'/music'} activeClassName={classes.activeLink}>Music</NavLink></div>
             <div className={classes.item}><NavLink to={'/setting'} activeClassName={classes.activeLink}>Settings</NavLink></div>
             <div className={classes.item}><NavLink to={'/users'} activeClassName={classes.activeLink}>Users</NavLink></div>
             <FriendsContainer />
        </nav>
    );
}
export default Nav;