import React, {Component} from 'react';
import DestinationCard from './DestinationCard';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

// const GQL_QUERY = gql`
// query DestinationQuery($query: String!, $limit: Int, $language: String) {
//   jcr(workspace:LIVE) {
//     nodesByQuery(query: $query, limit: $limit) {
//       nodes {
//         id:uuid
//         name:displayName(language: $language)
//         systemName: name
//         country
//         headerPhoto: property(name: "headerPhoto") {
//           refNode {
//             url:nodeUrl
//           }
//         }
//         photos: property(name: "photos") {
//           refNodes {
//             url:nodeUrl
//           }
//         }
//       }
//     }
//   }
// }`;

const GQL_QUERY = gql`
    query DestinationQuery($language: String) {
        allDestination(language: $language) {
            id:uuid
            systemName
            name
            country
            highlight
            headerPhoto {
                path
                url
                cloudinary {
                 cloudspace
                 path
                }
            }
            photos {
                path
                url
                cloudinary {
                 cloudspace
                 path
                }
            }
        }
    }`;

function mapPropsToOptions(props) {
    let options = {
        skip: false,
        variables: {
            language: 'en'
        }
    };
    return options;
}

function mapResultsToProps(results) {
    if (results && results.destinations && results.destinations.allDestination)
        return {elements: results.destinations.allDestination};
    return null;
}

class DestinationCards extends Component {

    /*
     * Renders a destination card
     * @param {Object} destination - The destination object to render
     */
    renderDestination(destination) {
        if (destination) {
            return (<DestinationCard destination={destination} key={destination.id}/>);
        }
    }

    render() {
        var destinations;
        if (this.props.elements && this.props.onlyHighlighted) {
            destinations = this.props.elements.filter(destination => (destination.highlight));
        } else {
            destinations = this.props.elements;
        }
        if (destinations) {
            return (
                <div className="destination-card-container">
                    {destinations.map(destination => (this.renderDestination(destination)))}
                </div>
            );
        }

        return 'Loading destinations ...';
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationCards);
