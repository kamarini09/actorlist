const open = document.querySelector("section");
const container = document.getElementById('pop-up');
const close = document.querySelector("button");

open.addEventListener('click', () => {
  container.classList.remove('hidden');

})

close.addEventListener('click', () => {
  container.classList.add('hidden');

})



fetch("actors.json")
  .then((res) => res.json())
  .then((data) => ActorsList(data));


function ActorsList(data) {
  console.log(data);
  data.forEach(showActor);
}

function showActor(actor) {
  
  const template = document.querySelector("template#actorlist").content;
  const clone = template.cloneNode(true);
  
  clone.querySelector(".fullname").textContent = actor.fullname;
  clone.querySelector(".movie").textContent = actor.movie;
  // clone.querySelector("p.info").textContent = actor.info;
 
  const parent = document.querySelector("section#actors");

  parent.appendChild(clone);
}