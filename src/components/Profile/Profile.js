import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FormaContainer from "./Forma/FormaContainer";
import PostsContainer from "./Posts/postsContainer";
import Loader from "../../common/Loader";



const Profile = (props) => {
    if (!props.profile){
        return <Loader/>
    }    
    return(
        <div className={classes.content}>
            <ProfileInfo info={props.profile}/>
            <FormaContainer />
            <PostsContainer />
        </div>
    );
}
export default Profile;