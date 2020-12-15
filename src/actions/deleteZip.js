export const deleteZip = (userId, zipId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/users/${userId}/locations/${zipId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => dispatch({type: 'DELETE_ZIP', payload: user}))
    }
}