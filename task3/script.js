const trafficLightEl1 = document.querySelector("#trafficLight1");
const trafficLightEl2 = document.querySelector("#trafficLight2");
const trafficLightEl3 = document.querySelector("#trafficLight3");

function makeGreen() {
  trafficLightEl1.style.background = "green";
  trafficLightEl2.style.background = "black";
  trafficLightEl3.style.background = "black";
  trafficLightEl1.removeEventListener("click", makeGreen);
  trafficLightEl1.addEventListener("click", makeYellow);
}

function makeYellow() {
  trafficLightEl1.style.background = "black";
  trafficLightEl3.style.background = "black";
  trafficLightEl2.style.background = "yellow";
  trafficLightEl1.removeEventListener("click", makeYellow);
  trafficLightEl1.addEventListener("click", makeRed);
}

function makeRed() {
  trafficLightEl1.style.background = "black";
  trafficLightEl3.style.background = "red";
  trafficLightEl1.removeEventListener("click", makeRed);
  trafficLightEl1.addEventListener("click", makeGreen);
}

trafficLightEl1.addEventListener("click", makeGreen);
