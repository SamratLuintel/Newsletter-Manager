import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import Landing from './Landing/Landing';
import CreateTemplate from './Template/CreateTemplate/CreateTemplate';
import Dashboard from './Dashboard/Dashboard';
import Campaigns from './Campaigns/Campaigns';

import { fetchToken} from '../store/actions/actionsIndex';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';



class App extends Component {
  routeUnauthenticated() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    )
  }

  routeAuthenticated() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/campaigns" component = {Campaigns}/>
      </div>
    )
  }

  render() {
    let renderRoutes = null;
    const {auth} = this.props;

    if(auth){
      if(auth.token){
        renderRoutes = this.routeAuthenticated();
      }else{
        renderRoutes = this.routeUnauthenticated();
      }
    }

    return  renderRoutes;
  }

  componentDidMount() {
    this.props.fetchToken();
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch)=>({
  fetchToken:bindActionCreators(fetchToken,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
