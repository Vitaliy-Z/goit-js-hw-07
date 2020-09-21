const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector(`#ingredients`);

const makeElement = (item) => {
  const makeItemRef = document.createElement(`li`);
  const makeParagraphRef = document.createElement(`p`);
  makeParagraphRef.textContent = item;
  makeItemRef.appendChild(makeParagraphRef);
  return makeItemRef;
};

ingredientsRef.append(...ingredients.map(makeElement));
