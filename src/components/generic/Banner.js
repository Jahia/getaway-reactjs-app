import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/*import '../styles/Banner.css'; TODO review this */

class Banner extends Component {

    buildInlineStyle() {
        const headerPhoto = this.props.headerPhoto;
        if(headerPhoto) {
            return { backgroundImage: "url(" + headerPhoto+ ")" };
        }

        return null;
    }

    render() {
        const destination = this.props.destiName;
        const country = this.props.destiCountry;
        const inlineStyle = this.buildInlineStyle();

        if (destination && country) {
            return (
                <section style={inlineStyle} className = "topSectionDest">
                    <div className = "header-shadow-overlay"></div>
                    <h1>{destination}</h1>
                    <h3>{country}</h3>
                </section>
            );
        } else {
            return (
                <section style={inlineStyle} className = "topSection">
                    <div className = "header-shadow-overlay"></div>
                    <h1>Find your next vacation idea among these places handpicked just for you!</h1>
                    <div className = "cta-container">
                        <Link to = {`/random/destination`}>Take me somewhere!</Link>
                    </div>
                </section>
            );
        }
    }
}

export default Banner