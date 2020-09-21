const inputRef = document.querySelector("#validation-input");
console.log(typeof Number(inputRef.dataset.length));

function onInputBlur(event) {
  console.log(typeof event.currentTarget.value.length);
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
  } else if (event.currentTarget.value.length > 0) {
    inputRef.classList.add("invalid");
  }
}

function onInputFocus() {
  inputRef.removeAttribute("class");
}

inputRef.addEventListener("focus", onInputFocus);

inputRef.addEventListener("blur", onInputBlur);