import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import gql from "graphql-tag";
import {Redirect} from 'react-router-dom'
import GetawayConstants from "../../utils/GetawayConstants";


const GQL_QUERY = gql`
query DestinationsQuery($query: String!) {
  jcr(workspace:LIVE) {
    nodesByQuery(query: $query) {
      nodes {
        name
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    const query = "select * from [gant:destination] where isdescendantnode('/sites/" + GetawayConstants.dxSiteKey + "/contents')";
    return {
        skip: false,
        variables: {
            query: query,
        }
    }
}

function mapResultsToProps(results) {
    if (results && results.destination && results.destination.jcr
        && results.destination.jcr.nodesByQuery && results.destination.jcr.nodesByQuery.nodes) {
        const randomDest = results.destination.jcr.nodesByQuery.nodes;
        const randomIdx = Math.floor(Math.random() * Math.floor(randomDest.length));
        return {randomDest: randomDest[randomIdx].name};
    }
    return null;
}

class RandomDestination extends Component {

    render() {
        const randomDest = this.props.randomDest;
        return (
            <div>
                {
                    randomDest ?
                        (<Redirect to={"/destination/"+this.props.randomDest}/>) :
                        ("Finding the best destination for you ...")
                }

                )
            </div>
        )
    }
}

export default graphql(GQL_QUERY, {
    name: 'destination',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(RandomDestination)