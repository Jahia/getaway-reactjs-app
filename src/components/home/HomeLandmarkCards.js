import React, { Component } from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import styled from "styled-components";
import {LandmarkCardContainer} from "../shared/landmarks";
import GetawayConfigs from "../../utils/GetawayConfigs";
import {withPlacesApi} from "../external";

// const GQL_QUERY = gql`
// query LandmarkQuery($query: String!, $limit: Int){
//   jcr(workspace:LIVE) {
//     nodesByQuery(query: $query, limit: $limit) {
//       nodes {
//         landmarkPlaceIds: property(name: "landmarks") {
//           values
//         }
//       }
//     }
//   }
// }`;

const GQL_QUERY = gql`
    query LandmarkQuery {
        allDestination {
            landmarks
        }
    }`;

function mapPropsToOptions(props) {
    return {
        skip: false,
        variables: {}
    };
}

function mapResultsToProps(results) {
    if (results && results.destinations && results.destinations.allDestination && results.destinations.allDestination.length > 0) {
        let destinations = results.destinations.allDestination.filter(destination => destination.landmarks && destination.landmarks.length > 0);
        return {elements: destinations};
    }
    return null;
}

class LandmarkCards extends Component {

    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the first landmark will be rendered
     */
    renderLandmark(landmarks) {
        return (<LandmarkCardContainer landmarkPlaceId={landmarks[0]} key={landmarks[0]} />);
    }

    render() {
        const destinations = this.props.elements;
        if(destinations) {
            return (
                <MainLandmarksWrapper>
                    <h2>Highlighted Landmarks</h2>
                    <div className="landmark-card-container">
                        { destinations.map(destination => (this.renderLandmark(destination.landmarks)))}
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
