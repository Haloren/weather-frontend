import React from 'react'
import {connect} from 'react-redux'
import {addNote} from '../actions/addNote'

class NoteForm extends React.Component {

    state = { event: '', notes: '', date: '' }

    handleOnChange = (e) => {
        // debugger;
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addNote(this.state, this.props.user.id)
        this.setState({ event: '', notes: '', date: '' });
    }

    render() {
        return (
            <div>
                <h1>Add a Notification</h1> 
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="event" value={this.state.event} onChange={this.handleOnChange} placeholder="Enter Event Name (ex: Birth Anniversary)" required ></input>
                    <textarea name="notes" value={this.state.notes} onChange={this.handleOnChange} placeholder="Add additional notes here" rows={5} cols={40} ></textarea>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} required ></input>
                    <br></br>
                    <input type="submit" value="Add Notification"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addNote})(NoteForm)