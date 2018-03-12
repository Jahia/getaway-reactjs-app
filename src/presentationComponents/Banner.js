import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Banner.css';

class Banner extends Component {
    render() {
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