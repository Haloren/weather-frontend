import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'

class UserForm extends React.Component {

    state = {email: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            // email: event.target.value
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({email: ''});
    }

    render() {
        return (
            <div>
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input className="input-text" type="email" value={this.state.email} name="email" onChange={this.handleOnChange} required></input>
                    <span className="floating-label">Enter your Email</span>
                    <input className="input-btn" type="submit" value="Login"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addUser})(UserForm)