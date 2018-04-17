import React, { Component } from 'react'
/* import '../styles/DestinationCards.css'; TODO review this */
import DestinationCard from "./DestinationCard";
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import GetawayConstants from "../../../utils/GetawayConstants";

const GQL_QUERY = gql`
query DestinationQuery($query: String!, $limit: Int, $language: String) {
  jcr(workspace:LIVE) {
    nodesByQuery(query: $query, limit: $limit) {
      nodes {
        id:uuid
        name:displayName(language: $language)
        systemName: name
        country
        photo: property(name: "photos") {
          files:refNodes {
            path
          }
        }
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    let query = "select * from [gant:destination] where isdescendantnode('/sites/" + GetawayConstants.dxSiteKey + "/contents')";
    if (props.onlyHighlighted) query += " and [highlight] = 'true'";
    let options = {
        skip: false,
        variables: {
            query: query,
            limit: props.max,
            language: "en"
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
        const destinations = this.props.elements;
        if(destinations) {
            return (
                <div className="destination-card-container">
                    { destinations.map(destination => (this.renderDestination(destination)))}
                </div>
            );
        }

        return "Loading destinations ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationCards)
