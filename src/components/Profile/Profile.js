import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Ava from "./Ava/Ava";
import Form from "./Forma/Forma";


const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <img src="https://w-dog.ru/wallpapers/9/16/399332228390766/ssha-shtata-vajoming-grand-titon-nacionalnyj-park-gora-moran-ozero-dzhekson-priroda-leto-utro-les-otrazheniya.jpg" alt=""/>
            </div>
            <Ava />
            <Form />
            <Posts />
        </div>
    );
}
export default Profile;