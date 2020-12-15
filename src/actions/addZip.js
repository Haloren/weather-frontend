export const addZip = (zip, userId) => {
    // debugger;
    return (dispatch) => {
        fetch(`http://localhost:3001/users/${userId}/locations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(zip),
        })
        .then(resp => resp.json())
        .then(user => {
            // debugger;
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_ZIP', payload: user})
            }
        }
        )
    }
}