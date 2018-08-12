import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import "./Header.scss"
import LoggedOutHeader from './LoggedOutHeader/LoggedOutHeader';
import LoggedInHeader from './LoggedInHeader/LoggedInHeader';

class Header extends Component {
    render() {
        let header;
        const {loggedIn} = this.props;
        if(loggedIn){
            header= <LoggedInHeader/>
        }else {
            header = <LoggedOutHeader />
        }
        return header;
    }
}

const mapStateToProps = (state)=>({
    token:state.auth.token
});
export default Header;