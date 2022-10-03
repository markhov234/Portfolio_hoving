const backgroundTriangle = (nbOfTriangle) => {
  const arrayTriangle = [];
  const colors = ["#1C7C54", "#000807", "#8C5E58", "#EF476F"];

  for (let int = 0; int < nbOfTriangle; int++) {
    const selectionCouleur = Math.floor(Math.random() * 4);
    const selectionWidth = Math.floor(Math.random() * (58 - 16 + 1) + 16);
    const selectionRotate = Math.floor(Math.random() * (360 - 16 + 1) + 16);
    const axeX = Math.floor(Math.random() * (95 - 5 + 1) + 5);
    const axeY = Math.floor(Math.random() * (95 - 5 + 1) + 5);
    const parallaxNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    const selectedColor = colors[selectionCouleur];
    let parallaxY = false;
    if (axeY % 2 === 0) {
      parallaxY = true;
    }
    console.log("allo");
    arrayTriangle.push([
      selectionRotate,
      selectionWidth,
      selectedColor,
      axeX,
      axeY,
      parallaxNumber,
      parallaxY,
    ]);
  }

  return { arrayTriangle };
};
export default backgroundTriangle;
