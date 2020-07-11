const button = document.getElementById('changeColor');

const changeColor = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let colors = [];
  let colorsStr = '';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * arr.length);
    colors.push(arr[random]);
  }

  colors.map((color) => (colorsStr += color.toString()));
  return (document.body.style.background = `#${colorsStr}`);
};

button.addEventListener('click', changeColor);
