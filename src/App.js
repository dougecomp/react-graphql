import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ExchangeRates from './components/ExchangeRates';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        Currency Conversion App
        <ExchangeRates>

        </ExchangeRates>
      </div>
    </ApolloProvider>
  );
}

export default App;
