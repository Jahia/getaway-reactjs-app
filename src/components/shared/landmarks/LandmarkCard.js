import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SimpleRating from "./SimpleRating";
import {LandmarkCardWrapper, LandmarkLocationWrapper, LandmarkNameWrapper, LandmarkPhoto} from "./style";


class LandmarkCard extends Component {
    render() {
        const isHighlighted = this.props.isHighlighted;
        const landmark = this.props.landmark;
        const photoUrls = landmark.photoUrls;
        const name = landmark.name;
        const locationName = landmark.locationName;
        const rating = landmark.rating;

        if(landmark && name && locationName && photoUrls && photoUrls.length > 0) {
            return (
            <Link to={`/landmark/${landmark.externalId}`}>
                <LandmarkCardWrapper isHighlighted={isHighlighted}>
                    <LandmarkPhoto src = {photoUrls[0]} isHighlighted={isHighlighted}/>
                    <LandmarkNameWrapper>{name}</LandmarkNameWrapper>
                    {isHighlighted && <LandmarkLocationWrapper>{locationName}</LandmarkLocationWrapper>}
                    <SimpleRating value = {rating} />
                </LandmarkCardWrapper>
            </Link>
            )
        } else {
            console.log("The landmark object isn't correctly set");
        }
    }
}

export default LandmarkCard