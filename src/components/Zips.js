import { render } from '@testing-library/react'
import React from 'react'

const Zips = (props) => {

    return (
        <div>
            {props.zips && props.zips.map(zip => 
                <li key={zip.id}>
                    {zip.zip}
                </li>    
            )}
        </div>
    )
}

export default Zips