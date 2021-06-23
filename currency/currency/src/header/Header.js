import React from 'react';
import './Header';
import Nav from '../nav/Nav';

class Header extends React.Component {
    render() {
        return(
        <header>

            <div className="top-bar animate-dropdown"></div>
            <div className="main-header">
                <div className="container">
                    <h1 className="site-title">React lite level</h1>
                </div>
            </div>

            <Nav/>

        </header>
        )
    }
}

export default Header;