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
                <body className="getawayDestination">
                    <Header/>
                    <Banner/>
                    {destinationName}
                    <Footer/>
                </body>
            )
        }
    }
}

export default DestinationPanel