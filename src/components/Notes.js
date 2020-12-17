import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteNote} from '../actions/deleteNote'

const Notes = (props) => {
    // console.log(props)
    const handleDelete = (note) => {
        // send noteId, noteId to deleteNote
        // debugger;
        props.deleteNote(note.user_id, note.id)
    }

    return (
        <div>
            <h1>Notifications</h1>
            {/* *notification date = todays date ? (display notification) : "" */}
            {props.notes && props.notes.map(note => 
                <li key={note.id}>
                    <Link to={`/users/${note.user_id}/notifications/${note.id}`}> 
                        {note.event} 
                        <br></br>
                        {note.date}
                        <br></br>
                        {note.notes}
                    </Link>
                    <button onClick={() => handleDelete(note)}>Delete</button>
                        <hr></hr>
                </li>    
            )}
        </div>
    )
}

export default connect(null, {deleteNote})(Notes)