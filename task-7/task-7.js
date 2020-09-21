const ref = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

function onChangeFontSizeText(event) {
  ref.textRef.style.fontSize = `${event.currentTarget.value}px`;
}

ref.inputRef.addEventListener("input", onChangeFontSizeText);
