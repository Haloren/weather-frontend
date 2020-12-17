import React from 'react'
import NotesContainer from '../containers/NotesContainer'
import ZipsContainer from '../containers/ZipsContainer'

const User = (props) => {
    // console.log(props)

    let user = props.users[props.match.params.id - 1]
    // let user = props.users.filter(user => user.id == props.match.params.id)[0]
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
            <NotesContainer user={user} />
        </div>
    )
}

export default User