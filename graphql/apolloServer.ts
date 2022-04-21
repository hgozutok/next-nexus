import { ApolloServer } from 'apollo-server-micro';
import { schema } from './schema';


const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req })
})

export { server };