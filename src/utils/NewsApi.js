import { ARTICLES_URL, PROXY_URL, API_KEY, SEARCH_INT } from './constants';

class NewsApi {
  constructor(options) {
    this.headers = options.headers;
    this.apiKey = options.apiKey;
    this.currentDay = options.currentDay;
    this.lastWeek = options.lastWeek;
    this.newsURL = options.newsUrl;
    this.practiceUrl = options.practiUrl;
  }
    getArticles() {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then((res) => {
      return res.json()
    })
  }
}

const newsApi = new NewsApi({
  newsURL: ARTICLES_URL,
  currentDay: new Date(),
  apiKey: API_KEY,
  lastWeek: new Date(Date.now() - SEARCH_INT),
  practiceUrl: PROXY_URL,
});

export default newsApi;

