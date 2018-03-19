import React, {Component} from 'react'
import {Link} from "react-router-dom";

/* import '../../styles/Header.css'; TODO review this */

class Header extends Component {
    render() {
        return (
            <nav className="headerMain">
                <div className="logo-container">
                    <Link to={`/`}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/346954/getaway.svg" alt="GetAway logo"/>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header