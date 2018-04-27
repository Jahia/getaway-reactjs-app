import React, { Component } from 'react'
import { Redirect } from 'react-router';
import GetawayConstants from "../../../utils/GetawayConstants";

/**
 * Helps rendering the results retrieved from external APIs thanks to a container.
 * Error handling is one of its duty
 */
class ContainerResultHandler extends Component {

    isResultInError(error, apiResults) {
        if(error || !apiResults) {
            if(error) {
                const apiName = this.props.apiName;
                console.info("Error while calling " + apiName + ": "+ error.message);
            }

            return true;
        }

        return false;
    }

    renderOnError(redirectOnEmptyOrError) {
        if(redirectOnEmptyOrError) {
            return <Redirect to={GetawayConstants.ERROR_PAGE_URL}/>
        }

        return null;
    }

    renderResults(results) {
        const renderFunc = this.props.render;
        if(renderFunc) {
            return renderFunc(results);
        } else {
            console.log("A render method should be mentioned");
            return null;
        }
    }

    render() {
        const error = this.props.error;
        const redirectOnEmptyOrError = this.props.redirectOnEmptyOrError;
        const results = this.props.results;

        // no need to log error as it is already logged at this stage
        if(this.isResultInError(error, results)) {
            return this.renderOnError(redirectOnEmptyOrError)
        } else {
            return this.renderResults(results)
        }
    }
}

export default (ContainerResultHandler)