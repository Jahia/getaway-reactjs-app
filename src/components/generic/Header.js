import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg"
/* import '../../styles/Header.css'; TODO review this */

class Header extends Component {
    render() {
        return (
            <nav className="headerMain">
                <div className="logo-container">
                    <Link to={`/`}>
                        <img src={logo} alt="GetAway logo"/>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header