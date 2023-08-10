import React, { Component } from 'react';
import logo from "../../assets/investment-calculator-logo.png";

class Header extends Component {
    render() {
        return (
          <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
          </header>
        );
    }
}

export default Header;
