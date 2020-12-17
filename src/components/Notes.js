import React from 'react'
import {Link} from 'react-router-dom'

const Notes = (props) => {
    // console.log(props)

    return (
        <div>
            <h1>Notifications</h1>
            {/* *notification date = todays date ? (display notification) : "" */}
            {props.notes && props.notes.map(note => 
                <li key={note.id}>
                    <Link to={`/users/${note.user_id}/notifications/${note.id}`}> 
                        {note.event} 
                        {note.date}
                        <br></br>
                        {note.notes}
                    </Link>
                        <hr></hr>
                </li>    
            )}
        </div>
    )
}

export default Notes