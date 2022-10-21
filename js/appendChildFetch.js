const API_URL = "http://jsonplaceholder.typicode.com";

const myHTMLResponse = document.querySelector("#app");

const ul = document.createDocumentFragment("ul");
// 'response' es formato 'string'
fetch(`${API_URL}/albums`)
  .then((response) => response.json())
  .then((albums) => {
    albums.forEach((albums) => {
      let elemento = document.createElement("li");
      elemento.appendChild(document.createTextNode(`${albums.title}`));
      ul.appendChild(elemento);
    });
    myHTMLResponse.appendChild(ul);
  });
