import React from 'react'
import ZipsContainer from '../containers/ZipsContainer'

const User = (props) => {
    // console.log(props)

    let user = props.users[props.match.params.id - 1]
    // console.log(user)
    return (
        <div>
            {/* <li key={props.user.id}> */}
            <h1>
                {/* {props.user.email} */}
                {/* {user ? user.email : null} */}
                {user && user.email}
            </h1>
            <ZipsContainer user={user}/>
        </div>
    )
}

export default User