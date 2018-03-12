import React, { Component } from 'react'
import '../../styles/PageComponents/DestinationPanel.css';
import Banner from "../Banner";
import Header from "../Header";
import Footer from "../Footer";

class DestinationPanel extends Component {
    render() {
        const destinationName = this.props.match.params.destinationName;
        if(destinationName) {
            return (
                <section className="getawayDestination">
                    <Header/>
                    <Banner/>
                    {destinationName}
                    <Footer/>
                </section>
            )
        }
    }
}

export default DestinationPanel