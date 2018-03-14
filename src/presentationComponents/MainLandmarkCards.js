 import React, { Component } from 'react'
/* import '../styles/MainLandmarkCards.css';  TODO review this */
import LandmarkCards from "./LandmarkCards";

class MainLandmarkCards extends Component {

    render() {
        return (
            <section className = "landmarksMain">
                <h2>Highlighted Landmarks</h2>
                <LandmarkCards max = "5" onlyHighlighted = {false} />
            </section>
        );
    }
}

export default MainLandmarkCards