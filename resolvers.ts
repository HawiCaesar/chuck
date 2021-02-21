import { ChuckAPI } from './datasource';

export const resolvers = {
  Query: {
    chuckCategories: (root: any, args: any, context: any) => {
      const dataSources: ChuckAPI = context.dataSources.chuckAPI;
      return dataSources.getChuckCategories();
    },

    randomJokeBasedOnCategory: (root: any, args: any, context: any) => {
      const category: string = args.category;
      const dataSources: ChuckAPI = context.dataSources.chuckAPI;
      return dataSources.getRandomJokeBasedOnCategory(category);
    },
  },
};
