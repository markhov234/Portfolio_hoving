const backgroundTriangle = (nbOfTriangle) => {
  const arrayTriangle = [];
  let colors = ["#1C7C54", "#000807", "#8C5E58", "#EF476F"];

  for (let int = 0; int < nbOfTriangle; int++) {
    let selectionCouleur = Math.floor(Math.random() * 4);
    let selectionWidth = Math.floor(Math.random() * (58 - 16 + 1) + 16);
    let selectionRotate = Math.floor(Math.random() * (360 - 16 + 1) + 16);
    let axeX = Math.floor(Math.random() * (95 - 5 + 1) + 5);
    let axeY = Math.floor(Math.random() * (95 - 5 + 1) + 5);
    let parallaxNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let selectedColor = colors[selectionCouleur];

    arrayTriangle.push([
      selectionRotate,
      selectionWidth,
      selectedColor,
      axeX,
      axeY,
      parallaxNumber,
    ]);
  }

  return { arrayTriangle };
};
export default backgroundTriangle;
