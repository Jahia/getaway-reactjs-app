import React, {Component} from 'react'
/* import '../../styles/PageComponents/HomePanel.css'; TODO review this */
/* import '../../styles/style-home.css'; */
import Banner from "../Banner";
import Header from "../Header";
import MainDestinationCards from "../MainDestinationCards";
import MainLandmarkCards from "../MainLandmarkCards";
import Footer from "../Footer";

class HomePanel extends Component {
    render() {
        return (
            <section className="getawayMain">
                <Header/>
                <Banner/>
                <MainDestinationCards changeDestinationCB={this.props.changeDestinationCB}/>
                <MainLandmarkCards/>
                <Footer/>
            </section>
        )
    }
}

export default HomePanel