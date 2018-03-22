import React, { Component } from 'react'
import HorizontalList from "../generic/HorizontalList";
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import LandMarkCardContainer from "../landmarks/LandmarkCardContainer";

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
    var query = "SELECT * FROM [gant:destination] WHERE [jcr:uuid]='" + props.destiUUID + "'";

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

/**
 * Returns the list of landmarks' place ids retrieved from the selected destination
 * @param {Object} results - The result of the GraphQL RQ
 * @return {Object} - the list of landmarks' place ids retrieved from the selected destination
 */
function mapResultsToProps(results) {
    if (results && results.destinations && results.destinations.jcr && results.destinations.jcr.nodesByQuery) {
        const destiNodes = results.destinations.jcr.nodesByQuery.nodes;
        if(destiNodes && destiNodes.length > 0 && destiNodes[0].landmarkPlaceIds) {
            // at this stage, due to the jcr request, only one destination is expected
            return {elements: destiNodes[0].landmarkPlaceIds.values}
        }
    }
    return null;
}

class DestiLandmarkCards extends HorizontalList {

    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the first landmark will be rendered
     * @param {Number} i - The index of the landmark card in the list
     */
    renderElement(landmarkPlaceId, i) {
        if(landmarkPlaceId) {
            // container as it will make some external calls
            return (<LandMarkCardContainer landmarkPlaceId={landmarkPlaceId} key={landmarkPlaceId} />);
        }
    }

    render() {
        if(this.props.elements) {
            return (
                <section class="destinationLandmarks">
                    <h2>Landmarks</h2>
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
})(DestiLandmarkCards)
