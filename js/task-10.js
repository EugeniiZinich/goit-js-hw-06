const refs = {
  createBtn: document.querySelector('[data-create="create"]'),
  destroyBtn: document.querySelector('[data-destroy="destroy"]'),
  divBox: document.querySelector('#boxes'),
  inputValue: document.querySelector('#controls > input'),
};

refs.createBtn.addEventListener('click', getAmountInput);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getAmountInput() {
  const amount = refs.inputValue.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement('div');
    console.log(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    refs.divBox.append(div);
  }
}

function destroyBoxes() {
  refs.divBox.innerHTML = '';

  if (refs.inputValue.value !== '') {
    refs.inputValue.value = '';
  }
}
