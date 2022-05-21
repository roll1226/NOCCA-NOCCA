export const BLOCK = "block";
export const NONE = "none";

class arrowStyle {
  static style(arrows, styles) {
    arrows.forEach((arrow, arrowIndex) => {
      arrow.style.display = styles[arrowIndex];
    });
  }
}

export default arrowStyle;
