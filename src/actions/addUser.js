export const addUser = (email) => {
    // debugger;
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(email),
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: 'ADD_USER', payload: user}))
    }
}