import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfqlopyb052901ui0tly0f4y/master",
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};