import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header loggedIn={false} />
            </div>
        );
    }
}

export default Landing;
