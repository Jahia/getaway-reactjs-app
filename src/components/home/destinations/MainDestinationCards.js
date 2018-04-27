import React, {Component} from 'react'
import DestinationCards from "./DestinationCards";
import styled from "styled-components";

const MainDestinationWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 18px;
        opacity: .67;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: 2px dotted #ccc;
        @media screen and (max-width: 1080px) {
            margin: 16px 16px 8px 16px;
        }
    }
`;

class MainDestinationCards extends Component {

    render() {
        return (
            <MainDestinationWrapper>
                <h2>Highlighted Destinations</h2>
                <DestinationCards max="3" onlyHighlighted={true}/>
            </MainDestinationWrapper>
        );
    }
}

export default MainDestinationCards
