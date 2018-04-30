import React, { Component } from 'react'
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import styled from "styled-components";
import {LandmarkCardContainer} from "../shared/landmarks";
import GetawayConstants from "../../utils/GetawayConstants";
import {withPlacesApi} from "../external";

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
    let query = "SELECT * FROM [gant:destination] as destination WHERE isdescendantnode('/sites/"
        + GetawayConstants.dxSiteKey + "/contents') AND destination.landmarks is not null";

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

class LandmarkCards extends Component {

    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the first landmark will be rendered
     */
    renderLandmark(destination) {
        if(destination) {
            const landmarkPlaceIds = destination.landmarkPlaceIds;
            if(landmarkPlaceIds && landmarkPlaceIds.values && landmarkPlaceIds.values.length > 0) {
                // container as it will make some external calls
                const landmarkPlaceId = landmarkPlaceIds.values[0];
                return (<LandmarkCardContainer landmarkPlaceId={landmarkPlaceId} key={landmarkPlaceId} />);
            }
        }
    }

    render() {
        const destinations = this.props.elements;
        if(destinations) {
            return (
                <MainLandmarksWrapper>
                    <h2>Highlighted Landmarks</h2>
                    <div className="landmark-card-container">
                        { destinations.map(destination => (this.renderLandmark(destination)))}
                    </div>
                </MainLandmarksWrapper>
            );
        }

        return "Loading landmarks ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(withPlacesApi(LandmarkCards));


const MainLandmarksWrapper = styled.section`
    max-width: 1080px;
    margin: 0 auto;
    h2 {
        font-size: 18px;
        opacity: .67;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 8px;
        border-bottom: 2px dotted #ccc;
        @media screen and (max-width: 1080px) {
            margin: 16px 16px 8px 16px;
        }
    }
`;
