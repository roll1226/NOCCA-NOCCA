const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  document.querySelector(".top").classList.add("top--close");

  document.querySelector("#camera-horizontal").classList.add("start--game");
  document.querySelector(".main").classList.add("start--game");
});
