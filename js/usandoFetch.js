const API_URL = "http://jsonplaceholder.typicode.com";

const myHTMLResponse = document.querySelector("#app");

// 'response' es formato 'string'
 fetch(`${API_URL}/posts`)
   .then((response) => response.json())
   .then((posts) => {
     const myTemplate = posts.map((posts) => `<li>${posts.title}</li>`);

     myHTMLResponse.innerHTML = `<ul>${myTemplate}</ul>`
   });
