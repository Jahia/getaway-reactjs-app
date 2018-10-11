import React, {Component} from 'react';
import HomeLandmarkCards from "./HomeLandmarkCards";
import {MainDestinationCards} from "./destinations";
import {Banner} from "../shared/generic";

class HomePanel extends Component {
    render() {
        return (
            <span>
                <Banner/>
                <MainDestinationCards/>
                { /* fromHighlightedDesti=false as landmarks to display
                     should not necessarily be landmarks taken from the displayed highlighted destinations */
                }
                <HomeLandmarkCards max = "4" fromHighlightedDesti = {false} />
            </span>
        )
    }
}

export default HomePanel