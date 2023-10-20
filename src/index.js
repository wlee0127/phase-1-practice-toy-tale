fetch("http://localhost:3000/toys")
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data);
  console.log(data.length);
  for (i=0; i<=data.length-1; i++) {
    let toyCollection = document.getElementById("toy-collection");
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let h2 = document.createElement("h2");
    h2.textContent = data[i].name;
    let img = document.createElement("img");
    img.src = data[i].image;
    img.setAttribute("class", "toy-avatar");
    let p = document.createElement("p");
    p.textContent = data[i].likes;
    let button = document.createElement("button");
    button.setAttribute("class", "like-btn");
    button.setAttribute("id", data[i].id);
    button.textContent = "Like ❤️";
    div.append(h2,img,p,button);
    toyCollection.appendChild(div);
  }
})
.catch(error => {
  console.error('error', error);
})

let newToy = document.getElementById("new-toy-btn");
newToy.addEventListener("click", function() {
  fetch("http://localhost:3000/toys",{
    method: "POST",
    headers: {
      "content-Type": "application/json",
      //Accept: "application/json"
    },
    body: JSON.stringify({
      "name": "Jessie",
      "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
      "likes": 0
    })
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    let toyCollection = document.getElementById("toy-collection");
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let h2 = document.createElement("h2");
    h2.textContent = data.name;
    let img = document.createElement("img");
    img.src = data.image;
    img.setAttribute("class", "toy-avatar");
    let p = document.createElement("p");
    p.textContent = data.likes;
    let button = document.createElement("button");
    button.setAttribute("class", "like-btn");
    button.setAttribute("id", data.id);
    button.textContent = "Like ❤️";
    div.append(h2,img,p,button);
    toyCollection.appendChild(div);
  })
})



/*
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
*/
