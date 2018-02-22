import React, { Component } from 'react'
import '../styles/LandmarkCard.css';
import SimpleRating from "./SimpleRating";

class LandmarkCard extends Component {
    render() {
        const landmark = this.props.landmark;
        const photoUrls = landmark.photoUrls;
        const name = landmark.name;
        const destination = landmark.destination;
        const rating = landmark.rating;

        if(landmark && name && destination && photoUrls && photoUrls.length > 0) {
            return (
                <div className="landmark-card">
                    <img className="landmark-photo" src={photoUrls[0]}/>
                    <div className="landmark-name">{name}</div>
                    <div className="landmark-destination">{destination}</div>
                    <SimpleRating value = {rating} />
                </div>
            )
        } else {
            console.log("The landmark object isn't correctly set");
        }
    }
}

export default LandmarkCard