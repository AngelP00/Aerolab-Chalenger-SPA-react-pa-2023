const URL = "https://coding-challenge-api.aerolab.co/products/";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFjMzFjMDFmMWY0NTAwMjEwOTliNjAiLCJpYXQiOjE2NjI3OTIxMjl9.rNPq16e0LRduvU98shcQ8zKjKAqbOpAQKtH6oL_x10g",
};

const getDataAnterior = () => {
  return fetch(URL, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};
const getData2 = (filter) => {
  console.log("ordenar por: ",filter);
  
  return fetch(URL, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};
const getData = (filter) => {
  console.log("ordenar por: ", filter);
  //filter mostRecent, lowToHigh, highToLow
  return fetch(URL, {
    method: "GET",
    headers: HEADERS,
  })
  .then((res) => res.json())
  .then((data) => {
    // Aplicar el filtrado en el lado del cliente según el parámetro
    if (filter === 'lowToHigh') {
      return data.sort((a, b) => a.cost - b.cost);
    } else if (filter === 'highToLow') {
      return data.sort((a, b) => b.cost - a.cost);
    } else {
      return data; // No aplicar ningún filtro
    }
  });
};


export default getData;