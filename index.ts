import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { ChuckAPI } from './datasource';
import { ApolloServer } from 'apollo-server';

const dataSources = () => ({
  chuckAPI: new ChuckAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
