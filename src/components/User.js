import React from 'react'

const User = (props) => {
    // console.log(props)

    let user = props.users[props.match.params.id - 1]
    // console.log(user)
    return (
        // <li key={props.user.id}>
        <h1>
            {/* {props.user.email} */}
            {user ? user.email : null}
        </h1>
    )
}

export default User