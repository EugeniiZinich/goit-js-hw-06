const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  widget: document.querySelector('.widget'),
  colorValue: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.changeColorBtn.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor(event) {
  const randomColor = getRandomHexColor();
  refs.widget.style.backgroundColor = randomColor;
  refs.colorValue.textContent = randomColor;
}
