import React, { Component } from 'react';
import scriptLoader from "react-async-script-loader";
import GetawayConfigs from "../../utils/GetawayConfigs";
import PropTypes from 'prop-types';

/**
 * Components that helps for the transactions with the Google API
 */
class GooglePlacesApiProvider extends Component {

    static propTypes = {
        placesApi: PropTypes.object.isRequired
    }

    static childContextTypes = {
        placesApi: PropTypes.object.isRequired
    }

    getChildContext() {
        const {placesApi} = this.props;
        return {placesApi};
    }

    constructor(props) {
        super(props);
        this.state = {ready: false};
    }

    /**
     * Helps to figure out when the external Google API is actually loaded.
     * Method is called whenever the state of the props will change.
     * @param {Object} nextProps - Corresponds to the new state of the props
     */
    componentWillReceiveProps(nextProps) {
        // if the script is loaded but wasn't already loaded
        if(nextProps.isScriptLoaded && !this.props.isScriptLoaded) {
            if(nextProps.isScriptLoadSucceed) {
                this.setState({ready: true});
            }
        }
    }

    render() {
        if(this.state.ready) {
            //return Children.only(this.props.children);
            return (<div>{this.props.children}</div>);
        }

        return null;
    }
}

export default scriptLoader([
    GetawayConfigs.GOOGLE_API_URL()
])(GooglePlacesApiProvider)