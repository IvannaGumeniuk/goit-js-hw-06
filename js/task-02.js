const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = document.querySelector('#ingredients');

const takeIngredients = options => {
  return options.map((option) => {

    const ingredientList = document.createElement('li');
    ingredientList.textContent = option;
    ingredientList.classList.add('item');
    
    return ingredientList;
  });
};

const elements = takeIngredients(ingredients);
ingredientEl.append(...elements);