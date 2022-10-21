const API_URL = "http://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

    //readyState:
    // 0 = UNSET, no se ha llamado  al método open
    // 1 = OPENED, se ha llamadado al método open
    // 2 = HEADERS_RECEIVED, se está llamando al método send
    // 3 = LOADING, está cargando, está recibiendo la respuesta
    // 4 = DONE, se ha completado todo
function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
      // 'data' es formato 'string'
      const data = JSON.parse(this.response);
      console.log(data);
      const myHTMLResponse = document.querySelector("#app");

      const myTemplate = data.map(
        (user) => `<li>${user.name} - ${user.email}</li>`
      );
      myHTMLResponse.innerHTML = `<ul>${myTemplate}</ul>`;
    }
};

xhr.addEventListener("load", onRequestHandler );
xhr.open("GET", `${API_URL}/users`);
xhr.send();









