const refs = {
  decrementBtnRef: document.querySelector('[data-action="decrement"]'),
  incrementBtnRef: document.querySelector('[data-action="increment"]'),
  valueCount: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementBtnRef.addEventListener('click', onDecrementValue);

refs.incrementBtnRef.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  refs.valueCount.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  refs.valueCount.textContent = counterValue;
}
