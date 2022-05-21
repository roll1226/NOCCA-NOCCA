import control from "./_control";
import level, { ONE, TWE } from "./_level";

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

document.querySelectorAll(".block__white").forEach((e) => {
  e.addEventListener("click", () => {
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

      switch (levelIndex) {
        case 0:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "none";
          arrows[4].style.display = "none";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 1:
        case 2:
        case 3:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "none";
          arrows[4].style.display = "none";
          arrows[5].style.display = "none";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        case 4:
          arrows[0].style.display = "block";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "none";
          arrows[5].style.display = "none";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        case 5:
        case 10:
        case 15:
        case 20:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 9:
        case 14:
        case 19:
        case 24:
          arrows[0].style.display = "block";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        case 25:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 29:
          arrows[0].style.display = "block";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        default:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;
      }
    });
  });
});

for (let index = 1; index <= 5; index++) {
  document
    .querySelectorAll(`.block__white--${index}--arrow`)
    .forEach((arrow) => {
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

        // FRONT
        if (
          ~arrowClass.indexOf(FRONT) &&
          !~arrowClass.indexOf(FRONT_RIGHT) &&
          !~arrowClass.indexOf(FRONT_LEFT)
        ) {
          console.log("FRONT");
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

        // FRONT RIGHT
        if (~arrowClass.indexOf(FRONT_RIGHT)) {
          console.log("FRONT RIGHT");
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
          console.log("BACK_RIGHT");
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
          console.log("BACK");
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
          console.log("BACK_LEFT");
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
          console.log("LEFT");
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
          console.log("FRONT_LEFT");
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

        console.log(levelOne, levelTwe, levelThree);
      });
    });
}

document.querySelectorAll(".block__black").forEach((e) => {
  e.addEventListener("click", () => {
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
        arrows[0].style.display = "none";
        arrows[1].style.display = "none";
        arrows[2].style.display = "none";
        arrows[3].style.display = "none";
        arrows[4].style.display = "none";
        arrows[5].style.display = "none";
        arrows[6].style.display = "none";
        arrows[7].style.display = "none";
        return;
      }

      if (nowLevel === TWE && levelThree[levelIndex] !== "") {
        arrows[0].style.display = "none";
        arrows[1].style.display = "none";
        arrows[2].style.display = "none";
        arrows[3].style.display = "none";
        arrows[4].style.display = "none";
        arrows[5].style.display = "none";
        arrows[6].style.display = "none";
        arrows[7].style.display = "none";
        return;
      }

      switch (levelIndex) {
        case 29:
          arrows[0].style.display = "none";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "none";
          break;

        case 28:
        case 27:
        case 26:
          arrows[0].style.display = "none";
          arrows[1].style.display = "none";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "none";
          break;

        case 25:
          arrows[0].style.display = "none";
          arrows[1].style.display = "none";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 5:
        case 10:
        case 15:
        case 20:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 9:
        case 14:
        case 19:
        case 24:
          arrows[0].style.display = "block";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        case 0:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "none";
          arrows[6].style.display = "none";
          arrows[7].style.display = "none";
          break;

        case 4:
          arrows[0].style.display = "block";
          arrows[1].style.display = "none";
          arrows[2].style.display = "none";
          arrows[3].style.display = "none";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;

        default:
          arrows[0].style.display = "block";
          arrows[1].style.display = "block";
          arrows[2].style.display = "block";
          arrows[3].style.display = "block";
          arrows[4].style.display = "block";
          arrows[5].style.display = "block";
          arrows[6].style.display = "block";
          arrows[7].style.display = "block";
          break;
      }
    });
  });
});

for (let index = 1; index <= 5; index++) {
  document
    .querySelectorAll(`.block__black--${index}--arrow`)
    .forEach((arrow) => {
      arrow.addEventListener("click", () => {
        console.log(arrow.className);
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

        // FRONT
        if (
          ~arrowClass.indexOf(FRONT) &&
          !~arrowClass.indexOf(FRONT_RIGHT) &&
          !~arrowClass.indexOf(FRONT_LEFT)
        ) {
          console.log("FRONT");
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
        // FRONT RIGHT
        if (~arrowClass.indexOf(FRONT_RIGHT)) {
          console.log("FRONT RIGHT");
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
        // RIGHT
        if (
          ~arrowClass.indexOf(RIGHT) &&
          !~arrowClass.indexOf(FRONT_RIGHT) &&
          !~arrowClass.indexOf(BACK_RIGHT)
        ) {
          console.log("RIGHT");
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
          console.log("BACK_RIGHT");
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
          console.log("BACK");
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
          console.log("BACK_LEFT");
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
          console.log("LEFT");
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
          console.log("FRONT_LEFT");
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
      });
    });
}
