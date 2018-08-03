import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div>
         <Route exact path="/signup" component={SignUp}  />
      </div>
    );
  }
}

export default App;
