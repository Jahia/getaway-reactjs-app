import React, { Component } from 'react'
import {Link} from 'react-router-dom'
/* import '../styles/LandmarkCard.css'; TODO review this */
import SimpleRating from "./SimpleRating";

class LandmarkCard extends Component {
    render() {
        const shouldHideName = this.props.shouldHideName;
        const landmark = this.props.landmark;
        const photoUrls = landmark.photoUrls;
        const name = landmark.name;
        const locationName = landmark.locationName;
        const rating = landmark.rating;

        if(landmark && name && locationName && photoUrls && photoUrls.length > 0) {
            return (
            <Link to={`/landmark/${landmark.externalId}`}>
                <div className = "landmark-card">
                    <img className = "landmark-photo" src = {photoUrls[0]}/>
                    <div className = "landmark-name">{name}</div>
                    {!shouldHideName && <div className = "landmark-destination">{locationName}</div>}
                    <SimpleRating value = {rating} />
                </div>
            </Link>
            )
        } else {
            console.log("The landmark object isn't correctly set");
        }
    }
}

export default LandmarkCard