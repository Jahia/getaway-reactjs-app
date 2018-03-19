import React, {Component} from 'react'
/* import '../../styles/PageComponents/HomePanel.css'; TODO review this */
/* import '../../styles/style-home.css'; */
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import MainDestinationCards from "./destinations/MainDestinationCards";
import MainLandmarkCards from "./landmarks/MainLandmarkCards";
import Footer from "../generic/Footer";

class HomePanel extends Component {
    render() {
        return (
            <section className="getawayMain">
                <Header changeDestinationCB={this.props.changeDestinationCB}/>
                <Banner/>
                <MainDestinationCards/>
                <MainLandmarkCards/>
                <Footer/>
            </section>
        )
    }
}

export default HomePanel