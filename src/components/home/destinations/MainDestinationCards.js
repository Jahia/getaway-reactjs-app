import React, {Component} from 'react'
import DestinationCards from "./DestinationCards";
import {MainDestinationWrapper} from "./style";

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
