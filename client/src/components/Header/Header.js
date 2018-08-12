import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import "./Header.scss"
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__brand">
                    ReactMunch
                </div>
                <ul className="navbar">
                    <li className="navbar__navitem">Home</li>
                    <li className="navbar__navitem">Features</li>
                    <li className="navbar__navitem">
                        <a href="/auth/google" className="signin">Sign In</a>
                    </li>
                </ul>
              
                {this.props.token && <p>Logged in</p>}
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    token:state.auth.token
});
export default Header;