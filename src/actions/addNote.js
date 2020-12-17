export const addNote = (note, userId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/users/${userId}/notifications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(note),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_NOTE', payload: user})
            }
        })
    }
}