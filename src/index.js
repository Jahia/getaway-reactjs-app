import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import GetawayConstants from './utils/GetawayConstants';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import GoogleApi from "./components/external/GooglePlacesApi";
import GooglePlacesApiProvider from "./components/external/GooglePlacesApiProvider";

const httpLink = new HttpLink({
    uri: GetawayConstants.dxHost + '/modules/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const placesApi = new GoogleApi();

ReactDOM.render(
    <BrowserRouter>
        <GooglePlacesApiProvider placesApi={placesApi}>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </GooglePlacesApiProvider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
