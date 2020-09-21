const categoriesRef = document.querySelector("#categories");

const rowAmountCategoriesRef = `В списке ${categoriesRef.children.length} категории.`;
console.log(rowAmountCategoriesRef);

const itemsCategoriesRef = document.querySelectorAll(`.item`);

itemsCategoriesRef.forEach((item) =>
  console.log(`Категория: ${item.querySelector(`h2`).textContent}
 Количество элементов: ${item.querySelector(`ul`).children.length}`)
);
