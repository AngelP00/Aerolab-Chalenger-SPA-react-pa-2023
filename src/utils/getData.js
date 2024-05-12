const URL = "https://coding-challenge-api.aerolab.co/products/";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwNDg1MWI2MzkwNTAwMjllZTA4NmYiLCJpYXQiOjE3MTU0ODg4NDl9.ChLReCs2SFcDLI7nLLkmInOjZDnw6ufoB1witX55LM8",
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