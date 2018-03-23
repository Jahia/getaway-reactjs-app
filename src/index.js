import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
/* import './index.css'; TODO review this */
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import GetawayConstants from './utils/GetawayConstants'
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {ApolloLink} from 'apollo-client-preset'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    uri: GetawayConstants.dxHost + '/modules/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
