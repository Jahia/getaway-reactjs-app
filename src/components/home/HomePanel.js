import React, {Component} from 'react'
/* import '../../styles/PageComponents/HomePanel.css'; TODO review this */
/* import '../../styles/style-home.css'; */
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import MainDestinationCards from "./destinations/MainDestinationCards";
import MainLandmarkCards from "./landmarks/MainLandmarkCards";
import Footer from "../generic/Footer";
import gql from 'graphql-tag'
import {graphql} from "react-apollo/index";

const GQL_QUERY = gql`
query DestinationsQuery($query: String!) {
  jcr {
    destinations:nodesByQuery(query: $query) {
      nodes {
        id:uuid
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    const query = "select * from [gant:destination] where isdescendantnode('/sites/digitall/contents') order by [destinationname] asc";
    let options = {
        skip: false,
        variables: {
            query: query
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

function mapResultsToProps(results) {
    if (results && results.randomDest && results.randomDest.jcr
        && results.randomDest.jcr.destinations && results.randomDest.jcr.destinations.nodes) {
        const randomDest = results.randomDest.jcr.destinations.nodes;
        console.log("####", randomDest);
        const randomIdx = Math.floor(Math.random() * Math.floor(randomDest.length));
        return {randomDest : randomDest[randomIdx].id};
    }
    return null;
}

class HomePanel extends Component {
    render() {
        return (
            <section className="getawayMain">
                <Header/>
                <Banner randomDest={this.props.randomDest}/>
                <MainDestinationCards/>
                <MainLandmarkCards/>
                <Footer/>
            </section>
        )
    }
}

export default graphql(GQL_QUERY, {
    name: 'randomDest',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(HomePanel)