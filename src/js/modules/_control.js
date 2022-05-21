import {
  getFrontIndex,
  getFrontRightIndex,
  getRightIndex,
  getBackRightIndex,
  getBackIndex,
  getBackLeftIndex,
  getLeftIndex,
  getFrontLeftIndex,
} from "./_index";
import { ONE, TWE, THREE } from "./_level";

const DEFAULT_PX = 22;
const MOVE_PX = 102;
const FRAME_COUNT = 5;
const INIT_Z = 1;
const MOVE_LEVEL_ONE = INIT_Z;
const MOVE_LEVEL_TWE = 60;
const MOVE_LEVEL_THREE = 120;

class control {
  static front(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId;
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getFrontIndex(blockIndex)] === "") {
      levelOne[getFrontIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontIndex(blockIndex)] !== "" &&
      levelTwe[getFrontIndex(blockIndex)] === ""
    ) {
      levelTwe[getFrontIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontIndex(blockIndex)] !== "" &&
      levelTwe[getFrontIndex(blockIndex)] !== "" &&
      levelThree[getFrontIndex(blockIndex)] === ""
    ) {
      levelThree[getFrontIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static frontRight(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId;
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getFrontRightIndex(blockIndex)] === "") {
      levelOne[getFrontRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontRightIndex(blockIndex)] !== "" &&
      levelTwe[getFrontRightIndex(blockIndex)] === ""
    ) {
      levelTwe[getFrontRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontRightIndex(blockIndex)] !== "" &&
      levelTwe[getFrontRightIndex(blockIndex)] !== "" &&
      levelThree[getFrontRightIndex(blockIndex)] === ""
    ) {
      levelThree[getFrontRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static right(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId = "";
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getRightIndex(blockIndex)] === "") {
      levelOne[getRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getRightIndex(blockIndex)] !== "" &&
      levelTwe[getRightIndex(blockIndex)] === ""
    ) {
      levelTwe[getRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getRightIndex(blockIndex)] !== "" &&
      levelTwe[getRightIndex(blockIndex)] !== "" &&
      levelThree[getRightIndex(blockIndex)] === ""
    ) {
      levelThree[getRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static backRight(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId = "";
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getBackRightIndex(blockIndex)] === "") {
      levelOne[getBackRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackRightIndex(blockIndex)] !== "" &&
      levelTwe[getBackRightIndex(blockIndex)] === ""
    ) {
      levelTwe[getBackRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackRightIndex(blockIndex)] !== "" &&
      levelTwe[getBackRightIndex(blockIndex)] !== "" &&
      levelThree[getBackRightIndex(blockIndex)] === ""
    ) {
      levelThree[getBackRightIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackRightIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) + 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static back(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId;
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getBackIndex(blockIndex)] === "") {
      levelOne[getBackIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackIndex(blockIndex)] !== "" &&
      levelTwe[getBackIndex(blockIndex)] === ""
    ) {
      levelTwe[getBackIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackIndex(blockIndex)] !== "" &&
      levelTwe[getBackIndex(blockIndex)] !== "" &&
      levelThree[getBackIndex(blockIndex)] === ""
    ) {
      levelThree[getBackIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static backLeft(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId = "";
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getBackLeftIndex(blockIndex)] === "") {
      levelOne[getBackLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackLeftIndex(blockIndex)] !== "" &&
      levelTwe[getBackLeftIndex(blockIndex)] === ""
    ) {
      levelTwe[getBackLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getBackLeftIndex(blockIndex)] !== "" &&
      levelTwe[getBackLeftIndex(blockIndex)] !== "" &&
      levelThree[getBackLeftIndex(blockIndex)] === ""
    ) {
      levelThree[getBackLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getBackLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static left(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId = "";
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getLeftIndex(blockIndex)] === "") {
      levelOne[getLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getLeftIndex(blockIndex)] !== "" &&
      levelTwe[getLeftIndex(blockIndex)] === ""
    ) {
      levelTwe[getLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getLeftIndex(blockIndex)] !== "" &&
      levelTwe[getLeftIndex(blockIndex)] !== "" &&
      levelThree[getLeftIndex(blockIndex)] === ""
    ) {
      levelThree[getLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }

  static frontLeft(levelOne, levelTwe, levelThree, blockIndex, nowLevel) {
    let block = null;
    let beforeId;
    if (nowLevel === ONE) {
      block = document.querySelector(`#${levelOne[blockIndex]}`);
      beforeId = levelOne[blockIndex];
    } else if (nowLevel === TWE) {
      block = document.querySelector(`#${levelTwe[blockIndex]}`);
      beforeId = levelTwe[blockIndex];
    } else if (nowLevel === THREE) {
      block = document.querySelector(`#${levelThree[blockIndex]}`);
      beforeId = levelThree[blockIndex];
    }
    if (levelOne[getFrontLeftIndex(blockIndex)] === "") {
      levelOne[getFrontLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_ONE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontLeftIndex(blockIndex)] !== "" &&
      levelTwe[getFrontLeftIndex(blockIndex)] === ""
    ) {
      levelTwe[getFrontLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_TWE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }

    if (
      levelOne[getFrontLeftIndex(blockIndex)] !== "" &&
      levelTwe[getFrontLeftIndex(blockIndex)] !== "" &&
      levelThree[getFrontLeftIndex(blockIndex)] === ""
    ) {
      levelThree[getFrontLeftIndex(blockIndex)] = beforeId;
      block.style.top = `${
        MOVE_PX * ~~(getFrontLeftIndex(blockIndex) / FRAME_COUNT) + DEFAULT_PX
      }px`;
      block.style.left = `${
        MOVE_PX * ((blockIndex % FRAME_COUNT) - 1) + DEFAULT_PX
      }px`;
      block.style.transform = `translateZ(${MOVE_LEVEL_THREE}px)`;

      if (nowLevel === ONE) {
        levelOne[blockIndex] = "";
      } else if (nowLevel === TWE) {
        levelTwe[blockIndex] = "";
      } else if (nowLevel === THREE) {
        levelThree[blockIndex] = "";
      }

      return [levelOne, levelTwe, levelThree];
    }
  }
}

export default control;
