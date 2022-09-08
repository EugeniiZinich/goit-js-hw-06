const inputSizeChange = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputSizeChange.addEventListener('input', onInputChangeSize);

function onInputChangeSize(event) {
  const getInputValue = event.currentTarget.value;
  textRef.style.fontSize = `${getInputValue}px`;
}
