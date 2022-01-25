import { ARTICLES_URL, API_KEY, SEARCH_INT } from './constants';

class NewsApi {
  constructor(options) {
    this.apiKey = options.apiKey;
    this.currentDay = options.currentDay;
    this.lastWeek = options.lastWeek;
    this.newsURL = options.newsUrl;
    // this.practiceUrl = options.practiUrl;
  }
  getArticles(searchQuery) {
    return fetch(
      `${ARTICLES_URL}/v2/everything?q=${searchQuery}&from=${this.lastWeek.toISOString()}&to=${this.currentDay.toISOString()}&sortBy=popularity&pageSize=100&apiKey=${API_KEY}`,
    ).then((res) => {
      return res.json();
    });
  }
}

const newsApi = new NewsApi({
  newsURL: ARTICLES_URL,
  currentDay: new Date(),
  apiKey: API_KEY,
  lastWeek: new Date(Date.now() - SEARCH_INT),
  // practiceUrl: PROXY_URL,
});

export default newsApi;
