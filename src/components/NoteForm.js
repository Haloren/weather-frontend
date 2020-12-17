import React from 'react'

class NoteForm extends React.Component {

    state = { event: '', notes: '', date: '' }

    handleOnChange = (e) => {
        // debugger;
        this.setState({
            event: e.target.value 
            // [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div>
                <h1>Add a Notification</h1> 
                <form className="input-container">
                    <input type="text" name="event" value="" onChange={this.handleOnChange} placeholder="Enter Event Name (ex: Birth Anniversary)" required ></input>
                    <textarea name="notes" value="" onChange={this.handleOnChange} placeholder="Add additional notes here" rows={10} cols={40}></textarea>
                    <input type="date" name="date" value="" onChange={this.handleOnChange}></input>
                    <br></br>
                    <input type="submit" value="Add Notification"></input>
                </form>
            </div>
        )
    }
}

export default NoteForm