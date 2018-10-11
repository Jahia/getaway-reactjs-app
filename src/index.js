import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import GetawayConstants from './utils/GetawayConstants';
import GetawayConfigs from "./utils/GetawayConfigs";
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import GoogleApi from "./components/external/GooglePlacesApi";
import GooglePlacesApiProvider from "./components/external/GooglePlacesApiProvider";
import unomiTracker from 'unomi-analytics';

const httpLink = new HttpLink({
    uri: GetawayConstants.dxHost + '/modules/graphql',
    headers: {
        'Authorization': `Bearer ${GetawayConstants.dxToken}`
    }
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const placesApi = new GoogleApi();

unomiTracker.initialize({
    'Apache Unomi': {
        scope: GetawayConfigs.dxSiteKey,
        url: GetawayConfigs.unomiHost
    }
});

unomiTracker.ready(function() {
    console.log("Unomi context loaded - profile id : "+window.cxs.profileId + ", sessionId="+window.cxs.sessionId);
});

const onRouteChange = (location)=> {
    // Generic handler for route change, exclude destination which has dedicated event handling - otherwise directly send a page() event
    if (!location.pathname.startsWith("/destination")) {
        unomiTracker.page()
    }
};

ReactDOM.render(
    <BrowserRouter ref={(router) => {onRouteChange(router.history.location); router.history.listen(onRouteChange);}}>
        <GooglePlacesApiProvider placesApi={placesApi}>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </GooglePlacesApiProvider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
