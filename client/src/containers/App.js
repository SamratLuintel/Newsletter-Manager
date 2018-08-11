import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import Landing from './Landing/Landing';
import CreateTemplate from './Template/CreateTemplate/CreateTemplate';

class App extends Component {
  render() {
    return (
      <div>
         <Route exact path="/" component={Landing}  />
         <Route exact path="/signup" component={SignUp}  />
         <Route exact path="/template/create-template" component={CreateTemplate}  />
      </div>
    );
  }
}

export default App;
