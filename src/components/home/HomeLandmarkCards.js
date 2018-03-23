import React, { Component } from 'react'
/* import '../styles/LandmarkCard.css'; TODO review this */
import HorizontalList from "../generic/HorizontalList";
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import LandMarkCardContainer from "../landmarks/LandmarkCardContainer";

const GQL_QUERY = gql`
query LandmarkQuery($query: String!, $limit: Int){
  jcr(workspace:LIVE) {
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
    var query = "SELECT * FROM [gant:destination] as destination WHERE isdescendantnode('/sites/digitall/contents') AND " +
        "destination.landmarks is not null";

    // the flag highlighted relates to the destinations
    if (props.fromHighlightedDesti) query += " and [highlight] = 'true'";
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
    if (results && results.destinations && results.destinations.jcr
        && results.destinations.jcr.nodesByQuery && results.destinations.jcr.nodesByQuery.nodes)
        return {elements: results.destinations.jcr.nodesByQuery.nodes};
    return null;
}

class LandmarkCards extends HorizontalList {

    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the first landmark will be rendered
     * @param {Number} i - The index of the landmark card in the list
     */
    renderElement(destination, i) {
        if(destination) {
            const landmarkPlaceIds = destination.landmarkPlaceIds;
            if(landmarkPlaceIds && landmarkPlaceIds.values && landmarkPlaceIds.values.length > 0) {
                // container as it will make some external calls
                const landmarkPlaceId = landmarkPlaceIds.values[0];
                return (<LandMarkCardContainer landmarkPlaceId={landmarkPlaceId} key={landmarkPlaceId} />);
            }
        }
    }

    render() {
        if(this.props.elements) {
            return (
                <section className="landmarksMain">
                    <h2>Highlighted Landmarks</h2>
                    <div className="landmark-card-container">
                        {super.render()}
                    </div>
                </section>
            );
        }

        return "Loading landmarks ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(LandmarkCards)
