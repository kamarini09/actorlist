// const open = document.querySelector("section");
const container = document.getElementById('pop-up');
const close = document.querySelector("button");

// open.addEventListener('click', () => {
//   container.classList.remove('hidden');

// })

// close.addEventListener('click', () => {
//   container.classList.add('hidden');

// })



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
  let fullName = clone.querySelector(".fullname");
  fullName.textContent = actor.fullname;
  clone.querySelector(".movie").textContent = actor.movie;
  // clone.querySelector("p.info").textContent = actor.info;
 
  fullName.addEventListener('click',() => {popUp(actor)});
  const parent = document.querySelector("section#actors");


  parent.appendChild(clone);
}



function popUp(actor){
const popup = document.querySelector("#pop-up");
const popupname = popup.querySelector(".fullname");
const popupMovie = popup.querySelector(".movie");

popup.classList.remove("hidden");
popupname.textContent = actor.fullname;
popupMovie.textContent = actor.movie;
// i have to add the class hidden in the button
popup.querySelector("button").addEventListener('click', ()=>{popup.classList.add("hidden")} ) ;
}