const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

function onNameInput(params) {
  if (params.currentTarget.value !== "") {
    outputNameRef.textContent = params.currentTarget.value;
  } else {
    outputNameRef.textContent = "незнакомец";
  }
}

inputNameRef.addEventListener("input", onNameInput);
