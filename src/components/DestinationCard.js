import React, { Component } from 'react'
import '../styles/DestinationCard.css';

class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        const photoUrls = destination.photoUrls;
        const name = destination.name;
        const country= destination.country;

        if(destination && name && country && photoUrls && photoUrls.length > 0) {
            return (
                <div className="destination-card">
                    <img className="destination-photo" src={photoUrls[0]} />
                    <div className="destination-name">{name}</div>
                    <div className="destination-country">{country}</div>
                </div>
            )
        } else {
            console.log("The destination object isn't correctly set");
        }
    }
}

export default DestinationCard