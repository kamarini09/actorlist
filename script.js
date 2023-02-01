window.addEventListener("load", setup);
let endpoint = actors.json;


function setup() {
  getActors(); 
}


function getActors() {
  console.log(endpoint);
  fetch(endpoint)
  .then(res => res.json())
  .then(setupActors);
}

function setupActors(catArray){
  console.log(catArray)
  const template = document.querySelector("#actorlist").content;
  const parentElement = document.querySelector("ul.images");
  catArray.forEach(product => {
      const copy = template.cloneNode(true);
      copy.querySelector(".fullname").textContent= `${product.fullname}`;
      copy.querySelector(".movie").textContent= `${product.name}`;
      parentElement.appendChild(copy);
  });
}
