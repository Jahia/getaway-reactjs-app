import React, {Component} from 'react'

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
            <div className="destination-card" onClick={() => this.props.changeDestinationCB(destination.id)}>
                <img className="destination-photo" src={photo}/>
                <div className="destination-name">{name}</div>
                <div className="destination-country">{country}</div>
            </div>
        )
    }
}

export default DestinationCard