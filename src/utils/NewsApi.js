import { ARTICLES_URL, API_KEY, SEARCH_TIME, PROXY_URL } from './constants';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}: ${res.statusText}`);
};

class NewsApi {
  constructor(options) {
    this.apiKey = options.apiKey;
    this.currentDay = options.currentDay;
    this.lastWeek = options.lastWeek;
    this.newsURL = options.newsUrl;
  }
  getArticles(searchQuery) {
    return fetch(
      `${PROXY_URL}/v2/everything?q=${searchQuery}&from=${this.lastWeek.toISOString()}&to=${this.currentDay.toISOString()}&sortBy=popularity&pageSize=100&apiKey=${API_KEY}`,
    ).then((res) => handleResponse(res));
  }
}

const newsApi = new NewsApi({
  newsURL: ARTICLES_URL,
  currentDay: new Date(),
  apiKey: API_KEY,
  lastWeek: new Date(Date.now() - SEARCH_TIME),
});

export default newsApi;
