import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import styled from 'styled-components';
import {LandmarkCardContainer} from '../shared/landmarks';
import {withPlacesApi} from '../external';

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
        let landmarks = [];
        results.destinations.allDestination.filter(destination => destination.landmarks && destination.landmarks.length > 0).map(destination => (landmarks.push(destination.landmarks)));
        return {elements: shuffle(landmarks.flat(1))};
    }
    return null;
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String} The shuffled array
 */
function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class LandmarkCards extends Component {

    /**
     * Renders a landmark card
     * @param {Object} destination - The destination object from which the first landmark will be rendered
     */
    renderLandmark(landmark) {
        return (<LandmarkCardContainer landmarkPlaceId={landmark} key={landmark}/>);
    }

    render() {
        const landmarks = this.props.elements;
        if (landmarks) {
            return (
                <MainLandmarksWrapper>
                    <h2>Highlighted Landmarks</h2>
                    <div className="landmark-card-container">
                        {landmarks.slice(0, this.props.max).map(landmark => (this.renderLandmark(landmark)))}
                    </div>
                </MainLandmarksWrapper>
            );
        }

        return 'Loading landmarks ...';
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
