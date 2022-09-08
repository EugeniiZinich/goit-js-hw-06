const refs = {
  inputValue: document.querySelector('#validation-input'),
};

const dataLength = refs.inputValue.getAttribute('data-length');

refs.inputValue.addEventListener('blur', onInputValidCheck);

function onInputValidCheck(event) {
  console.log(event.currentTarget);
  const inputValueLength = event.currentTarget.value.length;

  if (inputValueLength >= dataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
  }

  if (inputValueLength === 0) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.remove('valid');
  }
}
