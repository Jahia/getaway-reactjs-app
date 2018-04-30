import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "./generic/Header";
import Footer from "./generic/Footer";
import {ErrorSeparatorWrapper, ErrorWrapper} from "./style";
import errorPhoto from "./../../images/404-getaway.svg"
import {MainPanel} from "../style"


class NotFoundPanel extends Component {

    render() {
        return (
            <MainPanel>
                <Header/>
                <ErrorWrapper>
                    <h1>404</h1>
                    <h2>Ooops...</h2>
                    <img src={errorPhoto} alt="error"/>
                    <ErrorSeparatorWrapper/>
                    <h3>Sorry, it seems that something went terribly wrong!</h3>
                    <Link to="/">Take me back home</Link>
                </ErrorWrapper>
                <Footer/>
            </MainPanel>
        );
    }
}

export default NotFoundPanel;