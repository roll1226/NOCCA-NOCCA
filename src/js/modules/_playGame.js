export const WHITE = "white";
export const BLACK = "black";

export const playGame = (levelOne, levelTwe, levelThree, player) => {
  const isPerfectWhite =
    levelTwe.filter((level) => {
      return level.match(/.*white.*/);
    }).length >= 5;

  if (isPerfectWhite) {
    return {
      isWinner: true,
      player: WHITE,
    };
  }

  const isPerfectBlack =
    levelTwe.filter((level) => {
      return level.match(/.*black.*/);
    }).length >= 5;

  if (isPerfectBlack) {
    return {
      isWinner: true,
      player: BLACK,
    };
  }

  if (player === WHITE) {
    return {
      isWinner: false,
      player: BLACK,
    };
  }

  if (player === BLACK) {
    return {
      isWinner: false,
      player: WHITE,
    };
  }
};
