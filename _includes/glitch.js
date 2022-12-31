//glitch
let originalDiv = document.querySelector(".glitch .text span");

for (let i = 0; i <3; i++) {
  let clonedDiv = originalDiv.cloneNode(true); 
document.querySelector(".glitch .text").prepend(clonedDiv);
}
