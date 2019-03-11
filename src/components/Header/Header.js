import React, { Component } from 'react';

class Header extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="Header">
                <img src='./images/me.jpg' height='200' width='200' className="myPic"/>
                <h3>Zhaoyang Lin</h3>
            </div>
        );
    }
}

export default Header;