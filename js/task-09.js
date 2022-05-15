const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const actualColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  actualColor.innerHTML = color;
  body.style.backgroundColor = color;
});