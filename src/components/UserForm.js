import React from 'react'

class UserForm extends React.Component {

    state = {email: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            // email: event.target.value
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = () => {
        
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

export default UserForm