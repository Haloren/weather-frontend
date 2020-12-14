import React from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User'

const Users = (props) => {
    return (
        <div>
            {props.users.map(user => 
            <li key={user.id}>
                {/* {user.email} */}
                {/* <User user={user}/> */}
                <Link to={`/users/${user.id}`}>
                    {user.email}
                </Link>
            </li>
            )}
        </div>
    )
}

export default Users