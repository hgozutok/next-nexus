import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../modules/graphql/schema';
//import { schema } from '../generated/schema';

const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req })
})

export { server };