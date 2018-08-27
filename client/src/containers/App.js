import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Landing from "./Landing/Landing";
import EditCampaign from "./EditCampaign/EditCampaign";
import Dashboard from "./Dashboard/Dashboard";
import Campaigns from "./Campaigns/Campaigns";
import { fetchCampaigns, fetchTemplates } from "../store/actions/actionsIndex";
import { fetchToken } from "../store/actions/actionsIndex";
import { bindActionCreators } from "redux";
import Templates from "./Templates/Templates";
import { connect } from "react-redux";
import CreateTemplate from "./Templates/CreateTemplate/CreateTemplate";
import EditTemplate from "./EditTemplate/EditTemplate";

class App extends Component {
  routeUnauthenticated() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }

  //TODO Proxy issue should be fixed in /templates
  routeAuthenticated() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/campaigns" component={Campaigns} />
        <Route exact path="/campaigns/edit/:id" component={EditCampaign} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/templates/create" component={CreateTemplate} />
        <Route exact path="/templates/edit/:id" component={EditTemplate} />
      </div>
    );
  }

  render() {
    let renderRoutes = null;
    const { auth } = this.props;

    if (auth) {
      if (auth.token) {
        renderRoutes = this.routeAuthenticated();
      } else {
        renderRoutes = this.routeUnauthenticated();
      }
    }

    return renderRoutes;
  }

  static getDerivedStateFromProps = nextProps => {
    //If the token exist and then it immediately fetches the campaigns and tokens
    if (nextProps.auth && nextProps.auth.token) {
      nextProps.fetchCampaigns(nextProps.auth.token);
      nextProps.fetchTemplates(nextProps.auth.token);
    }
  };
  componentDidMount = () => {
    this.props.fetchToken();
  };
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchToken: bindActionCreators(fetchToken, dispatch),
  fetchCampaigns: bindActionCreators(fetchCampaigns, dispatch),
  fetchTemplates: bindActionCreators(fetchTemplates, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
