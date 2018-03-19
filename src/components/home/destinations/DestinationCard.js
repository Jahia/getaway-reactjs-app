import React, {Component} from 'react'
import {Link} from 'react-router-dom'

/* import '../styles/DestinationCard.css';  TODO review this */

class DestinationCard extends Component {
    render() {
        const destination = this.props.destination;
        if (!destination) {
            console.log("The destination object isn't correctly set");
            return
        }
        const photoNode = destination.photo.files[0];
        const name = destination.name;
        const country = destination.country;

        // TODO review this (hardcoded DX hostname)
        const photo = photoNode ?
            "http://localhost:8080/files/live" + photoNode.path
            : null;
        return (
            <Link to={`/destination/${destination.id}`}>
                <div className="destination-card">
                    <img className="destination-photo" src={photo}/>
                    <div className="destination-name">{name}</div>
                    <div className="destination-country">{country}</div>
                </div>
            </Link>
        )
    }
}

export default DestinationCard