import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "./generic/Header";
import Footer from "./generic/Footer";

class NotFoundPanel extends Component {

    render() {
        return (
            <section className="getawayMain">
                <Header/>
                <section className="error-container">
                    <h1>404</h1>
                    <h2>Ooops...</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/346954/404-getaway.svg" alt="error"/>
                    <div className="error-separator"></div>
                    <h3>Sorry, it seems that something went terribly wrong!</h3>
                    <Link to="/">Take me back home</Link>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default NotFoundPanel;