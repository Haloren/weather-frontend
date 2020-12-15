import React from 'react'
import {connect} from 'react-redux'
import {addZip} from '../actions/addZip'

class ZipForm extends React.Component {

    state = {zip: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // this.props.addZip(this.state)
        addZip(this.state, this.props.id)
        this.setState({zip: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <form className="input-container">
                    <input className="input-text" type="text" name="zip" value={this.state.zip} onChange={this.handleOnChange} placeholder="Enter Zip Code" required></input>
                    <input className="input-btn" type="submit" value="Submit"></input>
                </form>
                </form>
            </div>
        )
    }
}

export default connect(null, {addZip})(ZipForm)