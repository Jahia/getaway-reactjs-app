import React, { Component } from 'react';
import styled from "styled-components";


class Footer extends Component {
    render() {
        return (
            <FooterMainWrapper>
                <TopBarWrapper/>
            </FooterMainWrapper>
        )
    }
}

export default Footer


const FooterMainWrapper = styled.section`
    background: #220B38;
    width: 100%;
    height: 120px;
`;

const TopBarWrapper = styled.div`
    background: linear-gradient(113deg, rgb(249, 123, 92) 6%,rgb(176, 77, 230) 97%);
    height: 4px;
    width: 100%;
`;
