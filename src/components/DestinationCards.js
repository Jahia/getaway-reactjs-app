import React from 'react'
import '../styles/DestinationCards.css';
import DestinationCard from "./DestinationCard";
import HighlightedList from "./HighlightedList";
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const GQL_QUERY = gql`
query DestinationQuery($query: String!, $limit: Int, $language: String){
  jcr {
    nodesByQuery(query: $query, limit: $limit) {
      nodes {
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
}       
    `;

function mapPropsToOptions(props) {
    let options = {
        skip: false,
        variables: {
            query: "select * from [gant:destination] where isdescendantnode('/sites/digitall/contents') and [highlight] = '" + props.onlyHighlighted + "'",
            limit: props.max,
            language: "en"
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

function mapResultsToProps(results) {
    if (results && results.destinations && results.destinations.jcr && results.destinations.jcr.nodesByQuery && results.destinations.jcr.nodesByQuery.nodes)
        return {elements: results.destinations.jcr.nodesByQuery.nodes};
    return null;
}

class DestinationCards extends HighlightedList {

    /**
     * Renders a destination card
     * @param {DestinationCard} destination - The destination card to render
     * @param {Number} i - The index of the destination card in the list
     */
    renderElement(destination, i) {
        if (destination) {
            return (<DestinationCard destination={destination} key={i}/>);
        }
    }

    render() {
        if (this.props.elements)
            return (
                <div className="destination-card-container">
                    {super.render()}
                </div>
            );
        return "Loading destinations ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationCards)
