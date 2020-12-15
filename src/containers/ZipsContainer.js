import React from 'react'
import ZipForm from '../components/ZipForm'
import Zips from '../components/Zips'
import userReducer from '../reducers/userReducer'

class ZipsContainer extends React.Component {

    render() {
        return (
            <div>
                <ZipForm user={this.props.user}/>
                <Zips zips={this.props.user && this.props.user.locations}/>
            </div>
        )
    }
}

export default ZipsContainer