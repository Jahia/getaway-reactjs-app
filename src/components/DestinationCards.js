import React, { Component } from 'react'
import '../styles/DestinationCards.css';
import DestinationCard from "./DestinationCard";

class DestinationCards extends Component {

    /**
     * Renders a destination card
     * @param {DestinationCard} destination - The destination card to render
     * @param {Number} i - The index of the destination card in the list
     */
    renderDestinationCard(destination, i) {
        if(destination) {
            return (<DestinationCard destination={destination} key={i} />);
        }
    }

    /**
     * Tells whether or not the destination card should be rendered
     * @param {boolean} onlyHighlighted - true of only the highlighted cards should be rendered
     * @param {DestinationCard} destination - The destination card to check
     */
    shouldRenderDestinationCard(onlyHighlighted, destination) {
        let shouldRenderDestiCard = false;
        if(onlyHighlighted && onlyHighlighted === true) {
            if(destination.isHighlighted) {
                shouldRenderDestiCard = true;
            }
        } else {
            shouldRenderDestiCard = true;
        }

        return shouldRenderDestiCard;
    }

    render() {
        // getAway format. We will implement a mapper to convert from the external format
        let destinations = [{
            name: "New York",
            country: "United States",
            photoUrls: ["http://womenonaroll.com/wp-content/uploads/2015/03/Statue-of-Liberty.jpg", ""],
            isHighlighted: true
        },
        {
            name: "Rio de Janeiro",
            country: "Brazil",
            photoUrls: ["https://fthmb.tqn.com/j1tWM38cCKpO5EFCyiJ2Irvfn4M=/960x0/filters:no_upscale()/beaches-in-rio-de-janeiro--455181473-5978b0d7aad52b0011a9a69f.jpg",
                ""],
            isHighlighted: false
        },
        {
            name: "Tokyo",
            country: "Japan",
            photoUrls: ["https://www.1dasia.com/wp-content/uploads/2017/11/f0pwad_wide-mr.jpg", ""],
            isHighlighted: true
        }]

        if(destinations) {
            // if the list of destinations to rendered is limited
            let maxDestisToRender = this.props.max && this.props.max < destinations.length ?
                this.props.max : destinations.length;

            let onlyHighlighted = this.props.onlyHighlighted;
            let renderedDestiCards = [];
            for(let i = 0; i < maxDestisToRender; i++) {
                let destination = destinations[i];
                let shouldRenderDestiCard = this.shouldRenderDestinationCard(onlyHighlighted, destination);
                if(shouldRenderDestiCard) {
                    let renderedDesti = this.renderDestinationCard(destination, i);
                    renderedDestiCards.push(renderedDesti);
                }
            }

            return (
                <div className="destination-card-container">
                    {renderedDestiCards}
                </div>
            );
        }
    }
}

export default DestinationCards
