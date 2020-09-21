const ref = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

function onChangeFontSizeText(event) {
  console.log(event.currentTarget.value);
  ref.textRef.style.fontSize = `${event.currentTarget.value}px`;
}
