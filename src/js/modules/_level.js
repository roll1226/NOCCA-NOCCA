export const ONE = "one";
export const TWE = "twe";
export const THREE = "three";

class level {
  static one() {
    return [
      "block__white--1",
      "block__white--2",
      "block__white--3",
      "block__white--4",
      "block__white--5",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "block__black--1",
      "block__black--2",
      "block__black--3",
      "block__black--4",
      "block__black--5",
    ];
  }

  static twe() {
    return [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  }

  static three() {
    return [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  }

  static nowLevel(levelOne, levelTwe, levelThree, blockClass) {
    return ~levelOne.indexOf(blockClass)
      ? ONE
      : ~levelTwe.indexOf(blockClass)
      ? TWE
      : ~levelThree.indexOf(blockClass)
      ? THREE
      : "";
  }

  static blockIndex(levelOne, levelTwe, levelThree, blockClass) {
    let blockIndex = ~levelOne.indexOf(blockClass)
      ? levelOne.indexOf(blockClass)
      : 0;
    blockIndex = ~levelTwe.indexOf(blockClass)
      ? levelTwe.indexOf(blockClass)
      : blockIndex;
    blockIndex = ~levelThree.indexOf(blockClass)
      ? levelThree.indexOf(blockClass)
      : blockIndex;

    return blockIndex;
  }
}

export default level;
