import { WHITE } from "./_playGame";

export const winnerAnimation = (player) => {
  setTimeout(() => {
    document.querySelector(".main").style.display = "none";
    document.querySelector("#camera-horizontal").style.display = "none";

    let playerName = "";
    if (player === WHITE) {
      playerName = "白駒の勝ち";
    } else {
      playerName = "黒駒の勝ち";
    }

    document.querySelector(".winner__player--container").dataset.show = "true";
    document.querySelector(".winner__player").innerHTML = playerName;
  }, 300);
};
