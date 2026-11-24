//glitch
let originalDiv = document.querySelector(".glitch .glitch-title .h1");

if (originalDiv) {
  for (let i = 0; i <3; i++) {
    let clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.classList.add("glitch-layer");
    clonedDiv.setAttribute("aria-hidden", "true");
    originalDiv.parentNode.prepend(clonedDiv);
  }
}
