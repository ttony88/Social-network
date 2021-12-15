import React from "react";
import classes from './Users.module.css'
import photoUserDefault from '../../assets/unnamed.jpg'
import {NavLink} from "react-router-dom";


const Users = (props) => {
    
    let pagesCaunt = Math.ceil(props.totalUsersCaunt / props.pageSize)

    let pageNumber = []

    for (let i = 1; i <= pagesCaunt; i++) {
        pageNumber.push(i)
    }
    return <div>
        
        <div className={classes.pageNumbers}>
            {pageNumber.map ( p => {
            return <span  className={props.currentPage === p && classes.pageAtive} 
            onClick={ () => {props.onPageChanged(p)} }>{p}</span>})}
        </div>
        {props.users.map ( u => <div kay={u.id} className={classes.containerFrends}>
        <div className={classes.ava}>
            <div>
                <NavLink to={'/profiles/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : photoUserDefault} />
                </NavLink>
            </div>
            <div>
                {u.followed
                ?<button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                :<button onClick={ () => {props.follow(u.id)}}>Follow</button>}
            </div>
        </div>
        <div className={classes.containerInfo}>
            <div className={classes.name}>
                {u.name}
            </div>
            <div className={classes.status}>
               {u.status}
            </div>
            <div className={classes.location}>
                {'u.location.cantry'}
                {'u.location.sity'}
            </div>
        </div>
    </div>
    )}
</div>  
}
export default Users