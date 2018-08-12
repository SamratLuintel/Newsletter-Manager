import React from 'react';

const  LoggedOutHeader= () => {
    return (
        <div className="Header Header--light">
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
        </div>
    );
}

export default LoggedOutHeader;