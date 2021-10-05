import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <img src="https://w-dog.ru/wallpapers/9/16/399332228390766/ssha-shtata-vajoming-grand-titon-nacionalnyj-park-gora-moran-ozero-dzhekson-priroda-leto-utro-les-otrazheniya.jpg" alt=""/>
            </div>
            <div className={classes.ava}>ava + description</div>
            <div className={classes.post}>My posts</div>
            <div className={classes.post}>New post</div>
            <div className={classes.post}>post 1</div>
            <div className={classes.post}>post 2</div>
        </div>
    );
}
export default Profile;