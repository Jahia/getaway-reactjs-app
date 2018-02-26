import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/DestinationCard.css';

class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        const photoUrls = destination.photoUrls;
        const name = destination.name;
        const country= destination.country;

        // TODO review this
        //if(destination && name && country && photoUrls && photoUrls.length > 0) {
        if(destination && name) {
            return (
                <div className = "destination-card">
                    <div className = "destination-name">{name}</div>
                    <Link to = {`/destination/${destination.name}`}>Destination Link test</Link>
                </div>
            )
            /*
            return (
                <div className = "destination-card">
                    <img className = "destination-photo" src = {photoUrls[0]} />
                    <div className = "destination-name">{name}</div>
                    <div className = "destination-country">{country}</div>
                    <Link to = {`/destination/${destination.name}`}>Destination Link test</Link>
                </div>
            )
            */
        } else {
            console.log("The destination object isn't correctly set");
        }
    }
}

export default DestinationCard