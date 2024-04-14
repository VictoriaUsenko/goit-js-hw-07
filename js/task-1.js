const categoriesEl = document.querySelectorAll("#categories .item");

const getSubCategories = (category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);

  const subCategoriesEl = category.querySelectorAll("li");
  console.log(`Elements: ${subCategoriesEl.length}`);
};

console.log(`Numder of categories: ${categoriesEl.length}`);
categoriesEl.forEach(getSubCategories);
