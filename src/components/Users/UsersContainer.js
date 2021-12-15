import React from 'react'
import { connect } from 'react-redux'
import { setUsers, follow, 
         unfollow, setCurentPage, 
         setTotalUsersCaunt, toggleIsFetching } from '../../redux/reducer-users.js'
import * as axios from 'axios'
import Users from './Users'
import Loader from '../../common/Loader'


class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{ 
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCaunt(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{ 
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render () { 
        return <>
            <Loader isFetching={this.props.isFetching} />
            <Users totalUsersCaunt={this.props.totalUsersCaunt}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>    
        
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCaunt: state.usersPage.totalUsersCaunt,
        currentPage: state.usersPage.currentPage, 
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {setUsers, unfollow,
follow, setCurentPage, setTotalUsersCaunt,
toggleIsFetching})(UsersContainer)