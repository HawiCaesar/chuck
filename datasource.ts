import { RESTDataSource } from 'apollo-datasource-rest';

export class ChuckAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  async getChuckCategories() {
    return this.get('categories', '', {
      cacheOptions: { ttl: 10 },
    });
  }

  async getRandomJokeBasedOnCategory(category: string) {
    return this.get(`random?category=${category}`);
  }
}
