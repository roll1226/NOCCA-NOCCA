import arrowStyle, { BLOCK, NONE } from "./_arrowStyle";
import control from "./_control";
import level, { ONE, TWE } from "./_level";
import { BLACK, playGame, WHITE } from "./_playGame";
import { winnerAnimation } from "./_winner";

const FRONT = "front";
const FRONT_RIGHT = "front__right";
const RIGHT = "right";
const BACK_RIGHT = "back__right";
const BACK = "back";
const BACK_LEFT = "back__left";
const LEFT = "left";
const FRONT_LEFT = "front__left";

let levelOne = level.one();
let levelTwe = level.twe();
let levelThree = level.three();
let move_player = WHITE;

document.querySelectorAll(".block__white").forEach((e) => {
  e.addEventListener("click", () => {
    if (move_player !== WHITE) return;

    document.querySelectorAll(".arrow").forEach((arrowStyle) => {
      arrowStyle.style.display = "none";
    });

      const arrows = document.querySelectorAll(`.${e.id}--arrow`);
    arrows.forEach((arrow) => {
      arrow.style.display = "block";
      let levelIndex = ~levelOne.indexOf(e.id) ? levelOne.indexOf(e.id) : 0;
      levelIndex = ~levelTwe.indexOf(e.id)
        ? levelTwe.indexOf(e.id)
        : levelIndex;
      levelIndex = ~levelThree.indexOf(e.id)
        ? levelThree.indexOf(e.id)
        : levelIndex;

      const nowLevel = level.nowLevel(levelOne, levelTwe, levelThree, e.id);

      if (nowLevel === ONE && levelTwe[levelIndex] !== "") {
        arrowStyle.style(arrows, [
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
        ]);
        return;
      }

      if (nowLevel === TWE && levelThree[levelIndex] !== "") {
        arrowStyle.style(arrows, [
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
        ]);
        return;
      }

      switch (levelIndex) {
        case 0:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 1:
        case 2:
        case 3:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
          ]);
          break;

        case 4:
          arrowStyle.style(arrows, [
            BLOCK,
            NONE,
            NONE,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
          ]);
          break;

        case 5:
        case 10:
        case 15:
        case 20:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 9:
        case 14:
        case 19:
        case 24:
          arrowStyle.style(arrows, [
            BLOCK,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;

        case 25:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 29:
          arrowStyle.style(arrows, [
            BLOCK,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;

        default:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;
      }
    });
  });
});

for (let index = 1; index <= 5; index++) {
  const arrows = document.querySelectorAll(`.block__white--${index}--arrow`);

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const arrowClass = arrow.className;

      const blockClass = `block__white--${index}`;
      const nowLevel = level.nowLevel(
        levelOne,
        levelTwe,
        levelThree,
        blockClass
      );

      const blockIndex = level.blockIndex(
        levelOne,
        levelTwe,
        levelThree,
        blockClass
      );

      let nextBlockIndex = 0;

      // FRONT
      if (
        ~arrowClass.indexOf(FRONT) &&
        !~arrowClass.indexOf(FRONT_RIGHT) &&
        !~arrowClass.indexOf(FRONT_LEFT)
      ) {
        nextBlockIndex = blockIndex + 5;
        if (nextBlockIndex < 30) {
          const front = control.front(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = front[0];
          levelTwe = front[1];
          levelThree = front[2];
        }
      }

      // FRONT RIGHT
      if (~arrowClass.indexOf(FRONT_RIGHT)) {
        nextBlockIndex = blockIndex + 6;
        if (nextBlockIndex < 30) {
          const frontRight = control.frontRight(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = frontRight[0];
          levelTwe = frontRight[1];
          levelThree = frontRight[2];
        }
      }
      // RIGHT
      if (
        ~arrowClass.indexOf(RIGHT) &&
        !~arrowClass.indexOf(FRONT_RIGHT) &&
        !~arrowClass.indexOf(BACK_RIGHT)
      ) {
        const right = control.right(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = right[0];
        levelTwe = right[1];
        levelThree = right[2];
      }
      // BACK RIGHT
      if (~arrowClass.indexOf(BACK_RIGHT)) {
        const backRight = control.backRight(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = backRight[0];
        levelTwe = backRight[1];
        levelThree = backRight[2];
      }
      // BACK
      if (
        ~arrowClass.indexOf(BACK) &&
        !~arrowClass.indexOf(BACK_RIGHT) &&
        !~arrowClass.indexOf(BACK_LEFT)
      ) {
        const back = control.back(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = back[0];
        levelTwe = back[1];
        levelThree = back[2];
      }
      // BACK LEFT
      if (~arrowClass.indexOf(BACK_LEFT)) {
        const backLeft = control.backLeft(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = backLeft[0];
        levelTwe = backLeft[1];
        levelThree = backLeft[2];
      }
      // LEFT
      if (
        ~arrowClass.indexOf(LEFT) &&
        !~arrowClass.indexOf(FRONT_LEFT) &&
        !~arrowClass.indexOf(BACK_LEFT)
      ) {
        const left = control.left(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = left[0];
        levelTwe = left[1];
        levelThree = left[2];
      }
      // FRONT LEFT
      if (~arrowClass.indexOf(FRONT_LEFT)) {
        nextBlockIndex = blockIndex + 4;
        if (nextBlockIndex < 30) {
          const frontLeft = control.frontLeft(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = frontLeft[0];
          levelTwe = frontLeft[1];
          levelThree = frontLeft[2];
        }
      }

      const playGameList = playGame(levelOne, levelTwe, levelThree, WHITE);
      if (!playGameList.isWinner) {
        move_player = playGameList.player;
      } else {
        winnerAnimation(playGameList.player);
        move_player = "";
      }

      console.log(nextBlockIndex);
      if (nextBlockIndex >= 30) {
        winnerAnimation(WHITE);
        move_player = "";
      }

      arrowStyle.style(arrows, [
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
      ]);
    });
  });
}

document.querySelectorAll(".block__black").forEach((e) => {
  e.addEventListener("click", () => {
    if (move_player !== BLACK) return;
    document.querySelectorAll(".arrow").forEach((arrowStyle) => {
      arrowStyle.style.display = "none";
    });

    const arrows = document.querySelectorAll(`.${e.id}--arrow`);
    arrows.forEach((arrow) => {
      arrow.style.display = "block";
      let levelIndex = ~levelOne.indexOf(e.id) ? levelOne.indexOf(e.id) : 0;
      levelIndex = ~levelTwe.indexOf(e.id)
        ? levelTwe.indexOf(e.id)
        : levelIndex;
      levelIndex = ~levelThree.indexOf(e.id)
        ? levelThree.indexOf(e.id)
        : levelIndex;

      const nowLevel = level.nowLevel(levelOne, levelTwe, levelThree, e.id);

      if (nowLevel === ONE && levelTwe[levelIndex] !== "") {
        arrowStyle.style(arrows, [
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
        ]);
        return;
      }

      if (nowLevel === TWE && levelThree[levelIndex] !== "") {
        arrowStyle.style(arrows, [
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
          NONE,
        ]);
        return;
      }

      switch (levelIndex) {
        case 29:
          arrowStyle.style(arrows, [
            NONE,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
          ]);
          break;

        case 28:
        case 27:
        case 26:
          arrowStyle.style(arrows, [
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
          ]);
          break;

        case 25:
          arrowStyle.style(arrows, [
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 5:
        case 10:
        case 15:
        case 20:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 9:
        case 14:
        case 19:
        case 24:
          arrowStyle.style(arrows, [
            BLOCK,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;

        case 0:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            NONE,
            NONE,
            NONE,
          ]);
          break;

        case 4:
          arrowStyle.style(arrows, [
            BLOCK,
            NONE,
            NONE,
            NONE,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;

        default:
          arrowStyle.style(arrows, [
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
            BLOCK,
          ]);
          break;
      }
    });
  });
});

for (let index = 1; index <= 5; index++) {
  const arrows = document.querySelectorAll(`.block__black--${index}--arrow`);

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const arrowClass = arrow.className;

      const blockClass = `block__black--${index}`;
      const nowLevel = level.nowLevel(
        levelOne,
        levelTwe,
        levelThree,
        blockClass
      );

      const blockIndex = level.blockIndex(
        levelOne,
        levelTwe,
        levelThree,
        blockClass
      );

      let nextBlockIndex = 0;

      // FRONT
      if (
        ~arrowClass.indexOf(FRONT) &&
        !~arrowClass.indexOf(FRONT_RIGHT) &&
        !~arrowClass.indexOf(FRONT_LEFT)
      ) {
        nextBlockIndex = blockIndex - 5;
        if (nextBlockIndex >= 0) {
          const front = control.back(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = front[0];
          levelTwe = front[1];
          levelThree = front[2];
        }
      }
      // FRONT RIGHT
      if (~arrowClass.indexOf(FRONT_RIGHT)) {
        nextBlockIndex = blockIndex - 4;
        if (nextBlockIndex >= 0) {
          const frontRight = control.backRight(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = frontRight[0];
          levelTwe = frontRight[1];
          levelThree = frontRight[2];
        }
      }
      // RIGHT
      if (
        ~arrowClass.indexOf(RIGHT) &&
        !~arrowClass.indexOf(FRONT_RIGHT) &&
        !~arrowClass.indexOf(BACK_RIGHT)
      ) {
        const right = control.right(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = right[0];
        levelTwe = right[1];
        levelThree = right[2];
      }
      // BACK RIGHT
      if (~arrowClass.indexOf(BACK_RIGHT)) {
        const backRight = control.frontRight(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = backRight[0];
        levelTwe = backRight[1];
        levelThree = backRight[2];
      }
      // BACK
      if (
        ~arrowClass.indexOf(BACK) &&
        !~arrowClass.indexOf(BACK_RIGHT) &&
        !~arrowClass.indexOf(BACK_LEFT)
      ) {
        const back = control.front(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = back[0];
        levelTwe = back[1];
        levelThree = back[2];
      }
      // BACK LEFT
      if (~arrowClass.indexOf(BACK_LEFT)) {
        const backLeft = control.frontLeft(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = backLeft[0];
        levelTwe = backLeft[1];
        levelThree = backLeft[2];
      }
      // LEFT
      if (
        ~arrowClass.indexOf(LEFT) &&
        !~arrowClass.indexOf(FRONT_LEFT) &&
        !~arrowClass.indexOf(BACK_LEFT)
      ) {
        const left = control.left(
          levelOne,
          levelTwe,
          levelThree,
          blockIndex,
          nowLevel
        );

        levelOne = left[0];
        levelTwe = left[1];
        levelThree = left[2];
      }
      // FRONT LEFT
      if (~arrowClass.indexOf(FRONT_LEFT)) {
        nextBlockIndex = blockIndex - 6;
        if (nextBlockIndex >= 0) {
          const frontLeft = control.backLeft(
            levelOne,
            levelTwe,
            levelThree,
            blockIndex,
            nowLevel
          );

          levelOne = frontLeft[0];
          levelTwe = frontLeft[1];
          levelThree = frontLeft[2];
        }
      }

      const playGameList = playGame(levelOne, levelTwe, levelThree, BLACK);
      if (!playGameList.isWinner) {
        move_player = playGameList.player;
      } else {
        winnerAnimation(playGameList.player);
        move_player = "";
      }

      if (nextBlockIndex < 0) {
        winnerAnimation(BLACK);
      }
      arrowStyle.style(arrows, [
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
        NONE,
      ]);
    });
  });
}
