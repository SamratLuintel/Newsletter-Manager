import React from 'react';

const  LoggedOutHeader= () => {
    return (
        <div className="Header Header--dark">
            <div className="Header__brand">
                ReactMunch
        </div>
            <ul className="navbar">
                <li className="navbar__navitem">Campaigns</li>
                <li className="navbar__navitem">Templates</li>
                <li className="navbar__navitem">
                    <a href="/auth/google" className="signin">Sign In</a>
                </li>
            </ul>
        </div>
    );
}

export default LoggedOutHeader;