import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header loggedIn={true}/>
                <WelcomeMessage />
            </div>
        );
    }
}

export default Dashboard;