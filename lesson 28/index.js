const container = document.getElementById("tableContainer");
console.log(container);
const containerByQuery = document.querySelectorAll(".container");

const boxContainer = document.createElement("div");
const box = document.createElement("div");
boxContainer.classList.add("box-container");
box.classList.add("box");
box.innerText = "Our first box";
boxContainer.append(box);
container.append(boxContainer);
