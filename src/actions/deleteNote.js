export const deleteNote = (userId, noteId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/users/${userId}/notifications/${noteId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'DELETE_NOTE', payload: user})
            }
        })
    }
}