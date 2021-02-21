import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Joke {
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    value: String!
    categories: [String]!
  }

  type Query {
    chuckCategories: [String]!
    randomJokeBasedOnCategory(category: String!): Joke
  }
`;
