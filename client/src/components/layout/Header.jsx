import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-default navbar-static-top" >
            <div className="container">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" exact to="/">Bangladesh Address Api</NavLink>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <ul className="nav navbar-nav navbar-right collapse navbar-collapse" >
                    <li ><NavLink exact to="/" activeClassName="active_cls">Home</NavLink></li>
                    <li ><NavLink exact to="/addsubdiv" activeClassName="active_cls">Add Sub-Division</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;