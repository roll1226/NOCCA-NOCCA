const sheet = document.querySelector(".sheet");
sheet.style.transform = `rotateX(60deg) rotateY(0deg) rotateZ(40deg)`;

// 横方向のカメラ
const cameraHorizontal = document.querySelector("#camera-horizontal");
cameraHorizontal.addEventListener("input", (e) => {
  sheet.style.transform = `rotateX(60deg) rotateY(0deg) rotateZ(${e.target.value}deg)`;
});
