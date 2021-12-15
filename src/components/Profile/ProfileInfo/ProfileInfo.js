import React from "react";
import classes from "./ProfileInfo.module.css";
import StatusUser from '../ProfileInfo/ProfileInfo'


const ProfileInfo = (props) => {
    return(
        <div className={classes.info}>    
            <div className={classes.ava}>
                <img src={props.info.photos.large} />
            </div>
            <StatusUser /> 
            <div>
                About me: {props.info.aboutMe}
            </div>
            <div>
                Looking for a job: {props.info.lookingForAJob  
                ? <div className={classes.imgSmile}><img src='https://img2.freepng.ru/20180512/bpw/kisspng-cooking-joke-emoticon-smiley-5af6b8ca67e5f1.3553110615261186024256.jpg' /></div>
                : <div className={classes.imgSmile}><img src='https://ds05.infourok.ru/uploads/ex/0288/000de537-5a257543/hello_html_79505053.png'/></div>}
            </div>
        </div>    
    )
}
export default ProfileInfo;