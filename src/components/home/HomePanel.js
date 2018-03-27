import React, {Component} from 'react'
/* import '../../styles/PageComponents/HomePanel.css'; TODO review this */
/* import '../../styles/style-home.css'; */
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import MainDestinationCards from "./destinations/MainDestinationCards";
import HomeLandmarkCards from "./HomeLandmarkCards";
import GooglePlacesApiProvider from "../external/GooglePlacesApiProvider";
import Footer from "../generic/Footer";
import GoogleApi from "../external/GooglePlacesApi";

const placesApi = new GoogleApi();

class HomePanel extends Component {
    render() {
        return (
                <section className="getawayMain">
                    <Header/>
                    <Banner/>
                    <MainDestinationCards/>
                    { /* fromHighlightedDesti=false as landmarks to display
                     should not necessarily be landmarks taken from the displayed highlighted destinations */
                    }
                    <GooglePlacesApiProvider placesApi={placesApi}>
                        <HomeLandmarkCards max = "4" fromHighlightedDesti = {false} />
                    </GooglePlacesApiProvider>
                    <Footer/>
                </section>
        )
    }
}

export default HomePanel