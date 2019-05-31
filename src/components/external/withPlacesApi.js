import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withPlacesApi = (ComponentToWrap) => {
    return class extends Component {
        // let’s define what’s needed from the `context`
        static contextTypes = {
            placesApi: PropTypes.object.isRequired,
        };
        render() {
            const {placesApi} = this.context;
            // what we do is basically rendering `ComponentToWrap`
            // with an added `withPlacesApi` prop, like a hook
            return (
                <ComponentToWrap {...this.props} placesApi={placesApi} />
            )
        }
    }
};
export default withPlacesApi