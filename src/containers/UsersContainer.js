import React from 'react'
import {connect} from 'react-redux'

import Users from '../components/Users'
import UserForm from '../components/UserForm'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                <UserForm/>
                <Users users={this.props.users}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)