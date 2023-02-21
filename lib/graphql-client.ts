import { GraphQLClient } from 'graphql-request'

// export const graphqlClient = new GraphQLClient(process.env.GRAFBASE_API_URL as string, {
//   headers: {
//     authorization: 'Bearer MY_TOKEN',
//   }
// })


const endpoint = 'http://localhost:3000/api/graphql'

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Bearer MY_TOKEN',
  },
})
