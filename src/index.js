import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
/* import './index.css'; TODO review this */
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/getaway'
});

const middlewareAuthLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'X-GETAWAY': 'getaway',
            'Accept': 'application/json'
        }
    });
    return forward(operation);
});

const httpLinkWithHeaders = middlewareAuthLink.concat(httpLink);

const client = new ApolloClient({
    link: httpLinkWithHeaders,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client = {client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
