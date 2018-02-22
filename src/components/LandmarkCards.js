import React, { Component } from 'react'
import '../styles/LandmarkCard.css';
import LandmarkCard from "./LandmarkCard";
import HighlightedList from "./HighlightedList";

class LandmarkCards extends HighlightedList {

    retrieveElements() {
        // getAway format. We will implement a mapper to convert from the external format
        let landmarks = [{
                name: "Louvre Museum",
                destination: "Paris",
                photoUrls: ["https://www.star2.com/wp-content/uploads/2017/05/str2_relaxparisfirst_chester-770x470.jpg", ""],
                rating: 4.5,
                isHighlighted: true
            },
            {
                name: "Central park",
                destination: "New York",
                photoUrls: ["https://scontent-cdt1-1.cdninstagram.com/vp/05e44a40b7797756ca7a506e0fda67f5/5B1F4966/t51.2885-15/e35/26867611_735090883356045_7096349754786840576_n.jpg",
                    ""],
                rating: 4.2,
                isHighlighted: false
            },
            {
                name: "The Sun Voyager",
                destination: "Reykjavik",
                photoUrls: ["https://visitreykjavik.is/sites/default/files/styles/whattodo_photo_600x450/public/activities_sun_voyager.jpg?itok=QCGcVZJ_", ""],
                rating: 3.9,
                isHighlighted: true
            },
            {
                name: "Cristo Redentor",
                destination: "Rio de janeiro",
                photoUrls: ["http://travelhdwallpapers.com/wp-content/uploads/2014/01/Christ-Redeemer-1.jpg", ""],
                rating: 4.4,
                isHighlighted: true
            }];

        return landmarks;
    }

    /**
     * Renders a landmark card
     * @param {LandmarkCard} landmark - The landmark card to render
     * @param {Number} i - The index of the landmark card in the list
     */
    renderElement(landmark, i) {
        if(landmark) {
            return (<LandmarkCard landmark={landmark} key={i} />);
        }
    }

    render() {
        return (
            <div className = "landmark-card-container">
                {super.render()}
            </div>
        );
    }
}

export default LandmarkCards
