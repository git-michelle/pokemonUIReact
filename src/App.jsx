import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Routes from "./routes";

//setup apollo client
const uri = import.meta.env.VITE_API_URI;
const cache = new InMemoryCache();
const link = createHttpLink({ uri });

const client = new ApolloClient({
  uri,
  cache,
  link,
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
