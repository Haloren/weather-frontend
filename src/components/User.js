import React from 'react'
import {Redirect} from 'react-router-dom'

const User = (props) => {
    // console.log(props)

    let user = props.users[props.match.params.id - 1]
    // console.log(user)
    return (
        // <li key={props.user.id}>
        <li>
            {/* {props.user.email} */}
            {user ? user.email : null}
        </li>
    )
}

export default User