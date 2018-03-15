import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/*import '../styles/Banner.css'; TODO review this */

class Banner extends Component {
    render() {
        const destination = this.props.destinationName;
        const country = this.props.destinationCountry;
        if (destination && country)
            return (
            <section className = "topSectionDest">
                <div className = "header-shadow-overlay"></div>
                <h1>{destination}</h1>
                <h3>{country}</h3>
            </section>
        );
        else
            return (
                <section className = "topSection">
                    <div className = "header-shadow-overlay"></div>
                    <h1>Find your next vacation idea among these places handpicked just for you!</h1>
                    <div className = "cta-container">
                        <Link to = "/">Take me somewhere!</Link>
                    </div>
                </section>
            );
    }
}

export default Banner