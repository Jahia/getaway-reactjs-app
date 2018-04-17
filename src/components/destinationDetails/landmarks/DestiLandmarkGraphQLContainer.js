import React, { Component } from 'react'
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import DestiLandmarkRESTContainer from "../../destinationDetails/landmarks/DestiLandmarkRESTContainer";

const GQL_QUERY = gql`
query LandmarkQuery($query: String!){
  jcr(workspace:LIVE) {
    nodesByQuery(query: $query) {
      nodes {
        landmarkPlaceIds: property(name: "landmarks") {
          values
        }
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    const query = "SELECT * FROM [gant:destination] WHERE [jcr:uuid]='" + props.destiUUID + "'";

    // no limit given as only one destination will be retrieved
    let options = {
        skip: false,
        variables: {
            query: query,
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

class DestiLandmarkGraphQLContainer extends Component {

    render() {
        const placeIds = this.props.elements;
        // if the graphQL hasn't been done yet
        if(placeIds) {
            return (<DestiLandmarkRESTContainer max="5" placeIds={placeIds} destiGeoCoords={this.props.destiGeoCoords}/>);
        } else {
            return "Loading landmarks ...";
        }
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestiLandmarkGraphQLContainer)
