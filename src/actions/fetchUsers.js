export function fetchUsers() {
    return (dispatch) => {
        fetch('http://localhost:3001/users')
          .then(resp => resp.json())
        //   .then(data => console.log(data))
          .then(users => dispatch({
              type: 'FETCH_USERS',
              payload: users
          }))
    }
}