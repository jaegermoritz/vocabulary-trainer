import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'
import { onError } from '@apollo/client/link/error'
import { graphqlConfig } from '@repo/shared-config'
import fetch from 'cross-fetch'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )

  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: graphqlConfig.url,
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
  fetch,
})

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
  })
})
