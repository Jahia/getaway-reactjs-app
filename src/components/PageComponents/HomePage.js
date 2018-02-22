import React, { Component } from 'react'
import '../../styles/PageComponents/HomePage.css';
import Banner from "../Banner";
import Header from "../Header";
import MainDestinationCards from "../MainDestinationCards";
import MainLandmarkCards from "../MainLandmarkCards";
import Footer from "../Footer";

class HomePage extends Component {
    render() {
        return (
            <body className="getawayMain">
                <Header/>
                <Banner/>
                <MainDestinationCards/>
                <MainLandmarkCards/>
                <Footer/>
            </body>
        )
    }
}

export default HomePage