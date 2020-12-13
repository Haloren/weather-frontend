import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './actions/fetchUsers';
import './App.css';
import UsersContainer from './containers/UsersContainer';

class App extends React.Component {
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <UsersContainer/>

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

export default App;
// export default connect()(App);