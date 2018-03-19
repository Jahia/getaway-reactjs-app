import React, { Component } from 'react'
/* import '../styles/LandmarkCard.css'; TODO review this */
import SimpleRating from "./SimpleRating";

class LandmarkCard extends Component {
    render() {
        const landmark = this.props.landmark;
        const photoUrls = landmark.photoUrls;
        const name = landmark.name;
        const locationName = landmark.locationName;
        const rating = landmark.rating;

        if(landmark && name && locationName && photoUrls && photoUrls.length > 0) {
            return (
                <div className = "landmark-card">
                    <img className = "landmark-photo" src = {photoUrls[0]}/>
                    <div className = "landmark-name">{name}</div>
                    <div className = "landmark-destination">{locationName}</div>
                    <SimpleRating value = {rating} />
                </div>
            )
        } else {
            console.log("The landmark object isn't correctly set");
        }
    }
}

export default LandmarkCard