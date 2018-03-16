import React, {Component} from 'react'
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="headerMain">
                <div className="logo-container">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/346954/getaway.svg" alt="GetAway logo"
                         onClick={() => this.props.changeDestinationCB(null)}/>
                </div>
            </nav>
        )
    }
}

export default Header