const URL = "https://coding-challenge-api.aerolab.co/products/";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFjMzFjMDFmMWY0NTAwMjEwOTliNjAiLCJpYXQiOjE2NjI3OTIxMjl9.rNPq16e0LRduvU98shcQ8zKjKAqbOpAQKtH6oL_x10g",
};

const getData = () => {
  return fetch(URL, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};

export const getUserData = () => {
  const userUrl = "https://coding-challenge-api.aerolab.co/user/me";
  return fetch(userUrl, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};

export const updatePoints = (amount) => {
  const postUserUrl = "https://coding-challenge-api.aerolab.co/user/points";
  return fetch(postUserUrl, {
    method: "POST",
    body: JSON.stringify({ "amount": amount }),
    headers: HEADERS,
  });
};

export const addItemToHistory = (id) => {
  const postReedemURL = "https://coding-challenge-api.aerolab.co/redeem";
  return fetch(postReedemURL, {
    method: "POST",
    body: JSON.stringify({ productId: id }),
    headers: HEADERS,
  });
};

export default getData;