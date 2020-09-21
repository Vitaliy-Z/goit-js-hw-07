const counterValueRef = document.querySelector(`#value`);
const btnDecrementRef = document.querySelector(`[data-action="decrement"]`);
const btnIncrementRef = document.querySelector(`[data-action="increment"]`);

const decrement = (value) => {
  value -= 1;
  return value;
};

const increment = (value) => {
  value += 1;
  return value;
};

function onBtnDecrementClick() {
  const res = decrement(Number(counterValueRef.textContent));
  counterValueRef.textContent = `${res}`;
}

function onBtnIncrementClick() {
  const res = increment(Number(counterValueRef.textContent));
  counterValueRef.textContent = `${res}`;
}

btnDecrementRef.addEventListener("click", onBtnDecrementClick);

btnIncrementRef.addEventListener("click", onBtnIncrementClick);
