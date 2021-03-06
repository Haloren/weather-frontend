import { render } from '@testing-library/react'
import React from 'react'
import {connect} from 'react-redux'
import {deleteZip} from '../actions/deleteZip'

const Zips = (props) => {

    const handleDelete = (zip) => {
        // send userId, zipId to deleteZip
        // debugger
        props.deleteZip(zip.user_id, zip.id)
    }

    return (
        <div>
            <h1> Saved Locations </h1>
            {props.zips && props.zips.map(zip => 
                <li key={zip.id}>
                    {zip.zip}
                    <button onClick={() => handleDelete(zip)}>Delete</button>
                </li>    
            )}
            <hr></hr>
        </div>
    )
}

export default connect(null, {deleteZip})(Zips)