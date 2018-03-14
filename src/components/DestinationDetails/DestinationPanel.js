import React, {Component} from 'react'
/* import '../../styles/PageComponents/DestinationPanel.css'; TODO review this */
import Banner from "../../presentationComponents/Banner";
import Header from "../../presentationComponents/Header";
import Footer from "../../presentationComponents/Footer";
import DestinationDetails from "./DestinationDetails";
import {graphql} from "react-apollo";
import gql from "graphql-tag";

const GQL_QUERY = gql`
query DestinationDetailsQuery($uuid: String!, $language: String) {
    jcr {
        nodeById(uuid: $uuid) {
          name:displayName(language: $language)
          country
        }
    }
}`;

// TODO: should test that the uuid matched from the URL is valid, and prevent executing the Query if not
function mapPropsToOptions(props) {
    let options = {
        skip: false,
        variables: {
            uuid: props.match.params.destinationName,
            language: "en"
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

function mapResultsToProps(results) {
    console.log(results);
    if (results && results.destination && results.destination.jcr
        && results.destination.jcr.nodeById)
        return {elements: results.destination.jcr.nodeById};
    return null;
}

class DestinationPanel extends Component {
    render() {
        if (!this.props.elements) return "Loading destination ...";
        const destinationName = this.props.elements.name;
        if (destinationName) {
            return (
                <section className="getawayMain">
                    <Header/>
                    <Banner destinationName={destinationName}
                            destinationCountry={this.props.elements.country}/>
                    <DestinationDetails/>
                    <Footer/>
                </section>
            )
        }
    }
}

export default graphql(GQL_QUERY, {
    name: 'destination',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationPanel)