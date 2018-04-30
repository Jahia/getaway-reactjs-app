import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../../../images/logo.svg";


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


const HeaderWrapper = styled.nav`
    position: relative;
`;

const LogoWrapper = styled.div`
    height: 68px;
    background: #220B38;
    @media screen and (max-width: 840px) {
        height: 58px;
    }
    img {
        height: 36px;
        padding: 16px;
        @media screen and (max-width: 840px) {
            height: 30px;
            padding: 14px 16px;
        }
    }
`;