import React, { Component } from 'react'

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <psan className="badge badge-pill badge-secondary">{totalCounters}</psan>
                </a>
            </div>
        </nav>
      );
}

export default Navbar;