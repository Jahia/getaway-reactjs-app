import React, { Component } from 'react'
import '../styles/DestinationCards.css';
import DestinationCard from "./DestinationCard";
import HighlightedList from "./HighlightedList";

class DestinationCards extends HighlightedList {

    retrieveElements() {
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
            }];

        return destinations;
    }

    /**
     * Renders a destination card
     * @param {DestinationCard} destination - The destination card to render
     * @param {Number} i - The index of the destination card in the list
     */
    renderElement(destination, i) {
        if(destination) {
            return (<DestinationCard destination={destination} key={i} />);
        }
    }

    render() {
        return (
            <div className = "destination-card-container">
                {super.render()}
            </div>
        );
    }
}

export default DestinationCards
