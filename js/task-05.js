const refs = {
  inputName: document.querySelector('#name-input'),
  spanValue: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', onChangeNameRow);

function onChangeNameRow(event) {
  if (event.currentTarget.value === '') {
    refs.spanValue.textContent = 'Anonymous';
  } else {
    refs.spanValue.textContent = event.currentTarget.value;
  }
}
