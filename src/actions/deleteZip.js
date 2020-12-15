export const deleteZip = (userId, zipId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/users/${userId}/locations/${zipId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'DELETE_ZIP', payload: user})
            }
        })
    }
}