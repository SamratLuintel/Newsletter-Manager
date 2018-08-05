import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div style={{display:'flex',flexDirection:'row',width:"200px",justifyContent:'space-between'}}>
                <a href="/auth/google">Login With Google</a>
                {this.props.token && <p>Logged in</p>}
            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    token:state.auth.token
});
export default Header;