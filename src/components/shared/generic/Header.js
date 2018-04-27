import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {HeaderWrapper, LogoWrapper} from "./style";
import logo from "../../../images/logo.svg"


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <LogoWrapper>
                    <Link to={`/`}>
                        <img src={logo} alt="GetAway logo"/>
                    </Link>
                </LogoWrapper>
            </HeaderWrapper>
        )
    }
}

export default Header