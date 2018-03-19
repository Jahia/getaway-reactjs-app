import React, {Component} from 'react'
/* import '../styles/MainDestinationCards.css';  TODO review this */
import DestinationCards from "./DestinationCards";

class MainDestinationCards extends Component {

    render() {
        return (
            <section className="destinationsMain">
                <h2>Highlighted Destinations</h2>
                <DestinationCards max="3" onlyHighlighted={true}/>
            </section>
        );
    }
}

export default MainDestinationCards
