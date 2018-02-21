import React, { Component } from 'react'
import '../styles/DestinationCard.css';

class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        const photoUrls = destination.photoUrls;
        const destinationName = destination.name;
        const destinationCountry= destination.country;

        if(destination && destinationName && destinationCountry && photoUrls && photoUrls.length > 0) {
            return (
                <div className="destination-card">
                    <img className="destination-photo" src={photoUrls[0]} />
                    <div className="destination-name">{destinationName}</div>
                    <div className="destination-country">{destinationCountry}</div>
                </div>
            )
        } else {
            console.log("The destination object isn't correctly set");
        }
    }
}

export default DestinationCard