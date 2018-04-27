import React, {Component} from 'react'
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Redirect} from 'react-router';
import DestinationPanelView from "./DestinationPanelView"
import {ContainerResultHandler} from "../shared/generic";
import GetawayConstants from "../../utils/GetawayConstants";


const GQL_QUERY = gql`
query DestinationDetailsQuery($query: String!, $limit: Int, $language: String) {
    jcr(workspace:LIVE) {
        nodesByQuery(query: $query, limit: $limit) {
            nodes {
              name:displayName(language: $language)
              systemName:name
              country
              area:property(name: "area") {value}
              elevation:property(name: "elevation") {value}
              populationCount:property(name: "populationCount") {value}
              populationDate:property(name: "populationDate") {value}
              headline:property(name: "headline", language: $language) {value}           
              outline:property(name: "outline", language: $language) {value}
              latitude:property(name: "j:latitude") {value}
              longitude:property(name: "j:longitude") {value}
              landmarkPlaceIds: property(name: "landmarks") {values}
              headerPhoto: property(name: "headerPhoto") {
                  refNode {
                    url:nodeUrl
                  }
              }
              photos: property(name: "photos") {
                refNodes {
                    url:nodeUrl
                }
              }
            }
        }
    }
}`;

// TODO: should test that the name matched from the URL is valid, and prevent executing the Query if not
function mapPropsToOptions(props) {
    const destiName = props.match.params.destinationName;
    let options = null;
    if(destiName) {
        // search the destination based on desti' system name
        let query = "select * from [gant:destination] " +
            "where isdescendantnode('/sites/" + GetawayConstants.dxSiteKey + "/contents') and [j:nodename]='" + destiName + "'";

        options = {
            skip: false,
            variables: {
                query: query,
                limit: 1,
                language: "en"
            }
        };
    }

    console.log("Options: " + JSON.stringify(options));
    return options;
}

function mapDataToDestination(data) {
    console.log(data);
    if (data && data && data.jcr && data.jcr.nodesByQuery.nodes && data.jcr.nodesByQuery.nodes.length > 0) {
        return data.jcr.nodesByQuery.nodes[0];
    }

    return null;
}

class DestinationPanelContainer extends Component {
    renderDestination(destination) {
        return <DestinationPanelView destination={destination}/>
    }
    render() {
        const options = mapPropsToOptions(this.props);
        if(options == null) return <Redirect to={GetawayConstants.ERROR_PAGE_URL}/>;

        return (
            <Query query={GQL_QUERY} variables={options.variables} skip={options.skip}>
                {({loading, error, data}) => {
                    if (loading) return "Loading destination ...";

                    const destination = mapDataToDestination(data);
                    return <ContainerResultHandler results={destination}
                                                   error={error}
                                                   render={this.renderDestination}
                                                   redirectOnEmptyOrError={true}
                                                   apiName={"GraphQL"}
                    />
                }}
            </Query>
        );
    }
}

export default (DestinationPanelContainer)