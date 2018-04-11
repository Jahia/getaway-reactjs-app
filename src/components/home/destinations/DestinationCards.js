import React, { Component } from 'react'
/* import '../styles/DestinationCards.css'; TODO review this */
import DestinationCard from "./DestinationCard";
import HorizontalList from "../../generic/HorizontalList";
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const GQL_QUERY = gql`
query DestinationQuery($query: String!, $limit: Int, $language: String) {
  jcr(workspace:LIVE) {
    nodesByQuery(query: $query, limit: $limit) {
      nodes {
        id:uuid
        name:displayName(language: $language)
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
    let query = "select * from [gant:destination] where isdescendantnode('/sites/digitall/contents')";
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
     * @param {Number} i - The index of the destination card in the list
     */
    renderDestination(destination, i) {
        if (destination) {
            return (<DestinationCard destination={destination} key={i}/>);
        }
    }

    render() {
        const elements = this.props.elements;
        if(elements) {
            return (
                <div className="destination-card-container">
                    <HorizontalList elements={elements} renderElement={this.renderDestination}/>
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
