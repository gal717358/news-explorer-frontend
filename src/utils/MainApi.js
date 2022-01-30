export const BASE_URL = 'https://api.gal.buzaglo.students.nomoreparties.sbs';
// export const BASE_URL = 'https://api.gal.buzaglo.students.nomoreparties.sbs';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}: ${res.statusText}`);
};

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => handleResponse(res));
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => handleResponse(res))
    .then((data) => {
      localStorage.setItem('token', data.token);
      return data;
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    handleResponse(res);
  });
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};

export const getUserArticles = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

export const saveArticle = (token, data, searchQuery) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: searchQuery,
      title: data.title,
      text: data.description,
      date: data.publishedAt,
      source: data.source.name,
      link: data.url,
      image: data.urlToImage,
    }),
  }).then((res) => handleResponse(res));
};

export const deleteArticle = (isToken, articleId) =>{
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isToken}`,
    },
  }).then((res) => handleResponse(res));
}
