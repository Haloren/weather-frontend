import React from 'react'
import NoteForm from '../components/NoteForm'
import Notes from '../components/Notes'

class NotesContainer extends React.Component {

    render() {
        return (
            <div>
                <NoteForm user={this.props.user} />
                <Notes notes={this.props.user && this.props.user.notifications} />
            </div>
        )
    }
}

export default NotesContainer