import React from 'react'
import NoteForm from '../components/NoteForm'
import Notes from '../components/Notes'
import Note from '../components/Note'

class NotesContainer extends React.Component {

    render() {
        return (
            <div>
                <NoteForm user={this.props.user} />
                <Notes notes={this.props.user && this.props.user.notifications} />
                <Note />
            </div>
        )
    }
}

export default NotesContainer