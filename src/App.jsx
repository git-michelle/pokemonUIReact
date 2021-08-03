import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Routes from "./routes";
import { setContext } from "@apollo/client/link/context";

//setup apollo client
const uri = import.meta.env.VITE_API_URI;
const cache = new InMemoryCache();
const link = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri,
  cache,
  link: authLink.concat(link),
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
export { client };
