const inputRef = document.querySelector("#controls > input");

inputRef.addEventListener("input", onInputRefValue);

function onInputRefValue(event) {
  console.log(event.currentTarget.value);
}

const boxesRef = document.querySelector("boxes");
console.log(boxesRef);
