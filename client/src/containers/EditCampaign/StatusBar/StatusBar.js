import React, { Component } from 'react';

class StatusBar extends Component {
    render() {
        return (
            <div className="c-statusBar">
                <div className="c-slatMeta">
                    <div className="c-slatMeta__info">
                        <div className="c-slatInfo">
                            <div className="c-slatInfoBody">
                                <div className="c-slatInfoStatus">
                                    Let's get started! <span className="badge">Draft</span>
                                </div>
                                <div className="c-slatInfoTitle">
                                    Draft Email
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-slatMeta__action">
                        <p><a href="">Finish Later</a></p>
                        <button>Shedule</button>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;