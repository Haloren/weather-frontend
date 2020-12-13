import React from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './actions/fetchUsers'
import './App.css';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers({type: 'FETCH_USERS', payload: {email: 'email@eamil.com'}})
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="datetimecontainer">
            <h3 className="day">Tuesday</h3>
            <h3 className="date">Dec 8 </h3>
            <h3 className="time">12:23 am</h3>
          </div>
          <h2 className="location">Jumanji, FI</h2>
          <h1 className="temp">46°</h1>
        </div>
        <br></br>
        <div className="nextdayscontainer">
          <div className="datainline">
            <h3 className="nextdays">Wednesday</h3>
            <h3 className="nextdaystemp">46°</h3>
          </div>
          <div className="datainline">
            <h3 className="nextdays">Thursday</h3>
            <h3 className="nextdaystemp">49°</h3>
          </div>
          <div className="datainline">
            <h3 className="nextdays">Friday</h3>
            <h3 className="nextdaystemp">48°</h3>
          </div>
        </div>
        <br></br>
        <footer className="copyright"><small> &copy;2020WetherWeather </small></footer>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

// export default App;
export default connect(null, {fetchUsers})(App);