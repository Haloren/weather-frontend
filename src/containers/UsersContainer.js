import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import User from '../components/User'
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
                <Switch>
                    {/* Home Page Route goes here ='/' */}

                    {/* <UserForm/> */}
                    <Route exact path='/users/new' component={UserForm}></Route>
                    {/* <Users users={this.props.users}/> */}
                    <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>} ></Route>
                
                    <Route exact path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users}/>}></Route>

                </Switch>
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