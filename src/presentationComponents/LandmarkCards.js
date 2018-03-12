import React, { Component } from 'react'
import '../styles/LandmarkCard.css';
import LandmarkCard from "./LandmarkCard";
import HighlightedList from "./HighlightedList";
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import LandMarkCardContainer from "../containers/LandmarkCardContainer";

const GQL_QUERY = gql`
query LandmarkQuery($query: String!, $limit: Int){
  jcr {
    nodesByQuery(query: $query, limit: $limit) {
      nodes {
        landmarkPlaceIds: property(name: "landmarks") {
          values
        }
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    var query = "SELECT * FROM [gant:destination] as destination WHERE destination.landmarks is not null";

    if (props.onlyHighlighted) query += " and [highlight] = 'true'";
    let options = {
        skip: false,
        variables: {
            query: query,
            limit: props.max,
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

function mapResultsToProps(results) {
    if (results && results.landmarks && results.landmarks.jcr
        && results.landmarks.jcr.nodesByQuery && results.landmarks.jcr.nodesByQuery.nodes)
        return {elements: results.landmarks.jcr.nodesByQuery.nodes};
    return null;
}

class LandmarkCards extends HighlightedList {



    /*
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
    */


    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the landmark to render will be taken
     * @param {Number} i - The index of the landmark card in the list
     */
    renderElement(destination, i) {
        if(destination) {
            const landmarkPlaceIds = destination.landmarkPlaceIds;
            if(landmarkPlaceIds && landmarkPlaceIds.values && landmarkPlaceIds.values.length > 0) {
                // container as it will make some external calls
                const landmarkPlaceId = landmarkPlaceIds.values[0];
                return (<LandMarkCardContainer landmarkPlaceId = {landmarkPlaceId} key = {landmarkPlaceId} />);
            }
        }
    }

    render() {
        if(this.props.elements) {
            return (
                <div className = "landmark-card-container">
                    {super.render()}
                </div>
            );
        }

        return "Loading landmarks ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'landmarks',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(LandmarkCards)
